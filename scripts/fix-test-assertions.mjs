#!/usr/bin/env node
/**
 * Fix test assertions: replace expect(ApiClient).toHaveBeenCalled()
 * with expect(getClient).toHaveBeenCalled() in spec files that mock ApiClient.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = join(fileURLToPath(import.meta.url), '..');
const ROOT = join(__dirname, '..');
const NODES_DIR = join(ROOT, 'nodes');

let count = 0;

function collectSpecFiles(dir, out = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			collectSpecFiles(full, out);
		} else if (entry.endsWith('.operation.spec.ts')) {
			out.push(full);
		}
	}
	return out;
}

function fixAssertions(src) {
	// Replace expect(ApiClient).toHaveBeenCalled() with expect(getClient).toHaveBeenCalled()
	if (!/expect\(ApiClient\)\.toHaveBeenCalled\(\)/.test(src)) return src;

	let result = src.replace(
		/expect\(ApiClient\)\.toHaveBeenCalled\(\)/g,
		'expect(getClient).toHaveBeenCalled()',
	);

	// Also update the import if it only imports ApiClient
	const importRe = /import \{ ApiClient \} from/;
	if (importRe.test(result)) {
		result = result.replace(importRe, 'import { ApiClient, getClient } from');
	}

	return result;
}

const files = collectSpecFiles(NODES_DIR);
for (const f of files) {
	const src = readFileSync(f, 'utf-8');
	const modified = fixAssertions(src);
	if (modified !== src) {
		writeFileSync(f, modified);
		count++;
	}
}
