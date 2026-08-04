#!/usr/bin/env node

/**
 * OVHcloud API spec downloader for placeholder specs.
 *
 * Some spec files under docs/api-specs/v1/ were downloaded partially: they
 * contain `apiVersion`, `resourcePath`, `basePath` and `models` but no `apis`
 * array (the endpoint declarations are missing). This script re-downloads the
 * full Swagger 2.0 spec for each of those files from the public OVH API
 * endpoint `https://api.ovh.com/1.0/{resourcePath}.json` and overwrites the
 * local placeholder file.
 *
 * Run:  node scripts/download-specs.js
 *
 * A spec file is considered a "placeholder" when it has no usable `apis`
 * array. Files whose re-download still returns no endpoints are reported as
 * genuinely empty and left untouched.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SPECS_DIR = path.join(ROOT, 'docs', 'api-specs', 'v1');

/** Public OVH API spec endpoint. Each {path} is the resourcePath (e.g. /email/exchange). */
const BASE_URL = 'https://api.ovh.com/1.0';

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function warn(msg) {
	process.stderr.write(`[download-specs] WARN ${msg}\n`);
}

/** Read + parse a JSON file. Returns null on any error. */
function readJson(filePath) {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	} catch (err) {
		warn(`cannot read/parse ${path.relative(ROOT, filePath)}: ${err.message}`);
		return null;
	}
}

/** List spec files (excluding the index). */
function listSpecFiles() {
	if (!fs.existsSync(SPECS_DIR)) return [];
	return fs
		.readdirSync(SPECS_DIR)
		.filter((f) => f.endsWith('.json') && f !== '_index.json')
		.sort();
}

/**
 * A placeholder is a spec file without a usable `apis` array. Both a missing
 * key and an empty array are treated as "no endpoints downloaded".
 */
function isPlaceholder(spec) {
	return !spec || !Array.isArray(spec.apis) || spec.apis.length === 0;
}

/** Download a JSON document from the OVH spec endpoint. Returns null on failure. */
function downloadSpec(resourcePath) {
	const url = `${BASE_URL}${resourcePath}.json`;
	const { execFileSync } = require('child_process');
	try {
		// Use curl to avoid adding a fetch dependency and to surface HTTP errors.
		const raw = execFileSync('curl', ['-sS', '--max-time', '60', url], {
			encoding: 'utf8',
			maxBuffer: 50 * 1024 * 1024,
		});
		return JSON.parse(raw);
	} catch (err) {
		warn(`download failed for ${url}: ${err.message}`);
		return null;
	}
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
	if (!fs.existsSync(SPECS_DIR)) {
		console.error(`Cannot find specs directory: ${SPECS_DIR}`);
		process.exit(1);
	}

	const files = listSpecFiles();
	let placeholders = 0;
	let downloaded = 0;
	let stillEmpty = 0;

	for (const file of files) {
		const filePath = path.join(SPECS_DIR, file);
		const spec = readJson(filePath);
		if (!isPlaceholder(spec)) continue;

		placeholders += 1;
		const resourcePath = typeof spec.resourcePath === 'string' ? spec.resourcePath : '';
		if (!resourcePath) {
			warn(`${file} has no resourcePath; skipped`);
			continue;
		}

		const fresh = downloadSpec(resourcePath);
		if (!fresh) continue;

		if (!isPlaceholder(fresh)) {
			fs.writeFileSync(filePath, JSON.stringify(fresh, null, 2) + '\n', 'utf8');
			downloaded += 1;
			console.log(
				`Downloaded ${file} <- ${BASE_URL}${resourcePath}.json (${fresh.apis.length} apis)`,
			);
		} else {
			stillEmpty += 1;
			console.log(`Spec ${file} is genuinely empty (no endpoints)`);
		}
	}

	console.log('');
	console.log(`Placeholders found : ${placeholders}`);
	console.log(`Filled             : ${downloaded}`);
	console.log(`Still empty        : ${stillEmpty}`);

	process.exit(0);
}

main();
