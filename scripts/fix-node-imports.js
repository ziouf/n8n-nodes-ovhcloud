const fs = require('fs');
const path = require('path');

const nodesDir = path.join(__dirname, '..', 'nodes');
const methodsDir = path.join(__dirname, '..', 'shared', 'methods');

const methodFiles = fs.readdirSync(methodsDir).filter((f) => f.endsWith('.method.ts'));
const methodMap = {};
for (const f of methodFiles) {
	const name = f.replace('.method.ts', '');
	methodMap[name] = '../../shared/methods/' + f;
}

let fixed = 0;
let skipped = 0;

for (const nodeName of fs.readdirSync(nodesDir)) {
	const nodeFile = path.join(nodesDir, nodeName, nodeName + '.node.ts');
	if (!fs.existsSync(nodeFile)) continue;

	let content = fs.readFileSync(nodeFile, 'utf8');

	// Find all identifiers used in listSearch
	const listSearchMatch = content.match(/listSearch:\s*\{([^}]+)\}/);
	if (!listSearchMatch) {
		skipped++;
		continue;
	}

	const listSearchContent = listSearchMatch[1];
	const identifiers = listSearchContent
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);

	// Check which identifiers are missing imports
	let needsFix = false;
	for (const id of identifiers) {
		// Check if there's an import for this identifier
		const importRegex = new RegExp('import\\s+\\{[^}]*\\b' + id + '\\b[^}]*\\}\\s+from');
		if (!importRegex.test(content)) {
			// Check if we know the method file for this identifier
			if (methodMap[id]) {
				// Add the import before BaseNode import
				const importToAdd = 'import { ' + id + " } from '" + methodMap[id] + "';\n";
				content = content.replace(
					'import { BaseNode } from ',
					importToAdd + 'import { BaseNode } from ',
				);
				needsFix = true;
			}
		}
	}

	// Check if INodeTypeDescription is missing
	if (
		!content.includes('INodeTypeDescription') &&
		content.includes('description: INodeTypeDescription')
	) {
		content = content.replace(
			'type INodeType,\n}',
			'type INodeType,\n\ttype INodeTypeDescription,\n}',
		);
		needsFix = true;
	}

	if (needsFix) {
		fs.writeFileSync(nodeFile, content, 'utf8');
		fixed++;
	} else {
		skipped++;
	}
}

console.log('Fixed ' + fixed + ' files, skipped ' + skipped);
