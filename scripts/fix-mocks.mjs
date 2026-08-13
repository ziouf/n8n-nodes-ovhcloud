#!/usr/bin/env node
/**
 * Fix ALL spec files: ensure every mock of ApiClient also exports getClient.
 *
 * Strategy: line-by-line processing. When we detect a jest.mock('...ApiClient')
 * block, we count braces to find its closing }); and inject getClient before it.
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

function fixMock(src) {
	// Skip files that already have getClient
	if (/getClient/.test(src)) return src;

	const lines = src.split('\n');
	const result = [];
	let inMock = false;
	let braceDepth = 0;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];

		// Detect start of jest.mock('...ApiClient', ...)
		if (/jest\.mock\(\s*['"][^'"]*ApiClient['"]/.test(line)) {
			inMock = true;
			braceDepth = 0;
			for (const ch of line) {
				if (ch === '{') braceDepth++;
				if (ch === '}') braceDepth--;
			}
			result.push(line);
			continue;
		}

		if (inMock) {
			// Count braces on this line
			for (const ch of line) {
				if (ch === '{') braceDepth++;
				if (ch === '}') braceDepth--;
			}

			// Detect closing }); of the mock block
			// After processing braces, depth should be 0 (or ≤ 0)
			// The line should end with });
			if (braceDepth <= 0 && /\}\);/.test(line)) {
				// Insert getClient before this line
				result.push('\t\tgetClient: jest.fn(() => mockHttpClient),');
				result.push(line);
				inMock = false;
				braceDepth = 0;
				continue;
			}

			result.push(line);
			continue;
		}

		result.push(line);
	}

	return result.join('\n');
}

const files = collectSpecFiles(NODES_DIR);
for (const f of files) {
	const src = readFileSync(f, 'utf-8');
	const modified = fixMock(src);
	if (modified !== src) {
		writeFileSync(f, modified);
		count++;
	}
}
