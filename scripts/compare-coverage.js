#!/usr/bin/env node

/**
 * OVHcloud API coverage comparison tool.
 *
 * Compares the endpoints declared in the Swagger 2.0 API specs
 * (docs/api-specs/v1|v2/*.json) against the HTTP calls actually made by the
 * n8n nodes (nodes — *.operation.ts files) and produces a Markdown coverage
 * report (docs/api-reference/coverage-report.md) plus a console summary.
 *
 * Run:  node scripts/compare-coverage.js
 *
 * ---------------------------------------------------------------
 * KNOWN LIMITATIONS (read before trusting the numbers)
 * ---------------------------------------------------------------
 * 1. This is a SYNTHESIS tool, not a perfect static analyser. It uses a
 *    pragmatic regex/string scanner and can miss or mangle exotic code shapes:
 *    - template literals with nested expressions, ternaries, helper calls or
 *      multi-line `${...}` interpolations inside the path;
 *    - dynamic path segments built through variables, objects or array joins
 *      (e.g. `const p = '/vps' + id; client.httpGet(p)`);
 *    - calls wrapped in helper functions / higher-order wrappers that hide the
 *      `client.httpX(...)` call behind a function boundary.
 * 2. Method-level matching only — the tool compares (httpMethod, normalized
 *    path) pairs. Query parameters, headers and body are ignored.
 * 3. A spec endpoint is considered "covered" as soon as ONE operation file in
 *    the mapped node(s) calls the same (method, path). Over- or
 *    under-implementation per operation is not analysed.
 * 4. Path placeholders are normalised to {x}: both `{serviceName}` and
 *    `/vps/${serviceName}` become `/vps/{x}`. The normalisation is agnostic of
 *    the actual parameter name.
 * 5. The spec→node mapping is a manual, best-effort table (SPEC_TO_NODES).
 *    Specs without any node are reported in the "specs sans node" section.
 * 6. The script never crashes: any unreadable file, malformed JSON or
 *    unexpected shape is skipped and reported as a warning on stderr.
 * ---------------------------------------------------------------
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SPECS_DIR = path.join(ROOT, 'docs', 'api-specs');
const NODES_DIR = path.join(ROOT, 'nodes');
const REPORT_PATH = path.join(ROOT, 'docs', 'api-reference', 'coverage-report.md');

// ---------------------------------------------------------------------------
// Manual spec → node(s) mapping.
// Key: spec filename without extension (e.g. "vps").
// Value: array of node directory names that implement that spec.
// Specs with an empty array are reported as "specs sans node".
// ---------------------------------------------------------------------------
const SPEC_TO_NODES = {
	// --- v1 ---
	allDom: [],
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

// Regex matching an http call on the OvhCloudApiClient.
// Handles both `client.httpX(...)` and `new ApiClient(this).httpX(...)`.
const HTTP_CALL_RE =
	/(?:client|new\s+ApiClient\s*\(\s*this\s*\))\.\s*(httpGet|httpPost|httpPut|httpDelete)\s*\(/g;

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function warn(msg) {
	process.stderr.write(`[compare-coverage] WARN ${msg}\n`);
}

/** Read + parse a JSON file. Returns null on any error. */
function readJson(filePath) {
	try {
		const raw = fs.readFileSync(filePath, 'utf8');
		return JSON.parse(raw);
	} catch (err) {
		warn(`cannot read/parse ${path.relative(ROOT, filePath)}: ${err.message}`);
		return null;
	}
}

/** List spec files for one API version (v1|v2). Excludes _index.json. */
function listSpecFiles(version) {
	const dir = path.join(SPECS_DIR, version);
	if (!fs.existsSync(dir)) return [];
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith('.json') && f !== '_index.json')
		.sort();
}

/** Recursively list *.operation.ts files, excluding *.spec.ts. */
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

// ---------------------------------------------------------------------------
// Endpoint extraction from spec files
// ---------------------------------------------------------------------------

/** Normalize `{serviceName}` / `{id}` placeholders to `{x}`. */
function normalizeSpecPath(p) {
	if (typeof p !== 'string') return '';
	return p.replace(/\{[^}]*\}/g, '{x}');
}

/**
 * Extract [(httpMethod, path)] from a parsed spec object.
 * Spec shape: { apis: [ { path, operations: [ { httpMethod, ... } ] } ] }
 */
function extractSpecEndpoints(spec) {
	const endpoints = [];
	if (!spec || !Array.isArray(spec.apis)) return endpoints;
	for (const api of spec.apis) {
		const p = api && typeof api.path === 'string' ? api.path : '';
		if (!p) continue;
		const ops = api.operations;
		if (!Array.isArray(ops)) continue;
		for (const op of ops) {
			const method = op && typeof op.httpMethod === 'string' ? op.httpMethod.toUpperCase() : '';
			if (!HTTP_METHODS.includes(method)) continue;
			endpoints.push({ method, path: normalizeSpecPath(p) });
		}
	}
	return endpoints;
}

// ---------------------------------------------------------------------------
// HTTP call extraction from operation files
// ---------------------------------------------------------------------------

/**
 * Given the source of an operation file and the regex match of a call
 * (starting right after the opening parenthesis), return the raw text of the
 * first argument (the path expression), or null if it cannot be determined.
 */
function extractFirstArg(source, matchEndIndex) {
	// matchEndIndex points right after `(`.
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
			if (depth === 0) break; // end of the call
			depth -= 1;
			i += 1;
			continue;
		}
		if (ch === ',' && depth === 0) break; // end of the first argument
		i += 1;
	}
	const raw = source.slice(matchEndIndex, i).trim();
	return raw || null;
}

/**
 * Normalize a path expression found in the first argument of a call into a
 * stable `/a/b/{x}/c` form.
 *
 * Handles:
 *  - simple strings            '/vps'
 *  - template literals         `/vps/${serviceName}/disk`
 *  - concatenations            '/vps/' + serviceName + '/disk'
 *  - encodeURIComponent(...)   `/vps/${serviceName}/ip/${encodeURIComponent(ip)}`
 */
function normalizePathExpression(raw) {
	if (!raw) return '';
	const expr = raw.trim();
	let out = '';
	let i = 0;

	while (i < expr.length) {
		const ch = expr[i];

		if (ch === "'" || ch === '"') {
			// String literal: copy its content verbatim.
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
			i += 1; // skip closing quote
			out += content;
			continue;
		}

		if (ch === '`') {
			// Template literal: copy content, replace ${...} with {x}.
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
			i += 1; // skip closing backtick
			// Replace interpolations first, then neutralize any remaining
			// encodeURIComponent(...) (ordering avoids `${{x}}` leftovers).
			content = content.replace(/\$\{[^}]*\}/g, '{x}');
			content = content.replace(/encodeURIComponent\s*\([^)]*\)/g, '{x}');
			out += content;
			continue;
		}

		// Dynamic segment: any non-literal run (operators, identifiers,
		// function calls). Consume it up to the next quote/backtick and emit
		// a single {x} if it contains anything meaningful.
		let j = i;
		while (j < expr.length && !["'", '"', '`'].includes(expr[j])) j += 1;
		const segment = expr.slice(i, j).trim().replace(/\+/g, '').trim();
		if (segment) out += '{x}';
		i = j;
	}

	return out;
}

/**
 * Resolve a bare identifier first-arg (e.g. `url`) to its declared expression
 * when the operation file assigns it before the call:
 *     const url = `/email/pro/${svc}/suspendStatus`;
 *     client.httpPut(url, {});
 * Returns the resolved expression or the original raw argument.
 */
function resolveIdentifier(rawArg, source, callIndex) {
	const m = rawArg.match(/^[A-Za-z_$][A-Za-z0-9_$]*$/);
	if (!m) return rawArg;
	const name = m[0];
	// Look for `const name = expr;` or `let name = expr;` before the call.
	const prefix = source.slice(0, callIndex);
	const declRe = new RegExp(`(?:const|let)\\s+${name}\\s*=\\s*([^;]+);`, 'g');
	let dm;
	let last = null;
	while ((dm = declRe.exec(prefix)) !== null) {
		last = dm[1];
	}
	return last ? last.trim() : rawArg;
}

/** Extract the (method, path) pairs from an operation file source. */
function extractHttpCalls(source) {
	const calls = [];
	HTTP_CALL_RE.lastIndex = 0;
	let m;
	while ((m = HTTP_CALL_RE.exec(source)) !== null) {
		const method = m[1].replace(/^http/, '').toUpperCase();
		const rawArg = extractFirstArg(source, m.index + m[0].length);
		if (!rawArg) continue;
		const resolvedArg = resolveIdentifier(rawArg, source, m.index);
		const path = normalizePathExpression(resolvedArg);
		// Keep only absolute paths starting with a slash and containing a slash.
		if (!path.startsWith('/')) continue;
		calls.push({ method, path });
	}
	return calls;
}

// ---------------------------------------------------------------------------
// Node scanning
// ---------------------------------------------------------------------------

/**
 * Scan every node directory and return a map:
 *   nodeName -> Map("METHOD /path" -> Set(operationFile))
 */
function scanNodes() {
	const nodeDirs = fs
		.readdirSync(NODES_DIR)
		.filter((d) => fs.statSync(path.join(NODES_DIR, d)).isDirectory())
		.sort();

	const result = {};
	for (const dir of nodeDirs) {
		const calls = new Map(); // "METHOD /path" -> Set(relative file)
		for (const file of listOperationFiles(path.join(NODES_DIR, dir))) {
			let source;
			try {
				source = fs.readFileSync(file, 'utf8');
			} catch (err) {
				warn(`cannot read ${path.relative(ROOT, file)}: ${err.message}`);
				continue;
			}
			for (const call of extractHttpCalls(source)) {
				const key = `${call.method} ${call.path}`;
				if (!calls.has(key)) calls.set(key, new Set());
				calls.get(key).add(path.relative(NODES_DIR, file));
			}
		}
		result[dir] = calls;
	}
	return result;
}

// ---------------------------------------------------------------------------
// Coverage computation
// ---------------------------------------------------------------------------

function computeCoverage(nodeCalls) {
	const rows = [];
	const versions = ['v1', 'v2'];

	for (const version of versions) {
		for (const file of listSpecFiles(version)) {
			const specName = file.replace(/\.json$/, '');
			const spec = readJson(path.join(SPECS_DIR, version, file));
			if (!spec) continue;

			const endpoints = extractSpecEndpoints(spec);
			const nodes = SPEC_TO_NODES[specName] || [];

			let covered = 0;
			const missing = [];
			for (const ep of endpoints) {
				const key = `${ep.method} ${ep.path}`;
				const isCovered = nodes.some((node) => nodeCalls[node] && nodeCalls[node].has(key));
				if (isCovered) {
					covered += 1;
				} else {
					missing.push(ep);
				}
			}

			const pct = endpoints.length === 0 ? 0 : Math.round((covered / endpoints.length) * 1000) / 10;

			rows.push({
				version,
				spec: specName,
				resourcePath: typeof spec.resourcePath === 'string' ? spec.resourcePath : '',
				nodes: nodes.length ? nodes.join(', ') : '(aucun node)',
				total: endpoints.length,
				covered,
				missing: missing.length,
				missingEndpoints: missing,
				pct,
			});
		}
	}

	// Sort by percentage ascending (worst coverage first).
	rows.sort((a, b) => a.pct - b.pct || b.total - a.total);
	return rows;
}

// ---------------------------------------------------------------------------
// Report rendering
// ---------------------------------------------------------------------------

function renderTableRow(r) {
	return `| ${r.spec} (${r.version}) | ${r.total} | ${r.covered} | ${r.missing} | ${r.pct}% |`;
}

function buildMarkdown(rows, nodeCalls) {
	const now = new Date().toISOString();
	const lines = [];
	lines.push('# OVHcloud API Coverage Report');
	lines.push('');
	lines.push(
		`> Généré par \`scripts/compare-coverage.js\` le ${now}. Document généré automatiquement — ne pas éditer à la main.`,
	);
	lines.push('');
	lines.push(
		'Ce rapport compare les endpoints déclarés dans les specs Swagger 2.0 (`docs/api-specs/v1|v2/*.json`) avec les appels HTTP réellement présents dans les nodes (`nodes/**/*.operation.ts`).',
	);
	lines.push('');
	lines.push('## Résumé');
	lines.push('');

	const specs = rows.filter((r) => r.total > 0);
	const totalEndpoints = specs.reduce((s, r) => s + r.total, 0);
	const totalCovered = specs.reduce((s, r) => s + r.covered, 0);
	const globalPct =
		totalEndpoints === 0 ? 0 : Math.round((totalCovered / totalEndpoints) * 1000) / 10;

	const specsSansNode = rows.filter((r) => r.nodes === '(aucun node)' && r.total > 0);
	const placeholders = rows.filter((r) => r.total === 0);

	lines.push(
		`- **Specs analysées** : ${rows.length} (v1: ${rows.filter((r) => r.version === 'v1').length}, v2: ${rows.filter((r) => r.version === 'v2').length})`,
	);
	lines.push(`- **Endpoints déclarés (specs avec endpoints)** : ${totalEndpoints}`);
	lines.push(`- **Endpoints couverts par les nodes** : ${totalCovered}`);
	lines.push(`- **Couverture globale** : **${globalPct}%**`);
	lines.push(`- **Specs sans node associé** : ${specsSansNode.length}`);
	lines.push(`- **Specs placeholder (aucun endpoint)** : ${placeholders.length}`);
	lines.push('');

	// ---- Table per spec ----
	lines.push('## Couverture par spec');
	lines.push('');
	lines.push('Triée par pourcentage croissant (moins bonne couverture en premier).');
	lines.push('');
	lines.push('| Spec (version) | Total | Couverts | Manquants | % |');
	lines.push('|----------------|------:|---------:|----------:|---:|');
	// Only specs with endpoints appear in the coverage table; the rest are
	// listed in the "Specs placeholder" section below.
	for (const r of rows) {
		if (r.total === 0) continue;
		lines.push(renderTableRow(r));
	}
	lines.push('');

	// ---- Specs sans node ----
	lines.push('## Specs sans node');
	lines.push('');
	const sansNodeAll = rows.filter((r) => r.nodes === '(aucun node)');
	const specsSansNodeWithEndpoints = sansNodeAll.filter((r) => r.total > 0);
	if (specsSansNodeWithEndpoints.length === 0) {
		lines.push('_Aucune._');
	} else {
		lines.push(
			'Ces specs ont des endpoints déclarés mais aucun node ne les implémente dans ce repo :',
		);
		lines.push('');
		for (const r of specsSansNodeWithEndpoints) {
			lines.push(
				`- **${r.spec}** (\`${r.resourcePath}\`, ${r.version}) — ${r.total} endpoints, ${r.missing} manquants`,
			);
		}
	}
	const sansNodeZero = sansNodeAll.filter((r) => r.total === 0);
	if (sansNodeZero.length > 0) {
		lines.push('');
		lines.push('Sans node également, mais sans endpoints déclarés (voir section placeholder) :');
		lines.push('');
		for (const r of sansNodeZero) {
			lines.push(`- **${r.spec}** (\`${r.resourcePath || '?'}\`, ${r.version})`);
		}
	}
	lines.push('');

	// ---- Specs placeholder ----
	const placeholderRows = rows.filter((r) => r.total === 0);
	if (placeholderRows.length > 0) {
		lines.push('## Specs placeholder (fichier sans endpoints)');
		lines.push('');
		lines.push(
			'Fichiers de spec présents dans le dossier mais avec `apis: []` (spec absente / non téléchargée). Ils ne sont pas comptés dans la couverture :',
		);
		lines.push('');
		for (const r of placeholderRows) {
			lines.push(`- **${r.spec}** (\`${r.resourcePath || '?'}\`, ${r.version})`);
		}
		lines.push('');
	}

	// ---- Missing endpoints grouped by spec/family ----
	const withMissing = rows.filter((r) => r.missing > 0);
	if (withMissing.length > 0) {
		lines.push('## Endpoints manquants');
		lines.push('');
		lines.push(
			'Endpoints déclarés dans les specs mais non appelés par les nodes, groupés par spec :',
		);
		lines.push('');
		for (const r of withMissing) {
			lines.push(`### ${r.spec} (${r.version}) — ${r.missing} manquant${r.missing > 1 ? 's' : ''}`);
			lines.push('');
			lines.push(`_Nodes associés : ${r.nodes}_`);
			lines.push('');
			lines.push('| Méthode | Chemin |');
			lines.push('|--------|--------|');
			const sorted = [...r.missingEndpoints].sort((a, b) =>
				a.path === b.path ? a.method.localeCompare(b.method) : a.path.localeCompare(b.path),
			);
			for (const ep of sorted) {
				lines.push(`| ${ep.method} | \`${ep.path}\` |`);
			}
			lines.push('');
		}
	}

	// ---- Notes / limitations ----
	lines.push('## Notes');
	lines.push('');
	lines.push(
		'- Le mapping spec→node est un tableau manuel (`SPEC_TO_NODES` dans `scripts/compare-coverage.js`).',
	);
	lines.push(
		'- La couverture est calculée sur les couples (méthode, chemin normalisé). Un endpoint est couvert dès qu’un fichier d’opération du node associé l’appelle.',
	);
	lines.push(
		'- Placeholders `{param}` normalisés en `{x}` (les noms de paramètres ne sont pas comparés).',
	);
	lines.push('- Voir les limites détaillées dans l’en-tête de `scripts/compare-coverage.js`.');
	lines.push('');

	return lines.join('\n');
}

function renderConsole(rows) {
	const specs = rows.filter((r) => r.total > 0);
	const totalEndpoints = specs.reduce((s, r) => s + r.total, 0);
	const totalCovered = specs.reduce((s, r) => s + r.covered, 0);
	const globalPct =
		totalEndpoints === 0 ? 0 : Math.round((totalCovered / totalEndpoints) * 1000) / 10;

	console.log('OVHcloud API coverage report');
	console.log('============================');
	console.log(`Specs analysées      : ${rows.length}`);
	console.log(`Endpoints (specs)    : ${totalEndpoints}`);
	console.log(`Endpoints couverts   : ${totalCovered}`);
	console.log(`Couverture globale   : ${globalPct}%`);
	console.log('');
	console.log('Top specs les moins couvertes :');
	console.log('  Spec                        v1/v2   Total  Couverts  Manquants  %');
	for (const r of specs.slice(0, 8)) {
		console.log(
			`  ${r.spec.padEnd(26)} ${r.version.padEnd(5)} ${String(r.total).padStart(6)} ${String(
				r.covered,
			).padStart(8)} ${String(r.missing).padStart(9)} ${String(r.pct).padStart(5)}%`,
		);
	}
	const sansNode = rows.filter((r) => r.nodes === '(aucun node)' && r.total > 0);
	if (sansNode.length) {
		console.log('');
		console.log(`Specs sans node : ${sansNode.map((r) => r.spec).join(', ')}`);
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

	const nodeCalls = scanNodes();
	const rows = computeCoverage(nodeCalls);

	renderConsole(rows);

	const markdown = buildMarkdown(rows, nodeCalls);
	fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
	fs.writeFileSync(REPORT_PATH, markdown, 'utf8');
	console.log(`Report written to ${path.relative(ROOT, REPORT_PATH)}`);

	process.exit(0);
}

main();
