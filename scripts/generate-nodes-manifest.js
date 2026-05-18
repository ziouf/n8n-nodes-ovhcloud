#!/usr/bin/env node

/**
 * Auto-generate the nodes list in package.json from the nodes/ directory.
 *
 * Reads all directories in nodes/ and generates the corresponding
 * dist/nodes/{name}/{name}.node.js entries for the n8n manifest.
 *
 * Run via: npm run generate:nodes-manifest
 * Or automatically after build via postbuild hook.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const nodesDir = path.join(rootDir, 'nodes');
const pkgPath = path.join(rootDir, 'package.json');

// Read all node directories
const nodeDirs = fs
	.readdirSync(nodesDir)
	.filter((f) => {
		const fullPath = path.join(nodesDir, f);
		return fs.statSync(fullPath).isDirectory();
	})
	.sort();

// Generate dist paths
const nodes = nodeDirs.map((dir) => `dist/nodes/${dir}/${dir}.node.js`);

// Read and update package.json
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.n8n.nodes = nodes;

// Write back with consistent formatting
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, '\t') + '\n', 'utf8');

console.log(`Updated package.json with ${nodes.length} nodes:`);
nodeDirs.forEach((dir) => console.log(`  - ${dir}`));
