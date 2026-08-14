#!/usr/bin/env node

/**
 * Generate per-node and per-operation documentation from source files.
 *
 * Uses the TypeScript compiler API (AST) to parse *.operation.ts files and
 * extract HTTP calls, parameters, descriptions, and filter definitions.
 * Uses regex on index.ts files to enumerate operations and map values →
 * execute functions.
 *
 * Output: docs/nodes/<node-slug>/operations/<op-slug>.md + README files.
 *
 * Run:  node scripts/generate-node-docs.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const ROOT = path.resolve(__dirname, '..');
const NODES_DIR = path.join(ROOT, 'nodes');
const OUT_DIR = path.join(ROOT, 'docs', 'nodes');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert camelCase to kebab-case. */
function toKebab(str) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/** Convert kebab-case slug to Title Case. */
function kebabToTitle(slug) {
	return slug
		.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
		.replace(/\b(ovhcloud)/gi, 'OVH Cloud');
}

/** Humanise node name: OvhCloudMe → "OVH Cloud Me". */
function humanizeNodeName(nodeName) {
	const rest = nodeName.replace(/^OvhCloud/, '');
	return (
		'OVH Cloud ' +
		toKebab(rest)
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (c) => c.toUpperCase())
	);
}

// ---------------------------------------------------------------------------
// AST helpers — parse an operation file
// ---------------------------------------------------------------------------

/**
 * Extract HTTP method + endpoint pairs from client.http* calls.
 * Returns [{ method: 'GET'|'POST'|… , endpoint: '/me/bill' | '/me/bill/{billId}' }]
 */
function extractEndpoints(source) {
	const calls = [];
	const seen = new Set();

	function visit(node) {
		if (ts.isCallExpression(node)) {
			const expr = node.expression;
			if (
				ts.isPropertyAccessExpression(expr) &&
				ts.isIdentifier(expr.expression) &&
				expr.expression.text === 'client'
			) {
				const method = expr.name.text;
				if (method.startsWith('http')) {
					const firstArg = node.arguments[0];
					let endpoint = '';

					if (ts.isNoSubstitutionTemplateLiteral(firstArg)) {
						endpoint = firstArg.text;
					} else if (ts.isTemplateExpression(firstArg)) {
						endpoint = firstArg.head.text;
						for (const span of firstArg.templateSpans) {
							const expr = span.expression;
							if (ts.isIdentifier(expr)) {
								endpoint += '{' + expr.text + '}';
							} else {
								endpoint += '{param}';
							}
						}
					} else if (ts.isStringLiteral(firstArg)) {
						endpoint = firstArg.text;
					}

					if (endpoint) {
						const key = method + '|' + endpoint;
						if (!seen.has(key)) {
							seen.add(key);
							calls.push({ method: method.replace('http', '').toUpperCase(), endpoint });
						}
					}
				}
			}
		}

		ts.forEachChild(node, visit);
	}

	const file = ts.createSourceFile('tmp.ts', source, ts.ScriptTarget.Latest, true);
	visit(file);
	return calls;
}

/**
 * Extract parameter names from getNodeParameter('name', …) calls.
 * Excludes 'filters'. Returns unique names in order of appearance.
 */
function extractParamNames(source) {
	const names = [];
	const seen = new Set();

	function visit(node) {
		if (ts.isCallExpression(node)) {
			const expr = node.expression;
			if (
				ts.isPropertyAccessExpression(expr) &&
				ts.isIdentifier(expr.expression) &&
				expr.expression.text === 'this' &&
				expr.name.text === 'getNodeParameter'
			) {
				const firstArg = node.arguments[0];
				if (ts.isStringLiteral(firstArg)) {
					const n = firstArg.text;
					if (n !== 'filters' && !seen.has(n)) {
						seen.add(n);
						names.push(n);
					}
				}
			}
		}
		ts.forEachChild(node, visit);
	}

	const file = ts.createSourceFile('tmp.ts', source, ts.ScriptTarget.Latest, true);
	visit(file);
	return names;
}

/**
 * Extract filter definitions from the source.
 * Looks for objects with a `queryParam: '…'` property (inside const …_FILTERS).
 * Returns [{ n8nParam, queryParam, type, displayName, options?, isFlat }].
 */
function extractFilters(source) {
	const filters = [];

	function visit(node) {
		if (ts.isPropertyAssignment(node)) {
			const name = node.name;
			const propName = ts.isStringLiteral(name) || ts.isIdentifier(name) ? name.text : '';
			if (propName === 'queryParam' && ts.isStringLiteral(node.initializer)) {
				// Walk up to find the enclosing object literal
				let obj = node.parent; // ObjectLiteralExpression
				if (!obj || !ts.isObjectLiteralExpression(obj)) return;

				const queryParam = node.initializer.text;

				// Gather related properties from the same object literal
				let type = 'string';
				let displayName = '';
				let parameterPath = undefined;
				let delimiter = undefined;
				const options = [];

				for (const prop of obj.properties) {
					if (ts.isPropertyAssignment(prop)) {
						const pName = prop.name;
						if (ts.isIdentifier(pName) || ts.isStringLiteral(pName)) {
							const propName = pName.text;
							if (propName === 'type' && ts.isStringLiteral(prop.initializer)) {
								type = prop.initializer.text;
							} else if (propName === 'displayName' && ts.isStringLiteral(prop.initializer)) {
								displayName = prop.initializer.text;
							} else if (propName === 'parameterPath' && ts.isStringLiteral(prop.initializer)) {
								parameterPath = prop.initializer.text;
							} else if (propName === 'delimiter' && ts.isStringLiteral(prop.initializer)) {
								delimiter = prop.initializer.text;
							} else if (propName === 'options' && ts.isArrayLiteralExpression(prop.initializer)) {
								for (const item of prop.initializer.elements) {
									if (ts.isObjectLiteralExpression(item)) {
										let optName = '';
										let optValue = '';
										for (const sp of item.properties) {
											if (ts.isPropertyAssignment(sp)) {
												const sn =
													ts.isIdentifier(sp.name) || ts.isStringLiteral(sp.name)
														? sp.name.text
														: '';
												if (sn === 'name' && ts.isStringLiteral(sp.initializer))
													optName = sp.initializer.text;
												if (sn === 'value' && ts.isStringLiteral(sp.initializer))
													optValue = sp.initializer.text;
											}
										}
										if (optName) options.push(optName + (optValue ? '=' + optValue : ''));
									}
								}
							}
						}
					}
				}

				// n8n param name: flat vs grouped
				const isFlat = parameterPath !== undefined;
				const n8nParam = isFlat ? parameterPath : 'filters.' + queryParam;

				filters.push({ n8nParam, queryParam, type, displayName, options, isFlat });
			}
		}
		ts.forEachChild(node, visit);
	}

	const file = ts.createSourceFile('tmp.ts', source, ts.ScriptTarget.Latest, true);
	visit(file);
	return filters;
}

/**
 * Extract parameters from description functions.
 * Looks for exported description* functions that return a direct array literal
 * containing INodeProperties objects with a `name` property.
 * Returns [{ name, type, required, displayName }].
 */
function extractDescriptionParams(source) {
	const params = [];
	const seen = new Set();

	function visit(node) {
		if (ts.isObjectLiteralExpression(node)) {
			let nameProp = undefined;
			let typeProp = undefined;
			let requiredProp = false;
			let displayNameProp = '';

			for (const prop of node.properties) {
				if (ts.isPropertyAssignment(prop)) {
					const pName = prop.name;
					if (ts.isIdentifier(pName) || ts.isStringLiteral(pName)) {
						const propName = pName.text;
						if (propName === 'name' && ts.isStringLiteral(prop.initializer)) {
							nameProp = prop.initializer.text;
						} else if (propName === 'type' && ts.isStringLiteral(prop.initializer)) {
							typeProp = prop.initializer.text;
						} else if (
							propName === 'required' &&
							(prop.initializer.kind === ts.SyntaxKind.TrueKeyword ||
								prop.initializer.kind === ts.SyntaxKind.FalseKeyword)
						) {
							requiredProp = prop.initializer.kind === ts.SyntaxKind.TrueKeyword;
						} else if (propName === 'displayName' && ts.isStringLiteral(prop.initializer)) {
							displayNameProp = prop.initializer.text;
						}
					}
				}
			}

			if (nameProp !== undefined && !seen.has(nameProp)) {
				seen.add(nameProp);
				params.push({
					name: nameProp,
					type: typeProp || '—',
					required: requiredProp ? 'Oui' : '—',
					displayName: displayNameProp || nameProp,
				});
			}
		}

		ts.forEachChild(node, visit);
	}

	const file = ts.createSourceFile('tmp.ts', source, ts.ScriptTarget.Latest, true);
	visit(file);
	return params;
}

/**
 * Check whether a function body (AST node) contains a call to `buildFilterQuery`.
 * Returns true if the execute function actually uses filters via buildFilterQuery.
 */
function usesBuildFilterQuery(funcBody) {
	if (!funcBody) return false;

	let found = false;

	function visit(n) {
		if (found) return;
		if (ts.isCallExpression(n)) {
			const expr = n.expression;
			if (ts.isIdentifier(expr) && expr.text === 'buildFilterQuery') {
				found = true;
				return;
			}
		}
		ts.forEachChild(n, visit);
	}

	visit(funcBody);
	return found;
}

/** Parse an operation file for a specific function and return { endpoints, paramNames, descriptionParams, filters }. */
function parseOperationFile(filePath, funcName) {
	const content = fs.readFileSync(filePath, 'utf8');

	// Find the specific function's body in the AST
	let funcBody = null;
	let descFuncReturn = null;
	const file = ts.createSourceFile('tmp.ts', content, ts.ScriptTarget.Latest, true);

	// Derive description function name: executeXxx → descriptionXxx, execute → description
	let descFuncName = funcName;
	if (descFuncName.startsWith('execute')) {
		descFuncName = 'description' + descFuncName.slice(7);
	}

	function findFunctions(n) {
		// Find execute function body
		if (ts.isFunctionDeclaration(n) && n.name && n.name.text === funcName) {
			funcBody = n.body;
		}
		// Find description function return expression
		if (ts.isFunctionDeclaration(n) && n.name && n.name.text === descFuncName) {
			for (const stmt of n.body.statements) {
				if (ts.isReturnStatement(stmt) && stmt.expression) {
					descFuncReturn = stmt.expression;
					break;
				}
			}
		}
		ts.forEachChild(n, findFunctions);
	}

	findFunctions(file);

	// If the exact function name wasn't found, try to find any 'execute' function
	// (handles import aliases like executeList → execute)
	if (!funcBody) {
		function findExecute(n) {
			if (funcBody) return;
			if (ts.isFunctionDeclaration(n) && n.name && n.name.text === 'execute') {
				funcBody = n.body;
			}
			ts.forEachChild(n, findExecute);
		}
		findExecute(file);
	}

	// If we found the function body, scope extraction to it.
	// Otherwise, fall back to entire file (for backward compatibility).
	const scanRoot = funcBody || file;

	// If description function wasn't found by derived name, try 'description'
	if (!descFuncReturn) {
		function findDesc(n) {
			if (descFuncReturn) return;
			if (ts.isFunctionDeclaration(n) && n.name && n.name.text === 'description') {
				for (const stmt of n.body.statements) {
					if (ts.isReturnStatement(stmt) && stmt.expression) {
						descFuncReturn = stmt.expression;
						break;
					}
				}
			}
			ts.forEachChild(n, findDesc);
		}
		findDesc(file);
	}

	// Only include filters if the execute function actually calls buildFilterQuery.
	// This prevents operations in shared files (e.g. billing.operation.ts) from
	// inheriting filters defined at file scope but unused by that specific operation.
	let filters = [];
	if (usesBuildFilterQuery(funcBody)) {
		filters = extractFilters(content);
	}

	return {
		filePath: path.relative(path.join(ROOT, 'nodes'), filePath),
		endpoints: extractEndpointsFrom(scanRoot, content),
		paramNames: extractParamNamesFrom(scanRoot, content),
		descriptionParams: extractDescriptionParamsFrom(scanRoot, content, descFuncReturn),
		filters,
	};
}

/**
 * Extract HTTP method + endpoint pairs from client.http* calls within a specific AST node.
 */
function extractEndpointsFrom(node, fullSource) {
	const calls = [];
	const seen = new Set();

	function visit(n) {
		if (ts.isCallExpression(n)) {
			const expr = n.expression;
			if (
				ts.isPropertyAccessExpression(expr) &&
				ts.isIdentifier(expr.expression) &&
				expr.expression.text === 'client'
			) {
				const method = expr.name.text;
				if (method.startsWith('http')) {
					const firstArg = n.arguments[0];
					let endpoint = '';

					if (ts.isNoSubstitutionTemplateLiteral(firstArg)) {
						endpoint = firstArg.text;
					} else if (ts.isTemplateExpression(firstArg)) {
						endpoint = firstArg.head.text;
						for (const span of firstArg.templateSpans) {
							const sp = span.expression;
							if (ts.isIdentifier(sp)) {
								endpoint += '{' + sp.text + '}';
							} else {
								endpoint += '{param}';
							}
						}
					} else if (ts.isStringLiteral(firstArg)) {
						endpoint = firstArg.text;
					}

					if (endpoint) {
						const key = method + '|' + endpoint;
						if (!seen.has(key)) {
							seen.add(key);
							calls.push({ method: method.replace('http', '').toUpperCase(), endpoint });
						}
					}
				}
			}
		}

		ts.forEachChild(n, visit);
	}

	visit(node);
	return calls;
}

/**
 * Extract parameter names from getNodeParameter('name', …) calls within a specific AST node.
 * Excludes 'filters'. Returns unique names in order of appearance.
 */
function extractParamNamesFrom(node, fullSource) {
	const names = [];
	const seen = new Set();

	function visit(n) {
		if (ts.isCallExpression(n)) {
			const expr = n.expression;
			if (
				ts.isPropertyAccessExpression(expr) &&
				ts.isIdentifier(expr.expression) &&
				expr.expression.text === 'this' &&
				expr.name.text === 'getNodeParameter'
			) {
				const firstArg = n.arguments[0];
				if (ts.isStringLiteral(firstArg)) {
					const name = firstArg.text;
					if (name !== 'filters' && !seen.has(name)) {
						seen.add(name);
						names.push(name);
					}
				}
			}
		}
		ts.forEachChild(n, visit);
	}

	visit(node);
	return names;
}

/**
 * Extract parameters from description functions within a specific AST node.
 * If descReturn is provided, walk only that expression (the return value of the
 * description function). Otherwise walk the entire node.
 */
function extractDescriptionParamsFrom(node, fullSource, descReturn) {
	const params = [];
	const seen = new Set();

	function visit(n) {
		if (ts.isObjectLiteralExpression(n)) {
			let nameProp = undefined;
			let typeProp = undefined;
			let requiredProp = false;
			let displayNameProp = '';

			for (const prop of n.properties) {
				if (ts.isPropertyAssignment(prop)) {
					const pName = prop.name;
					const propName = ts.isIdentifier(pName) || ts.isStringLiteral(pName) ? pName.text : '';
					if (propName === 'name' && ts.isStringLiteral(prop.initializer)) {
						nameProp = prop.initializer.text;
					} else if (propName === 'type' && ts.isStringLiteral(prop.initializer)) {
						typeProp = prop.initializer.text;
					} else if (
						propName === 'required' &&
						(prop.initializer.kind === ts.SyntaxKind.TrueKeyword ||
							prop.initializer.kind === ts.SyntaxKind.FalseKeyword)
					) {
						requiredProp = prop.initializer.kind === ts.SyntaxKind.TrueKeyword;
					} else if (propName === 'displayName' && ts.isStringLiteral(prop.initializer)) {
						displayNameProp = prop.initializer.text;
					}
				}
			}

			if (nameProp !== undefined && !seen.has(nameProp)) {
				seen.add(nameProp);
				params.push({
					name: nameProp,
					type: typeProp || '—',
					required: requiredProp ? 'Oui' : '—',
					displayName: displayNameProp || nameProp,
				});
			}
		}

		ts.forEachChild(n, visit);
	}

	// If we have a description function return expression, walk only that.
	// But skip if it's a CallExpression (e.g., filtersCollection) — those params
	// come from helper functions and are handled by extractFilters instead.
	if (descReturn && !ts.isCallExpression(descReturn)) {
		visit(descReturn);
	} else if (!descReturn) {
		visit(node);
	}
	// If descReturn is a CallExpression, skip param extraction (filters handle it).
	return params;
}

// ---------------------------------------------------------------------------
// Node / index parsing (regex-based)
// ---------------------------------------------------------------------------

/**
 * Parse an index.ts file:
 *  - Extract operations: [{ name, value, action }] from options arrays.
 *  - Extract switch cases: { [value]: functionName }.
 */
function parseIndexFile(content) {
	const operations = [];
	const switchMap = {};

	// --- operations: { name: '…', value: '…', action: '…' } ---
	const opRe = /name:\s*'([^']+)',\s*value:\s*'([^']+)'(?:[^}]*?action:\s*'([^']*)')?/g;
	let m;
	while ((m = opRe.exec(content)) !== null) {
		operations.push({ name: m[1], value: m[2], action: m[3] || '' });
	}

	// --- switch cases: case 'value': return await fn.call(...) or fn.execute.call(...) ---
	const swRe = /case\s+'([^']+)':\s*return\s+(?:await\s+)?(\w+)(?:\.\w+)?\.call\b/g;
	while ((m = swRe.exec(content)) !== null) {
		const fnName = m[2];
		// If it's a module reference (e.g., domainGet.execute), also record it.
		// The execute function will be in fnName.operation.ts.
		switchMap[m[1]] = fnName;
	}

	return { operations, switchMap };
}

/** Build a reverse map: functionName → filePath for all operation files. */
function buildFuncToFileMap(nodeDir) {
	const map = {};
	const walk = (dir) => {
		if (!fs.existsSync(dir)) return;
		for (const entry of fs.readdirSync(dir)) {
			const full = path.join(dir, entry);
			const stat = fs.statSync(full);
			if (stat.isDirectory()) {
				walk(full);
			} else if (entry.endsWith('.operation.ts') && !entry.endsWith('.spec.ts')) {
				const content = fs.readFileSync(full, 'utf8');

				// 1) export async function executeXxx / export function executeXxx
				const fnRe = /^export\s+(?:async\s+)?function\s+(execute\w*)/gm;
				let fm;
				while ((fm = fnRe.exec(content)) !== null) {
					map[fm[1]] = path.relative(path.join(ROOT, 'nodes'), full);
				}

				// 2) export const execute = …  (export name is 'execute')
				const constRe = /^export\s+const\s+execute\s*=/gm;
				while ((fm = constRe.exec(content)) !== null) {
					map['execute'] = path.relative(path.join(ROOT, 'nodes'), full);
				}

				// 3) export { execute as executeXxx }
				const aliasRe = /export\s*\{\s*execute\s+as\s+(execute\w*)\s*\}/gm;
				let am;
				while ((am = aliasRe.exec(content)) !== null) {
					map[am[1]] = path.relative(path.join(ROOT, 'nodes'), full);
				}
			}
		}
	};
	walk(nodeDir);
	return map;
}

/**
 * Collect all index.ts files under a node directory AND extract import aliases.
 * Returns { indexFiles, aliasMap, nsImportMap }.
 * aliasMap maps alias → { originalName, source } for precise file resolution.
 */
function collectIndexFilesWithAliases(nodeDir) {
	const files = [];
	const aliasMap = {};
	const nsImportMap = {};

	const walk = (dir) => {
		if (!fs.existsSync(dir)) return;
		for (const entry of fs.readdirSync(dir)) {
			const full = path.join(dir, entry);
			const stat = fs.statSync(full);
			if (stat.isDirectory()) {
				walk(full);
			} else if (entry === 'index.ts') {
				files.push(full);
				const content = fs.readFileSync(full, 'utf8');

				// Extract ALL named import aliases: import { executeXxx as aliasYyy, ... } from './source'
				const importRe = /import\s*\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g;
				let im;
				while ((im = importRe.exec(content)) !== null) {
					const importBlock = im[1];
					const source = im[2];
					const parts = importBlock.split(',');
					for (const part of parts) {
						const trimmed = part.trim();
						const aliasMatch = trimmed.match(/^(\w+)\s+as\s+(\w+)$/);
						if (aliasMatch) {
							// Store both originalName and source for precise resolution
							aliasMap[aliasMatch[2]] = { originalName: aliasMatch[1], source };
						}
					}
				}

				// Extract namespace imports: import * as domainGet from './path'
				const nsRe = /import\s*\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g;
				let nm;
				while ((nm = nsRe.exec(content)) !== null) {
					nsImportMap[nm[1]] = nm[2];
				}
			}
		}
	};
	walk(nodeDir);
	return { indexFiles: files, aliasMap, nsImportMap };
}

// ---------------------------------------------------------------------------
// Markdown generators
// ---------------------------------------------------------------------------

/** Generate an operation page markdown string. */
function generateOpPage(nodeName, opValue, opDisplay, action, parsed) {
	const lines = [];
	lines.push('# ' + humanizeNodeName(nodeName) + ' — ' + opDisplay);
	lines.push('');
	lines.push('> Opération `' + opValue + '` · Fichier source : `nodes/' + parsed.filePath + '`');
	lines.push('');

	// --- HTTP Request ---
	lines.push('## Requête HTTP');
	lines.push('');
	if (parsed.endpoints.length > 0) {
		lines.push('| Méthode | Endpoint |');
		lines.push('| --- | --- |');
		for (const ep of parsed.endpoints) {
			lines.push('| ' + ep.method + ' | `' + ep.endpoint + '` |');
		}
	} else {
		lines.push('Endpoint non détecté statiquement.');
	}
	lines.push('');

	// --- Parameters ---
	lines.push('## Paramètres');
	lines.push('');
	const descNames = new Set(parsed.descriptionParams.map((p) => p.name));
	const effectiveParams = parsed.paramNames.filter((n) => !descNames.has(n));
	if (effectiveParams.length === 0 && parsed.descriptionParams.length === 0) {
		lines.push('Aucun paramètre supplémentaire.');
	} else {
		lines.push('| Paramètre (n8n) | Type | Requis |');
		lines.push('| --- | --- | --- |');
		for (const p of parsed.descriptionParams) {
			lines.push('| `' + p.name + '` | ' + p.type + ' | ' + p.required + ' |');
		}
		for (const name of effectiveParams) {
			lines.push('| `' + name + '` | — | — |');
		}
	}
	lines.push('');

	// --- Optional filters ---
	lines.push('## Filtres optionnels');
	lines.push('');
	if (parsed.filters.length > 0) {
		const flatFilters = parsed.filters.filter((f) => f.isFlat);
		if (flatFilters.length > 0) {
			lines.push("> ⚠️ Paramètres plats (rétrocompatibles) — non affichés dans l'interface n8n.");
			lines.push('');
			lines.push('| Paramètre n8n | Query param API | Type |');
			lines.push('| --- | --- | --- |');
			for (const f of flatFilters) {
				lines.push('| `' + f.n8nParam + '` | `' + f.queryParam + '` | ' + f.type + ' |');
			}
		} else {
			lines.push('| Paramètre n8n | Query param API | Type |');
			lines.push('| --- | --- | --- |');
			for (const f of parsed.filters) {
				lines.push('| `' + f.n8nParam + '` | `' + f.queryParam + '` | ' + f.type + ' |');
			}
		}
	} else {
		lines.push('Aucun filtre optionnel.');
	}
	lines.push('');

	// --- See also ---
	lines.push('## Voir aussi');
	lines.push('');
	lines.push('- [README du node](../README.md)');
	lines.push('- [Documentation du projet](../../../README.md)');
	lines.push('- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)');
	lines.push('');

	return lines.join('\n');
}

/** Generate a node README markdown string. */
function generateNodeReadme(nodeName, ops) {
	const lines = [];
	lines.push('# ' + humanizeNodeName(nodeName));
	lines.push('');
	lines.push("> Node n8n pour l'API OVHcloud.");
	lines.push('');
	lines.push('## Opérations (' + ops.length + ')');
	lines.push('');
	lines.push('| Opération | Valeur | Page |');
	lines.push('| --- | --- | --- |');
	for (const op of ops) {
		const slug = toKebab(op.value);
		lines.push(
			'| ' + op.display + ' | `' + op.value + '` | [' + slug + '](operations/' + slug + '.md) |',
		);
	}
	lines.push('');
	lines.push('## Voir aussi');
	lines.push('');
	lines.push('- [Index des nodes](../README.md)');
	lines.push('- [Documentation du projet](../../README.md)');
	lines.push('- [Filtres optionnels](../../_shared/filtering.md)');
	lines.push('');
	return lines.join('\n');
}

/** Generate the main index README. */
function generateIndexReadme(nodes) {
	const lines = [];
	lines.push('# Documentation des nodes OVHcloud');
	lines.push('');
	lines.push('> Index généré automatiquement par `scripts/generate-node-docs.js`.');
	lines.push('');
	lines.push('| Node | Nb opérations | Lien |');
	lines.push('| --- | ---: | --- |');
	for (const n of nodes) {
		lines.push('| ' + n.name + ' | ' + n.ops + ' | [' + n.slug + '](' + n.slug + '/README.md) |');
	}
	lines.push('');
	lines.push('## Voir aussi');
	lines.push('');
	lines.push('- [Documentation du projet](../README.md)');
	lines.push('- [Filtres optionnels](../_shared/filtering.md)');
	lines.push('');
	return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
	// Ensure output directory exists
	fs.mkdirSync(OUT_DIR, { recursive: true });

	const allNodes = [];
	let totalPages = 0;
	const preexistingReadmes = [];
	const missingSources = [];

	// Collect node directories (skip 'shared')
	const nodeDirs = fs
		.readdirSync(NODES_DIR)
		.filter((d) => {
			const full = path.join(NODES_DIR, d);
			return fs.statSync(full).isDirectory() && d !== 'shared';
		})
		.sort();

	console.log('Scanning ' + nodeDirs.length + ' nodes…\n');

	for (const nodeName of nodeDirs) {
		const nodeDir = path.join(NODES_DIR, nodeName);
		const slug = toKebab(nodeName);

		// Collect all index.ts files + extract import aliases
		const { indexFiles, aliasMap, nsImportMap } = collectIndexFilesWithAliases(nodeDir);
		let allOperations = [];
		let allSwitchMap = {};

		for (const idxFile of indexFiles) {
			const content = fs.readFileSync(idxFile, 'utf8');
			const parsed = parseIndexFile(content);
			allOperations = allOperations.concat(parsed.operations);
			Object.assign(allSwitchMap, parsed.switchMap);
		}

		// Build function → file map from operation files
		const funcToFile = buildFuncToFileMap(nodeDir);

		// Deduplicate operations by value (keep first occurrence)
		const seenOps = new Set();
		const uniqueOps = [];
		for (const op of allOperations) {
			if (!seenOps.has(op.value)) {
				seenOps.add(op.value);
				uniqueOps.push(op);
			}
		}

		// Process each operation
		const nodeOps = [];
		for (const op of uniqueOps) {
			const fnName = allSwitchMap[op.value];
			let relPath = funcToFile[fnName] || null;

			// If the exact function name isn't found, check if it's an import alias.
			// Alias entries have { originalName, source } for precise resolution.
			if (!relPath && aliasMap[fnName]) {
				const aliasInfo = aliasMap[fnName];
				// Resolve the import source relative to the index.ts file
				const idxFile = path.join(NODES_DIR, nodeName, 'index.ts');
				const idxDir = path.dirname(idxFile);
				const resolved = fs.existsSync(path.resolve(idxDir, aliasInfo.source))
					? path.resolve(idxDir, aliasInfo.source)
					: path.resolve(idxDir, aliasInfo.source + '.ts');
				if (fs.existsSync(resolved)) {
					relPath = path.relative(path.join(ROOT, 'nodes'), resolved);
				}
			}

			// If still not found, check if it's a module reference (e.g., domainGet.execute)
			// In that case, the execute function is in fnName.operation.ts or via namespace import
			if (!relPath && fnName && !fnName.startsWith('execute')) {
				const modFile = path.join(NODES_DIR, nodeName, fnName + '.operation.ts');
				if (fs.existsSync(modFile)) {
					relPath = path.relative(path.join(ROOT, 'nodes'), modFile);
				} else if (nsImportMap[fnName]) {
					// Namespace import: resolve relative to the index.ts file
					const idxFile2 = path.join(NODES_DIR, nodeName, 'index.ts');
					const idxDir2 = path.dirname(idxFile2);
					const importPath = nsImportMap[fnName];
					const resolved2 = fs.existsSync(path.resolve(idxDir2, importPath))
						? path.resolve(idxDir2, importPath)
						: path.resolve(idxDir2, importPath + '.ts');
					if (fs.existsSync(resolved2)) {
						relPath = path.relative(path.join(ROOT, 'nodes'), resolved2);
					}
				}
			}

			if (fnName && relPath) {
				try {
					const opFilePath = path.join(NODES_DIR, relPath);
					const parsed = parseOperationFile(opFilePath, fnName);
					totalPages += 1;

					// Write operation page
					const opDir = path.join(OUT_DIR, slug, 'operations');
					fs.mkdirSync(opDir, { recursive: true });
					const opSlug = toKebab(op.value);
					const opPage = generateOpPage(
						nodeName,
						op.value,
						op.display || op.name,
						op.action,
						parsed,
					);
					fs.writeFileSync(path.join(opDir, opSlug + '.md'), opPage, 'utf8');

					nodeOps.push({
						value: op.value,
						display: op.display || op.name,
						source: relPath,
						action: op.action,
					});
				} catch (err) {
					console.warn('  [WARN] Error parsing ' + relPath + ': ' + err.message);
					nodeOps.push({
						value: op.value,
						display: op.display || op.name,
						source: null,
						action: op.action,
					});
					missingSources.push({ node: nodeName, op: op.value, fn: fnName });
				}
			} else if (fnName && fnName !== 'undefined') {
				// Operation with no matching execute function
				console.warn(
					'  [WARN] ' + nodeName + '/' + op.value + ': execute function "' + fnName + '" not found',
				);
				nodeOps.push({
					value: op.value,
					display: op.display || op.name,
					source: null,
					action: op.action,
				});
				missingSources.push({ node: nodeName, op: op.value, fn: fnName || '(none)' });
			}
		}

		// Write node README only if it doesn't already exist
		const nodeReadmePath = path.join(OUT_DIR, slug, 'README.md');
		if (fs.existsSync(nodeReadmePath)) {
			preexistingReadmes.push(slug);
		} else {
			const readme = generateNodeReadme(nodeName, nodeOps);
			fs.mkdirSync(path.dirname(nodeReadmePath), { recursive: true });
			fs.writeFileSync(nodeReadmePath, readme, 'utf8');
		}

		allNodes.push({
			name: humanizeNodeName(nodeName),
			slug,
			ops: nodeOps.length,
		});

		console.log('  ' + nodeName.padEnd(30) + ' ' + String(nodeOps.length).padStart(4) + ' ops');
	}

	// Always regenerate the main index
	allNodes.sort((a, b) => a.slug.localeCompare(b.slug));
	const indexMd = generateIndexReadme(allNodes);
	fs.writeFileSync(path.join(OUT_DIR, 'README.md'), indexMd, 'utf8');

	// --- Summary ---
	console.log('\n' + '='.repeat(60));
	console.log('Generated ' + totalPages + ' operation pages for ' + allNodes.length + ' nodes.');
	console.log('');

	if (preexistingReadmes.length > 0) {
		console.log('README pré-existants (non écrasés):');
		for (const s of preexistingReadmes) {
			console.log('  - docs/nodes/' + s + '/README.md');
		}
		console.log('');
	}

	if (missingSources.length > 0) {
		console.log('Opérations sans source trouvée:');
		for (const m of missingSources) {
			console.log('  - ' + m.node + '/' + m.op + ' (fonction: ' + m.fn + ')');
		}
		console.log('');
	}

	console.log('Output directory: docs/nodes/');
	process.exit(0);
}

main();
