#!/usr/bin/env node

/**
 * OVHcloud API conformity auditor.
 *
 * Verifies that the operations implemented in the nodes respect their API
 * spec (docs/api-specs/v1|v2/*.json), beyond the (method, path) coverage that
 * compare-coverage.js already measures. For each *.operation.ts file it checks
 * that:
 *
 *  1. the HTTP method + normalized path match a declared spec endpoint;
 *  2. every required path parameter ({name} in the spec path) is referenced in
 *     the operation's path expression;
 *  3. every required query parameter (paramType=query, required=true) is passed
 *     in the query-string argument (qs);
 *  4. every required body field (paramType=body, required=true) is assigned in
 *     the request body (body['field'] = ...).
 *
 * Produces docs/api-reference/conformity-report.md plus a console summary.
 *
 * Run:  node scripts/audit-conformity.js
 *
 * ---------------------------------------------------------------
 * KNOWN LIMITATIONS (read before trusting the numbers)
 * ---------------------------------------------------------------
 * 1. Static analysis only. Dynamic path building through variables, helper
 *    wrappers or exotic object shapes can be missed (same tolerance as
 *    compare-coverage.js).
 * 2. Body detection relies on the generated pattern `body['field'] = ...` and
 *    direct object-literal bodies. Bodies built with spread, loops or helpers
 *    are not analysed.
 * 3. Query detection relies on `qs['field'] = ...` assignments and direct
 *    object literals passed in the qs argument.
 * 4. The spec→node mapping is the same manual table as compare-coverage.js.
 * 5. The script never crashes: any unreadable file, malformed JSON or
 *    unexpected shape is skipped and reported as a warning on stderr.
 * ---------------------------------------------------------------
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SPECS_DIR = path.join(ROOT, 'docs', 'api-specs');
const NODES_DIR = path.join(ROOT, 'nodes');
const REPORT_PATH = path.join(ROOT, 'docs', 'api-reference', 'conformity-report.md');

// ---------------------------------------------------------------------------
// Manual spec → node(s) mapping (same as compare-coverage.js).
// ---------------------------------------------------------------------------
const SPEC_TO_NODES = {
	// --- v1 ---
	allDom: ['OvhCloudAllDom'],
	auth: ['OvhCloudAuth'],
	cdn: ['OvhCloudCdn'],
	cloud: ['OvhCloudPublicCloud', 'OvhCloudPublicCloudAi'],
	cluster: ['OvhCloudClusterHadoop', 'OvhCloudCluster'],
	connectivity: ['OvhCloudConnectivity'],
	contact: ['OvhCloudContact'],
	dbaas: ['OvhCloudDbaas'],
	dedicated: ['OvhCloudDedicated'],
	dedicatedCloud: ['OvhCloudDedicatedCloud'],
	domain: ['OvhCloudDomain'],
	email: ['OvhCloudEmailPro', 'OvhCloudMxPlan'],
	emailExchange: ['OvhCloudExchange'],
	freefax: ['OvhCloudFreefax'],
	horizonView: ['OvhCloudHorizonView'],
	hosting: ['OvhCloudHosting'],
	ip: ['OvhCloudIp'],
	ipLoadbalancing: ['OvhCloudIPLoadbalancing'],
	license: ['OvhCloudLicense'],
	me: ['OvhCloudMe'],
	metrics: ['OvhCloudMetrics'],
	msServices: ['OvhCloudMsServices'],
	newAccount: ['OvhCloudNewAccount'],
	nutanix: ['OvhCloudNutanix'],
	order: ['OvhCloudOrder'],
	overTheBox: ['OvhCloudOverTheBox'],
	ovhCloudConnect: ['OvhCloudOvhCloudConnect'],
	pack: ['OvhCloudPackXdsl', 'OvhCloudPack'],
	partner: ['OvhCloudPartner'],
	price: ['OvhCloudPrice'],
	products: [],
	saas: ['OvhCloudSaasCsp2'],
	secret: ['OvhCloudSecret'],
	service: ['OvhCloudService'],
	services: ['OvhCloudServices'],
	sms: ['OvhCloudSms'],
	ssl: ['OvhCloudSsl'],
	sslGateway: ['OvhCloudSslGateway'],
	stack: ['OvhCloudStack'],
	startup: ['OvhCloudStartup'],
	storage: ['OvhCloudStorage'],
	supply: ['OvhCloudSupply'],
	support: ['OvhCloudSupport'],
	telephony: ['OvhCloudTelephony'],
	veeam: ['OvhCloudVeeamEnterprisePlus'],
	veeamCloudConnect: ['OvhCloudVeeamCloudConnect'],
	vip: ['OvhCloudVip'],
	vps: ['OvhCloudVps'],
	vrack: ['OvhCloudVrack'],
	xdsl: ['OvhCloudXdsl'],
	// --- v2 ---
	backupServices: ['OvhCloudBackupServices'],
	commercialCatalog: ['OvhCloudCommercialCatalog'],
	iam: ['OvhCloudIam'],
	location: ['OvhCloudLocation'],
	managedCMS: ['OvhCloudManagedCms'],
	networkDefense: ['OvhCloudNetworkDefense'],
	notification: ['OvhCloudNotification'],
	okms: ['OvhCloudOkms'],
	publicCloud: ['OvhCloudPublicCloud', 'OvhCloudPublicCloudAi'],
	vmwareCloudDirector: ['OvhCloudVmwareCloudDirector'],
	vrackServices: ['OvhCloudVrackServices'],
	webhosting: ['OvhCloudHosting', 'OvhCloudSsl'],
	zimbra: ['OvhCloudZimbra'],
};

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

const HTTP_CALL_RE =
	/(?:client|new\s+ApiClient\s*\(\s*this\s*\))\.\s*(httpGet|httpPost|httpPut|httpDelete)\s*\(/g;

/** body['field'] = ... */
const BODY_ASSIGN_RE = /body\s*\[\s*'([^']+)'\s*\]\s*=\s*/g;
/** qs['field'] = ... */
const QS_ASSIGN_RE = /qs\s*\[\s*'([^']+)'\s*\]\s*=\s*/g;

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function warn(msg) {
	process.stderr.write(`[audit-conformity] WARN ${msg}\n`);
}

function readJson(filePath) {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	} catch (err) {
		warn(`cannot read/parse ${path.relative(ROOT, filePath)}: ${err.message}`);
		return null;
	}
}

function listSpecFiles(version) {
	const dir = path.join(SPECS_DIR, version);
	if (!fs.existsSync(dir)) return [];
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith('.json') && f !== '_index.json')
		.sort();
}

function listOperationFiles(nodeDir) {
	if (!fs.existsSync(nodeDir)) return [];
	const out = [];
	const walk = (d) => {
		for (const entry of fs.readdirSync(d)) {
			const full = path.join(d, entry);
			const stat = fs.statSync(full);
			if (stat.isDirectory()) {
				walk(full);
			} else if (entry.endsWith('.operation.ts') && !entry.endsWith('.spec.ts')) {
				out.push(full);
			}
		}
	};
	walk(nodeDir);
	return out;
}

/** Normalize `{serviceName}` / `{id}` placeholders to `{x}`. */
function normalizeSpecPath(p) {
	return typeof p === 'string' ? p.replace(/\{[^}]*\}/g, '{x}') : '';
}

/** Extract {param} names from a spec path. */
function pathParamsOf(p) {
	const names = [];
	const re = /\{([^}]*)\}/g;
	let m;
	while ((m = re.exec(p)) !== null) names.push(m[1]);
	return names;
}

/** Extract {param} names from a normalized spec path (used for matching only). */
function matchPath(specPath, nodePath) {
	return normalizeSpecPath(specPath) === nodePath;
}

/**
 * Given the source and the match index right after `(`, return the raw text of
 * the first argument (the path expression).
 */
function extractFirstArg(source, matchEndIndex) {
	let depth = 0;
	let inSingle = false;
	let inDouble = false;
	let inTemplate = false;
	let i = matchEndIndex;
	while (i < source.length) {
		const ch = source[i];
		if (inTemplate) {
			if (ch === '\\') {
				i += 2;
				continue;
			}
			if (ch === '`') inTemplate = false;
			i += 1;
			continue;
		}
		if (inSingle) {
			if (ch === '\\') {
				i += 2;
				continue;
			}
			if (ch === "'") inSingle = false;
			i += 1;
			continue;
		}
		if (inDouble) {
			if (ch === '\\') {
				i += 2;
				continue;
			}
			if (ch === '"') inDouble = false;
			i += 1;
			continue;
		}
		if (ch === '`') {
			inTemplate = true;
			i += 1;
			continue;
		}
		if (ch === "'") {
			inSingle = true;
			i += 1;
			continue;
		}
		if (ch === '"') {
			inDouble = true;
			i += 1;
			continue;
		}
		if (ch === '(') {
			depth += 1;
			i += 1;
			continue;
		}
		if (ch === ')') {
			if (depth === 0) break;
			depth -= 1;
			i += 1;
			continue;
		}
		if (ch === ',' && depth === 0) break;
		i += 1;
	}
	return source.slice(matchEndIndex, i).trim();
}

/** Extract the nth argument (0-based) of a call whose first arg starts at matchEndIndex. */
function extractArg(source, matchEndIndex, argIndex) {
	// Find the closing paren of the call (depth returns to 0).
	let depth = 0;
	let inSingle = false;
	let inDouble = false;
	let inTemplate = false;
	let endIndex = -1;
	let i = matchEndIndex;
	while (i < source.length) {
		const ch = source[i];
		if (inTemplate) {
			if (ch === '\\') {
				i += 2;
				continue;
			}
			if (ch === '`') inTemplate = false;
			i += 1;
			continue;
		}
		if (inSingle) {
			if (ch === '\\') {
				i += 2;
				continue;
			}
			if (ch === "'") inSingle = false;
			i += 1;
			continue;
		}
		if (inDouble) {
			if (ch === '\\') {
				i += 2;
				continue;
			}
			if (ch === '"') inDouble = false;
			i += 1;
			continue;
		}
		if (ch === '`') {
			inTemplate = true;
			i += 1;
			continue;
		}
		if (ch === "'") {
			inSingle = true;
			i += 1;
			continue;
		}
		if (ch === '"') {
			inDouble = true;
			i += 1;
			continue;
		}
		if (ch === '(' || ch === '{') {
			depth += 1;
			i += 1;
			continue;
		}
		if (ch === ')' || ch === '}') {
			if (depth === 0) {
				endIndex = i;
				break;
			}
			depth -= 1;
			i += 1;
			continue;
		}
		i += 1;
	}
	if (endIndex === -1) return '';

	// Split the body between matchEndIndex and endIndex on top-level commas.
	const body = source.slice(matchEndIndex, endIndex);
	const args = [];
	let start = 0;
	depth = 0;
	inSingle = false;
	inDouble = false;
	inTemplate = false;
	for (let k = 0; k < body.length; k++) {
		const c = body[k];
		if (inTemplate) {
			if (c === '\\') {
				k += 1;
				continue;
			}
			if (c === '`') inTemplate = false;
			continue;
		}
		if (inSingle) {
			if (c === '\\') {
				k += 1;
				continue;
			}
			if (c === "'") inSingle = false;
			continue;
		}
		if (inDouble) {
			if (c === '\\') {
				k += 1;
				continue;
			}
			if (c === '"') inDouble = false;
			continue;
		}
		if (c === '`') {
			inTemplate = true;
			continue;
		}
		if (c === "'") {
			inSingle = true;
			continue;
		}
		if (c === '"') {
			inDouble = true;
			continue;
		}
		if (c === '(' || c === '{') {
			depth += 1;
			continue;
		}
		if (c === ')' || c === '}') {
			depth -= 1;
			continue;
		}
		if (c === ',' && depth === 0) {
			args.push(body.slice(start, k).trim());
			start = k + 1;
		}
	}
	args.push(body.slice(start).trim());

	return args[argIndex] || '';
}

/** Resolve a bare identifier first-arg (e.g. `url`) to its declared expression. */
function resolveIdentifier(rawArg, source, callIndex) {
	const m = rawArg.match(/^[A-Za-z_$][A-Za-z0-9_$]*$/);
	if (!m) return rawArg;
	const name = m[0];
	const prefix = source.slice(0, callIndex);
	const declRe = new RegExp(`(?:const|let)\\s+${name}\\s*=\\s*([^;]+);`, 'g');
	let dm;
	let last = null;
	while ((dm = declRe.exec(prefix)) !== null) last = dm[1];
	return last ? last.trim() : rawArg;
}

/** Normalize a path expression into `/a/b/{x}` form (same as compare-coverage). */
function normalizePathExpression(raw) {
	if (!raw) return '';
	const expr = raw.trim();
	let out = '';
	let i = 0;
	while (i < expr.length) {
		const ch = expr[i];
		if (ch === "'" || ch === '"') {
			const quote = ch;
			i += 1;
			let content = '';
			while (i < expr.length && expr[i] !== quote) {
				if (expr[i] === '\\' && i + 1 < expr.length) {
					content += expr[i + 1];
					i += 2;
				} else {
					content += expr[i];
					i += 1;
				}
			}
			i += 1;
			out += content;
			continue;
		}
		if (ch === '`') {
			i += 1;
			let content = '';
			while (i < expr.length && expr[i] !== '`') {
				if (expr[i] === '\\' && i + 1 < expr.length) {
					content += expr[i + 1];
					i += 2;
				} else {
					content += expr[i];
					i += 1;
				}
			}
			i += 1;
			content = content.replace(/\$\{[^}]*\}/g, '{x}');
			content = content.replace(/encodeURIComponent\s*\([^)]*\)/g, '{x}');
			out += content;
			continue;
		}
		let j = i;
		while (j < expr.length && !["'", '"', '`'].includes(expr[j])) j += 1;
		const segment = expr.slice(i, j).trim().replace(/\+/g, '').trim();
		if (segment) out += '{x}';
		i = j;
	}
	return out;
}

// ---------------------------------------------------------------------------
// Operation extraction
// ---------------------------------------------------------------------------

/**
 * Extract structured data for every HTTP call in an operation file:
 *   { method, pathExpr, pathNorm, bodyKeys:Set, qsKeys:Set }
 */
function extractCalls(source) {
	const calls = [];
	HTTP_CALL_RE.lastIndex = 0;
	let m;
	while ((m = HTTP_CALL_RE.exec(source)) !== null) {
		const method = m[1].replace(/^http/, '').toUpperCase();
		const callIndex = m.index;
		const matchEnd = callIndex + m[0].length;

		const rawArg = extractFirstArg(source, matchEnd);
		if (!rawArg) continue;
		const resolvedArg = resolveIdentifier(rawArg, source, callIndex);
		const pathNorm = normalizePathExpression(resolvedArg);
		if (!pathNorm.startsWith('/')) continue;

		// Determine which argument index holds qs/body.
		//   GET/DELETE: (url, qs)   -> qs is arg 1
		//   POST/PUT:   (url, body, qs) -> body arg 1, qs arg 2
		const qsArgIndex = method === 'GET' || method === 'DELETE' ? 1 : 2;
		const bodyArgIndex = method === 'POST' || method === 'PUT' ? 1 : -1;

		const qsExpr = qsArgIndex >= 0 ? extractArg(source, matchEnd, qsArgIndex) : '';
		const bodyExpr = bodyArgIndex >= 0 ? extractArg(source, matchEnd, bodyArgIndex) : '';

		const qsKeys = new Set();
		const bodyKeys = new Set();

		// keys assigned via qs['key'] / body['key'] anywhere in the file
		let qa;
		QS_ASSIGN_RE.lastIndex = 0;
		while ((qa = QS_ASSIGN_RE.exec(source)) !== null) qsKeys.add(qa[1]);
		let ba;
		BODY_ASSIGN_RE.lastIndex = 0;
		while ((ba = BODY_ASSIGN_RE.exec(source)) !== null) bodyKeys.add(ba[1]);

		// keys from object literals assigned to a `body`/`qs` variable
		collectAssignedObjectLiteral(source, 'body', bodyKeys);
		collectAssignedObjectLiteral(source, 'qs', qsKeys);

		// keys from direct object literals passed inline
		collectObjectLiteralKeys(qsExpr, qsKeys);
		collectObjectLiteralKeys(bodyExpr, bodyKeys);

		calls.push({
			method,
			pathExpr: resolvedArg,
			pathNorm,
			bodyKeys,
			qsKeys,
		});
	}
	return calls;
}

/** Collect `key:` names AND shorthand identifiers from an object literal expression. */
function collectObjectLiteralKeys(expr, keys) {
	if (!expr) return;
	// { key: value, ... } pairs
	const colonRe = /([A-Za-z_$][A-Za-z0-9_$]*)\s*:/g;
	let m;
	while ((m = colonRe.exec(expr)) !== null) keys.add(m[1]);
	// shorthand identifiers: `{ key, ... }` (identifier followed by a comma)
	const shortRe = /([A-Za-z_$][A-Za-z0-9_$]*)\s*,/g;
	let s;
	while ((s = shortRe.exec(expr)) !== null) keys.add(s[1]);
	// trailing shorthand before the closing brace: `{ key }` or `{ a, b, key }`
	const tailRe = /([A-Za-z_$][A-Za-z0-9_$]*)\s*}/g;
	let t;
	while ((t = tailRe.exec(expr)) !== null) keys.add(t[1]);
}

/**
 * Collect keys of an object literal assigned to a `const <name> = { ... }`
 * variable (e.g. `const body: IDataObject = { country: ... }`). Handles flat
 * literals (no nested objects).
 */
function collectAssignedObjectLiteral(source, varName, keys) {
	const re = new RegExp(`const\\s+${varName}\\b[^=]*=\\s*\\{([^}]*)\\}`, 'g');
	let m;
	while ((m = re.exec(source)) !== null) {
		collectObjectLiteralKeys(`{${m[1]}}`, keys);
	}
}

/** Count {param} segments in a spec path. */
function countPathParams(p) {
	const re = /\{[^}]*\}/g;
	let n = 0;
	while (re.exec(p) !== null) n += 1;
	return n;
}

/** Count {x} dynamic segments in a normalized node path. */
function countDynamicSegments(pathNorm) {
	const re = /\{x\}/g;
	let n = 0;
	while (re.exec(pathNorm) !== null) n += 1;
	return n;
}

// ---------------------------------------------------------------------------
// Spec extraction
// ---------------------------------------------------------------------------

/** Find the spec endpoint (api.path, operation) matching (method, normalized path). */
function findSpecEndpoint(spec, method, pathNorm) {
	if (!spec || !Array.isArray(spec.apis)) return null;
	for (const api of spec.apis) {
		const p = typeof api.path === 'string' ? api.path : '';
		if (!p || normalizeSpecPath(p) !== pathNorm) continue;
		const ops = api.operations || [];
		const op = ops.find((o) => String(o.httpMethod).toUpperCase() === method);
		if (op) {
			return {
				path: p,
				method,
				pathParams: pathParamsOf(p),
				requiredQuery: [],
				requiredBody: [],
				op,
			};
		}
	}
	return null;
}

/**
 * Collect required query + body field names for a spec endpoint.
 * Body can be expressed two ways in OVH specs:
 *  - Type A: one named `body` parameter per field (e.g. sms) — `p.name`;
 *  - Type B: a single unnamed `body` object whose dataType maps to a model —
 *    required fields come from `spec.models[dataType].properties`.
 */
function requiredParams(op, spec) {
	const query = [];
	const body = [];
	const params = op.parameters || [];
	for (const p of params) {
		const type = p.paramType;
		const required = p.required === true;
		if (type === 'query' && required) {
			query.push(p.name);
		} else if (type === 'body' && required) {
			if (typeof p.name === 'string' && p.name) {
				body.push(p.name);
			}
		}
	}
	// Type B: an optional unnamed body object -> model required fields.
	const unnamedBody = params.find(
		(p) => p.paramType === 'body' && !(typeof p.name === 'string' && p.name),
	);
	if (unnamedBody && spec && spec.models) {
		const dataType = unnamedBody.dataType;
		const model = typeof dataType === 'string' ? spec.models[dataType] : null;
		if (model && model.properties) {
			for (const [propName, prop] of Object.entries(model.properties)) {
				if (prop && prop.required === true) body.push(propName);
			}
		}
	}
	return { query, body };
}

// ---------------------------------------------------------------------------
// Conformity computation
// ---------------------------------------------------------------------------

function computeConformity() {
	const rows = []; // per spec
	const details = []; // per non-conformity
	const unmatched = []; // operations without a matching spec endpoint (informational)
	const versions = ['v1', 'v2'];
	let auditedOps = 0;
	let conformantOps = 0;

	for (const version of versions) {
		for (const file of listSpecFiles(version)) {
			const specName = file.replace(/\.json$/, '');
			const spec = readJson(path.join(SPECS_DIR, version, file));
			if (!spec) continue;

			const nodes = SPEC_TO_NODES[specName] || [];
			const perSpec = { spec: specName, version, audited: 0, conformant: 0, nonConformant: 0 };

			for (const node of nodes) {
				const nodeDir = path.join(NODES_DIR, node);
				if (!fs.existsSync(nodeDir)) continue;
				for (const opFile of listOperationFiles(nodeDir)) {
					let source;
					try {
						source = fs.readFileSync(opFile, 'utf8');
					} catch (err) {
						warn(`cannot read ${path.relative(ROOT, opFile)}: ${err.message}`);
						continue;
					}
					const calls = extractCalls(source);
					if (calls.length === 0) continue;
					for (const call of calls) {
						const ep = findSpecEndpoint(spec, call.method, call.pathNorm);
						perSpec.audited += 1;
						auditedOps += 1;
						if (!ep) {
							// No matching endpoint: informational (may be a path from
							// another mapped spec version, or over-implementation).
							unmatched.push({
								spec: specName,
								version,
								node,
								file: path.relative(NODES_DIR, opFile),
								method: call.method,
								path: call.pathNorm,
							});
							continue;
						}
						const issues = [];

						// path params: every spec {param} must map to a dynamic segment.
						const specPathCount = countPathParams(ep.path);
						const nodeSegCount = countDynamicSegments(call.pathNorm);
						if (nodeSegCount < specPathCount) {
							issues.push(`missing ${specPathCount - nodeSegCount} path param(s)`);
						}

						// required query/body
						const { query, body } = requiredParams(ep.op, spec);
						for (const q of query) {
							if (!call.qsKeys.has(q)) issues.push(`missing required query param '${q}'`);
						}
						for (const b of body) {
							if (!call.bodyKeys.has(b)) issues.push(`missing required body field '${b}'`);
						}

						if (issues.length === 0) {
							perSpec.conformant += 1;
							conformantOps += 1;
						} else {
							perSpec.nonConformant += 1;
							details.push({
								spec: specName,
								version,
								node,
								file: path.relative(NODES_DIR, opFile),
								method: call.method,
								path: call.pathNorm,
								issues,
							});
						}
					}
				}
			}

			if (perSpec.audited > 0) rows.push(perSpec);
		}
	}

	rows.sort((a, b) => {
		const ap = a.audited ? a.nonConformant / a.audited : 0;
		const bp = b.audited ? b.nonConformant / b.audited : 0;
		return bp - ap || b.audited - a.audited;
	});

	return { rows, details, unmatched, auditedOps, conformantOps };
}

// ---------------------------------------------------------------------------
// Report rendering
// ---------------------------------------------------------------------------

function buildMarkdown(res) {
	const { rows, details, unmatched, auditedOps, conformantOps } = res;
	const nonConformant = auditedOps - conformantOps;
	const pct = auditedOps === 0 ? 0 : Math.round((conformantOps / auditedOps) * 1000) / 10;

	const lines = [];
	lines.push('# OVHcloud API Conformity Report');
	lines.push('');
	lines.push(
		`> Généré par \`scripts/audit-conformity.js\` le ${new Date().toISOString()}. Document généré automatiquement — ne pas éditer à la main.`,
	);
	lines.push('');
	lines.push(
		'Ce rapport vérifie que les opérations des nodes respectent leur spec (méthode, chemin, paramètres path requis, query requis, champs body requis).',
	);
	lines.push('');
	lines.push('## Résumé');
	lines.push('');
	lines.push(`- **Opérations auditées** : ${auditedOps}`);
	lines.push(`- **Conformes** : ${conformantOps}`);
	lines.push(`- **Non conformes** : ${nonConformant}`);
	lines.push(`- **Sans correspondance spec** (informatif) : ${unmatched.length}`);
	lines.push(`- **Taux de conformité** : **${pct}%**`);
	lines.push('');

	lines.push('## Conformité par spec');
	lines.push('');
	lines.push('Triée par taux de non-conformité décroissant.');
	lines.push('');
	lines.push('| Spec (version) | Auditées | Conformes | Non conformes | % |');
	lines.push('|----------------|---------:|----------:|--------------:|---:|');
	for (const r of rows) {
		const rpct = r.audited === 0 ? 0 : Math.round((r.conformant / r.audited) * 1000) / 10;
		lines.push(
			`| ${r.spec} (${r.version}) | ${r.audited} | ${r.conformant} | ${r.nonConformant} | ${rpct}% |`,
		);
	}
	lines.push('');

	lines.push('## Non-conformités détaillées');
	lines.push('');
	lines.push('Chaque ligne correspond à un appel HTTP non conforme, groupée par spec :');
	lines.push('');

	const bySpec = {};
	for (const d of details) {
		(bySpec[d.spec] = bySpec[d.spec] || []).push(d);
	}

	for (const specName of Object.keys(bySpec).sort()) {
		const list = bySpec[specName];
		lines.push(`### ${specName} — ${list.length} non-conformité${list.length > 1 ? 's' : ''}`);
		lines.push('');
		lines.push('| Méthode | Chemin | Fichier | Problèmes |');
		lines.push('|--------|--------|---------|-----------|');
		for (const d of list.sort((a, b) =>
			a.path === b.path ? a.method.localeCompare(b.method) : a.path.localeCompare(b.path),
		)) {
			lines.push(`| ${d.method} | \`${d.path}\` | ${d.file} | ${d.issues.join('; ')} |`);
		}
		lines.push('');
	}

	lines.push('## Opérations sans correspondance spec');
	lines.push('');
	lines.push(
		'Ces opérations appellent un chemin qui ne correspond à aucun endpoint de la spec auditée (souvent un chemin d’une autre version de spec, ou une sur-implantation). Non comptées dans le taux de conformité.',
	);
	lines.push('');
	lines.push('| Spec (version) | Méthode | Chemin | Fichier |');
	lines.push('|----------------|--------|--------|---------|');
	for (const u of unmatched.sort((a, b) =>
		a.spec === b.spec
			? a.path === b.path
				? a.method.localeCompare(b.method)
				: a.path.localeCompare(b.path)
			: a.spec.localeCompare(b.spec),
	)) {
		lines.push(`| ${u.spec} (${u.version}) | ${u.method} | \`${u.path}\` | ${u.file} |`);
	}
	lines.push('');

	lines.push('## Notes');
	lines.push('');
	lines.push('- Le mapping spec→node est le tableau manuel partagé avec `compare-coverage.js`.');
	lines.push(
		'- La conformité repose sur une analyse statique (voir les limites en en-tête du script).',
	);
	lines.push(
		'- Les champs body requis sont lus depuis les paramètres `body` nommés (Type A) ou depuis le modèle pointé par l’objet body (Type B).',
	);

	return lines.join('\n');
}

function renderConsole(res) {
	const { rows, unmatched, auditedOps, conformantOps } = res;
	const nonConformant = auditedOps - conformantOps;
	const pct = auditedOps === 0 ? 0 : Math.round((conformantOps / auditedOps) * 1000) / 10;
	console.log('OVHcloud API conformity report');
	console.log('==============================');
	console.log(`Opérations auditées   : ${auditedOps}`);
	console.log(`Conformes              : ${conformantOps}`);
	console.log(`Non conformes          : ${nonConformant}`);
	console.log(`Sans correspondance    : ${unmatched.length}`);
	console.log(`Taux de conformité     : ${pct}%`);
	console.log('');
	console.log('Top specs les moins conformes :');
	for (const r of rows.slice(0, 10)) {
		const rpct = r.audited === 0 ? 0 : Math.round((r.nonConformant / r.audited) * 1000) / 10;
		console.log(
			`  ${r.spec.padEnd(24)} ${r.version.padEnd(5)} ${String(r.audited).padStart(5)} ${String(
				r.conformant,
			).padStart(6)} ${String(r.nonConformant).padStart(6)} ${String(rpct).padStart(5)}%`,
		);
	}
	console.log('');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
	if (!fs.existsSync(SPECS_DIR) || !fs.existsSync(NODES_DIR)) {
		console.error(
			`Cannot find specs (${SPECS_DIR}) or nodes (${NODES_DIR}). Run from the repo root.`,
		);
		process.exit(1);
	}

	const res = computeConformity();
	renderConsole(res);

	const markdown = buildMarkdown(res);
	fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
	fs.writeFileSync(REPORT_PATH, markdown, 'utf8');
	console.log(`Report written to ${path.relative(ROOT, REPORT_PATH)}`);

	process.exit(0);
}

main();
