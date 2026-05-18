const fs = require('fs');
const path = require('path');

const nodesDir = path.join(__dirname, '..', 'nodes');
const nodeDirs = fs.readdirSync(nodesDir).filter((f) => {
	const fullPath = path.join(nodesDir, f);
	return fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, `${f}.node.ts`));
});

let updated = 0;
let skipped = 0;

for (const nodeName of nodeDirs) {
	const nodeFile = path.join(nodesDir, nodeName, `${nodeName}.node.ts`);
	if (!fs.existsSync(nodeFile)) {
		skipped++;
		continue;
	}

	const content = fs.readFileSync(nodeFile, 'utf8');

	// Check if already using BaseNode
	if (content.includes('extends BaseNode')) {
		skipped++;
		continue;
	}

	// Extract shared path
	const sharedMatch = content.match(/import.*from\s+['"](\.\.\/shared\/constants)['"]/);
	const sharedPath = sharedMatch ? sharedMatch[1] : '../../shared/constants';
	const baseNodePath = sharedPath.replace('constants', 'nodes/BaseNode');

	// Extract index path
	const indexMatch = content.match(/import.*from\s+['"](\.\/index)['"]/);
	const indexPath = indexMatch ? indexMatch[1] : './index';

	// Extract method import (getVpsServices, getServiceIds, etc.)
	const methodImportMatch = content.match(
		/import \{ ([\w]+) \} from\s+['"](\.\.\/shared\/methods\/[\w.]+)['"]/,
	);
	const methodImportName = methodImportMatch ? methodImportMatch[1] : null;
	const methodImportPath = methodImportMatch ? methodImportMatch[2] : null;

	// Extract className
	const classNameMatch = content.match(/export class (\w+)/);
	const className = classNameMatch ? classNameMatch[1] : nodeName;

	// Extract description block (from "description: INodeTypeDescription" to the closing "};")
	const descStart = content.indexOf('description: INodeTypeDescription');
	if (descStart === -1) {
		skipped++;
		continue;
	}

	// Find the closing }; of the description object
	let braceCount = 0;
	let descEnd = descStart;
	let foundOpen = false;
	for (let i = descStart; i < content.length; i++) {
		if (content[i] === '{') {
			braceCount++;
			foundOpen = true;
		} else if (content[i] === '}') {
			braceCount--;
			if (foundOpen && braceCount === 0) {
				descEnd = i + 1;
				break;
			}
		}
	}
	const descBlock = content.substring(content.lastIndexOf('\t', descStart - 1) + 1, descEnd);

	// Extract methods block
	const methodsStart = content.indexOf('\tmethods = {');
	if (methodsStart === -1) {
		skipped++;
		continue;
	}
	let mBraceCount = 0;
	let mFoundOpen = false;
	let methodsEnd = methodsStart;
	for (let i = methodsStart; i < content.length; i++) {
		if (content[i] === '{') {
			mBraceCount++;
			mFoundOpen = true;
		} else if (content[i] === '}') {
			mBraceCount--;
			if (mFoundOpen && mBraceCount === 0) {
				methodsEnd = i + 1;
				break;
			}
		}
	}
	const methodsBlock = content.substring(methodsStart, methodsEnd);

	// Build new file content
	let newContent =
		"import {\n\tIExecuteFunctions,\n\tNodeConnectionTypes,\n\ttype INodeExecutionData,\n\ttype INodeType,\n} from 'n8n-workflow';\n";
	newContent += "import { OvhCloudApiSecretName, OvhCloudIcon } from '" + sharedPath + "';\n";
	newContent += "import { description, execute } from '" + indexPath + "';\n";
	if (methodImportName && methodImportPath) {
		newContent += 'import { ' + methodImportName + " } from '" + methodImportPath + "';\n";
	}
	newContent += "import { BaseNode } from '" + baseNodePath + "';\n";
	newContent += '\nexport class ' + className + ' extends BaseNode implements INodeType {\n';
	newContent += descBlock + '\n';
	newContent += methodsBlock + '\n';
	newContent +=
		'\n\tasync executeOperations(this: IExecuteFunctions): Promise<INodeExecutionData[]> {\n';
	newContent += '\t\treturn execute.call(this);\n';
	newContent += '\t}\n';
	newContent += '}\n';

	fs.writeFileSync(nodeFile, newContent, 'utf8');
	updated++;
}

console.log('Updated ' + updated + ' node files, skipped ' + skipped);
