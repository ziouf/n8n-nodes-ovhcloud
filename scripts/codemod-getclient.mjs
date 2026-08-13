#!/usr/bin/env node
/**
 * Codemod: `new ApiClient(this)` → `getClient(this)` dans les fichiers
 * d'opération, pour profiter de la factory mémoïsée (1 client / exécution).
 * Usage: node scripts/codemod-getclient.mjs
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const NODES_DIR = join(ROOT, 'nodes');
const SHARED_METHODS = join(ROOT, 'shared', 'methods');

let changed = 0;
const changedFiles = [];

function collectOperationFiles(dir, out = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			collectOperationFiles(full, out);
		} else if (
			entry.endsWith('.operation.ts') ||
			(dir.startsWith(SHARED_METHODS) && entry.endsWith('.ts'))
		) {
			out.push(full);
		}
	}
	return out;
}

function migrateFile(filePath) {
	const src = readFileSync(filePath, 'utf-8');
	if (!src.includes('new ApiClient(this)')) return;

	let next = src;

	// 1) Inline usage: `new ApiClient(this).httpX(...)` → `getClient(this).httpX(...)`
	next = next.replace(/new ApiClient\(this\)/g, 'getClient(this)');

	// 2) Import: `import { ApiClient } from '...ApiClient'` → `{ getClient }` (ou conserver ApiClient s'il reste référencé)
	const importRe =
		/import \{([^}]*ApiClient[^}]*)\} from ('[^']*shared\/transport\/ApiClient'|"[^"]*shared\/transport\/ApiClient")/;
	const m = importRe.exec(next);
	if (m) {
		const members = m[1]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean);
		const stillNeedsApiClient = next.replace(m[0], '').includes('ApiClient');
		const newMembers = [];
		if (stillNeedsApiClient && members.includes('ApiClient')) newMembers.push('ApiClient');
		if (!members.includes('getClient')) newMembers.push('getClient');
		next = next.replace(m[0], `import { ${newMembers.join(', ')} } from ${m[2]}`);
	}

	if (next !== src) {
		writeFileSync(filePath, next);
		changed++;
		changedFiles.push(filePath);
	}
}

const files = collectOperationFiles(NODES_DIR).concat(collectOperationFiles(SHARED_METHODS));
for (const f of files) migrateFile(f);

console.log(`Migrated ${changed} files`);
console.log(changedFiles.join('\n'));
