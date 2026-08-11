/*
 * Codemod: standardize _itemIndex non-null-assertion pattern.
 *
 * Walks all operation.ts files under nodes/ and:
 * 1. Replaces `_itemIndex!` with `_itemIndex ?? 0`
 * 2. Replaces `itemIndex!` with `itemIndex ?? 0` (exact match, not inside _itemIndex!)
 * 3. Normalizes execute signature: `_itemIndex: number,` to `_itemIndex?: number,`
 *
 * Usage:
 *   node scripts/standardize-item-parameter.js [nodeDir]
 *
 * If a node directory is specified (e.g., nodes/OvhCloudVps), only that
 * directory is processed. Otherwise all node directories under nodes/ are
 * processed in alphabetical order.
 *
 * This script is idempotent - running it multiple times produces the same result.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'nodes');

/**
 * Get all node directories under nodes/, optionally filtered by a specific dir.
 */
function getNodeDirs(filterDir) {
	const entries = fs.readdirSync(ROOT, { withFileTypes: true });
	const dirs = entries.filter((e) => e.isDirectory()).map((e) => path.join(ROOT, e.name));
	if (filterDir) {
		const target = path.resolve(ROOT, filterDir);
		return dirs.filter((d) => d === target);
	}
	return dirs.sort();
}

/**
 * Process a single operation file.
 * Returns { replacements: number, changed: boolean }.
 */
function processFile(filePath) {
	let content = fs.readFileSync(filePath, 'utf-8');
	const original = content;
	let replacements = 0;

	// 1. Replace `_itemIndex!` → `_itemIndex ?? 0`
	const itemIndexBangRe = /_itemIndex!/g;
	const itemIndexBangMatches = content.match(itemIndexBangRe);
	if (itemIndexBangMatches) {
		replacements += itemIndexBangMatches.length;
		content = content.replace(itemIndexBangRe, '_itemIndex ?? 0');
	}

	// 2. Replace `itemIndex!` → `itemIndex ?? 0` (but NOT `_itemIndex!` which is already done)
	// After step 1, _itemIndex! is gone, so this won't re-match.
	const bareItemIndexBangRe = /(?<![._])itemIndex!/g;
	const bareMatches = content.match(bareItemIndexBangRe);
	if (bareMatches) {
		replacements += bareMatches.length;
		content = content.replace(bareItemIndexBangRe, 'itemIndex ?? 0');
	}

	// 3. Replace bare `_itemIndex` (not followed by ! or ??) with `_itemIndex ?? 0`
	// Only when used as an argument (followed by , or )) or array index (]).
	// Excludes: _itemIndex: (signature), _itemIndex! (already handled), _itemIndex ?? (already done)
	const bareItemIndexRe = /_itemIndex(?![!?])(?=\s*[,\)\]])/g;
	const bareMatches2 = content.match(bareItemIndexRe);
	if (bareMatches2) {
		replacements += bareMatches2.length;
		content = content.replace(bareItemIndexRe, '_itemIndex ?? 0');
	}

	// 4. Normalize execute signature: `_itemIndex: number,` → `_itemIndex?: number,`
	const requiredSigRe = /_itemIndex:\s*number,/g;
	const requiredSigMatches = content.match(requiredSigRe);
	if (requiredSigMatches) {
		replacements += requiredSigMatches.length;
		content = content.replace(requiredSigRe, '_itemIndex?: number,');
	}

	if (content !== original) {
		fs.writeFileSync(filePath, content, 'utf-8');
		return { replacements, changed: true };
	}
	return { replacements: 0, changed: false };
}

/**
 * Process all operation files in a node directory.
 */
function processNodeDir(nodeDir) {
	let totalReplacements = 0;
	let filesProcessed = 0;
	let filesChanged = 0;

	function walk(dir) {
		let entries;
		try {
			entries = fs.readdirSync(dir, { withFileTypes: true });
		} catch {
			return;
		}
		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				walk(fullPath);
			} else if (entry.isFile() && entry.name.endsWith('.operation.ts')) {
				const result = processFile(fullPath);
				filesProcessed++;
				if (result.changed) {
					filesChanged++;
					totalReplacements += result.replacements;
				}
			}
		}
	}

	walk(nodeDir);
	return { filesProcessed, filesChanged, totalReplacements };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const filterDir = process.argv[2] || null;
// Normalize: strip "nodes/" prefix if present so we resolve against ROOT correctly
const normalizedFilter = filterDir ? filterDir.replace(/^nodes\/?/, '') : null;
const nodeDirs = getNodeDirs(normalizedFilter);

if (nodeDirs.length === 0) {
	console.error(
		`No node directories found${filterDir ? ` matching "${filterDir}"` : ''} under ${ROOT}`,
	);
	process.exit(1);
}

let grandTotalReplacements = 0;
let grandFilesChanged = 0;
let grandFilesProcessed = 0;

for (const nodeDir of nodeDirs) {
	const nodeName = path.basename(nodeDir);
	const result = processNodeDir(nodeDir);

	console.log(
		`${nodeName}: ${result.filesProcessed} files scanned, ` +
			`${result.filesChanged} changed, ` +
			`${result.totalReplacements} replacement(s)`,
	);

	grandFilesProcessed += result.filesProcessed;
	grandFilesChanged += result.filesChanged;
	grandTotalReplacements += result.totalReplacements;
}

console.log(
	`\nTotal: ${grandFilesProcessed} files scanned, ${grandFilesChanged} changed, ${grandTotalReplacements} replacement(s)`,
);
