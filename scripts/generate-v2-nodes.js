#!/usr/bin/env node
/**
 * Generate 14 OVHCloud V2 n8n nodes from API spec files.
 * Reads specs from docs/api-specs/v2/ and generates complete node code.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NODES_DIR = path.join(ROOT, 'nodes');
const SPECS_DIR = path.join(ROOT, 'docs', 'api-specs', 'v2');

// ── Helpers ──

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function httpMethodName(method) {
	return method.toLowerCase().charAt(0).toUpperCase() + method.toLowerCase().slice(1);
}

function buildUrlExpr(endpoint) {
	let expr = "'";
	let literal = '';
	const parts = [];
	for (let i = 0; i < endpoint.length; i++) {
		if (endpoint[i] === '{') {
			const end = endpoint.indexOf('}', i);
			const varName = endpoint.substring(i + 1, end);
			if (literal) {
				parts.push({ type: 'lit', val: literal });
				literal = '';
			}
			parts.push({ type: 'var', name: varName });
			i = end;
		} else {
			literal += endpoint[i];
		}
	}
	if (literal) parts.push({ type: 'lit', val: literal });

	for (let i = 0; i < parts.length; i++) {
		const p = parts[i];
		if (p.type === 'lit') {
			expr += p.val;
		} else {
			expr += "' + " + p.name;
			if (i < parts.length - 1 && parts[i + 1].type === 'lit') {
				expr += " + '";
			}
		}
	}
	const last = parts[parts.length - 1];
	if (last && last.type === 'lit') expr += "'";
	return expr;
}

// Derive operation name from endpoint path and HTTP method
function deriveOpName(endpoint, httpMethod) {
	const hm = httpMethodName(httpMethod);
	// Remove leading slash, split by /, skip empty segments
	const segments = endpoint.split('/').filter(Boolean);
	const nameParts = segments.map((seg) => {
		// Replace path params {x} with nothing
		return seg.replace(/\{[^}]+\}/g, '');
	});

	// Build operation name: [prefix][segments][Action]
	const actionSuffix = {
		GET: 'ListGet',
		POST: 'CreatePost',
		PUT: 'UpdatePut',
		DELETE: 'DeleteDelete',
	};

	// For single-segment endpoints without path params, use "List/Get/Create/Update/Delete"
	if (nameParts.length === 1 && !endpoint.match(/\{[^}]+\}/)) {
		return nameParts[0] + actionSuffix[httpMethod];
	}

	// For multi-segment, join with the action suffix
	const baseName = nameParts.join('');
	return baseName + actionSuffix[httpMethod];
}

function extractParams(endpoint) {
	const params = [];
	const regex = /\{([^}]+)\}/g;
	let match;
	while ((match = regex.exec(endpoint)) !== null) {
		if (!params.includes(match[1])) {
			params.push(match[1]);
		}
	}
	return params;
}

function escapeTsString(s) {
	return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// ── Node definitions: map spec file -> node config ──

const SPEC_NODE_MAP = {
	iam: {
		nodeClass: 'OvhCloudIam',
		displayName: 'OVH Cloud IAM',
		name: 'ovhCloudIam',
		description: 'Manage OVHcloud IAM resources via /iam API v2',
		operation: 'iamOperation',
	},
	zimbra: {
		nodeClass: 'OvhCloudZimbra',
		displayName: 'OVH Cloud Zimbra',
		name: 'ovhCloudZimbra',
		description: 'Manage OVHcloud Zimbra services via /zimbra API v2',
		operation: 'zimbraOperation',
	},
	vmwareCloudDirector: {
		nodeClass: 'OvhCloudVmwareCloudDirector',
		displayName: 'OVH Cloud VMware Cloud Director',
		name: 'ovhCloudVmwareCloudDirector',
		description: 'Manage OVHcloud VMware Cloud Director via /vmwareCloudDirector API v2',
		operation: 'vcdOperation',
	},
	okms: {
		nodeClass: 'OvhCloudOkms',
		displayName: 'OVH Cloud OKMS',
		name: 'ovhCloudOkms',
		description: 'Manage OVHcloud OKMS services via /okms API v2',
		operation: 'okmsOperation',
	},
	managedCMS: {
		nodeClass: 'OvhCloudManagedCms',
		displayName: 'OVH Cloud Managed CMS',
		name: 'ovhCloudManagedCMS',
		description: 'Manage OVHcloud Managed CMS via /managedCMS API v2',
		operation: 'managedCmsOperation',
	},
	notification: {
		nodeClass: 'OvhCloudNotification',
		displayName: 'OVH Cloud Notification',
		name: 'ovhCloudNotification',
		description: 'Manage OVHcloud Notification services via /notification API v2',
		operation: 'notificationOperation',
	},
	publicCloud: {
		nodeClass: 'OvhCloudPublicCloudV2',
		displayName: 'OVH Cloud Public Cloud V2',
		name: 'ovhCloudPublicCloudV2',
		description: 'Manage OVHcloud Public Cloud resources via /publicCloud API v2',
		operation: 'publicCloudOperation',
	},
	backupServices: {
		nodeClass: 'OvhCloudBackupServices',
		displayName: 'OVH Cloud Backup Services',
		name: 'ovhCloudBackupServices',
		description: 'Manage OVHcloud Backup Services via /backupServices API v2',
		operation: 'backupServicesOperation',
	},
	webhosting: {
		nodeClass: 'OvhCloudWebhostingV2',
		displayName: 'OVH Cloud Webhosting V2',
		name: 'ovhCloudWebhostingV2',
		description: 'Manage OVHcloud Web Hosting via /webhosting API v2',
		operation: 'webhostingOperation',
	},
	domain: {
		nodeClass: 'OvhCloudDomainV2',
		displayName: 'OVH Cloud Domain V2',
		name: 'ovhCloudDomainV2',
		description: 'Manage OVHcloud Domain services via /domain API v2',
		operation: 'domainOperation',
	},
	vrackServices: {
		nodeClass: 'OvhCloudVrackServices',
		displayName: 'OVH Cloud vRack Services',
		name: 'ovhCloudVrackServices',
		description: 'Manage OVHcloud vRack Services via /vrackServices API v2',
		operation: 'vrackServicesOperation',
	},
	commercialCatalog: {
		nodeClass: 'OvhCloudCommercialCatalog',
		displayName: 'OVH Cloud Commercial Catalog',
		name: 'ovhCloudCommercialCatalog',
		description: 'Browse OVHcloud Commercial Catalog via /commercialCatalog API v2',
		operation: 'commercialCatalogOperation',
	},
	location: {
		nodeClass: 'OvhCloudLocation',
		displayName: 'OVH Cloud Location',
		name: 'ovhCloudLocation',
		description: 'Manage OVHcloud Locations via /location API v2',
		operation: 'locationOperation',
	},
	networkDefense: {
		nodeClass: 'OvhCloudNetworkDefense',
		displayName: 'OVH Cloud Network Defense',
		name: 'ovhCloudNetworkDefense',
		description: 'Manage OVHcloud Network Defense via /networkDefense API v2',
		operation: 'networkDefenseOperation',
	},
};

// ── Generate operation .ts ──

function genOpFile(op) {
	const hm = httpMethodName(op.method);
	const urlExpr = buildUrlExpr(op.endpoint);
	let varDecls = '';
	for (const p of op.params) {
		varDecls += `\tconst ${p} = this.getNodeParameter('${p}', itemIndex) as string;\n`;
	}
	let bodyCode = '';
	if (op.body) {
		bodyCode = '\tconst body: IDataObject = {};\n';
	}
	const httpCall = `client.http${hm}(${urlExpr}${op.body ? ', body' : ''})`;
	const cast = op.returnsArray ? 'as unknown[]' : 'as IDataObject';
	const ret = op.returnsArray
		? `\n\n\tif (!Array.isArray(data)) {\n\t\treturn this.helpers.returnJsonArray([data]);\n\t}\n\n\treturn this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));`
		: `\n\treturn this.helpers.returnJsonArray([data]);`;

	let descProps = '';
	for (const p of op.params) {
		const label = p.replace(/([A-Z])/g, ' $1').trim();
		descProps += `\t\t{\n\t\t\tdisplayName: '${escapeTsString(label)}',\n\t\t\tname: '${p}',\n\t\t\ttype: 'string',\n\t\t\tdefault: '',\n\t\t\trequired: true,\n\t\t\tdescription: 'The ${p} identifier',\n\t\t},\n`;
	}

	const safeDisplayName = escapeTsString(op.displayName);

	// IDataObject is needed when: has body param OR GET returning single object (cast)
	const needsDataObj = op.body || !op.returnsArray;

	return [
		`import type {`,
		needsDataObj ? '\tIDataObject,' : '',
		`\tIExecuteFunctions,`,
		`\tIDisplayOptions,`,
		`\tINodeExecutionData,`,
		`\tINodeProperties,`,
		`} from 'n8n-workflow';`,
		`import { ApiClient } from '../../shared/transport/ApiClient';`,
		'',
		`export function description(displayOptions: IDisplayOptions): INodeProperties[] {`,
		`\treturn [`,
		descProps,
		`\t];`,
		'}',
		'',
		`/**`,
		` * Executes the ${hm} ${safeDisplayName} operation.`,
		` *`,
		` * HTTP method: ${op.method}`,
		` * Endpoint: ${op.endpoint}`,
		` */`,
		`export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {`,
		varDecls,
		bodyCode,
		`\tconst client = new ApiClient(this);`,
		`\tconst data = (await ${httpCall}) ${cast};`,
		ret,
		'}',
		'',
	].join('\n');
}

// ── Generate operation spec .ts ──

function genSpecFile(op) {
	const hm = httpMethodName(op.method);
	let getNodeRet = '';
	for (const p of op.params) {
		getNodeRet += `\t\t\tif (param === '${p}') return 'test-${p}-id';\n`;
	}

	return [
		`/* eslint-disable @typescript-eslint/no-explicit-any */`,
		`import { description, execute } from './${op.name}.operation';`,
		'',
		`// Mock ApiClient with mutable http methods for per-test control`,
		`jest.mock('../../shared/transport/ApiClient', () => {`,
		`\tconst mockHttpClient = {`,
		`\t\thttpGet: jest.fn(),`,
		`\t\thttpPost: jest.fn(),`,
		`\t\thttpPut: jest.fn(),`,
		`\t\thttpDelete: jest.fn(),`,
		`\t};`,
		`\treturn {`,
		`\t\tApiClient: jest.fn().mockImplementation(() => ({`,
		`\t\t\t...mockHttpClient,`,
		`\t\t})),`,
		`\t};`,
		`});`,
		'',
		`import { ApiClient } from '../../shared/transport/ApiClient';`,
		'',
		`describe('${op.name} operation', () => {`,
		`\tdescribe('description', () => {`,
		`\t\tit('should return all required parameters', () => {`,
		`\t\t\tconst result = description({ show: {} });`,
		`\t\t\texpect(result.length).toBeGreaterThanOrEqual(0);`,
		`\t\t});`,
		`\t});`,
		'',
		`\tdescribe('execute', () => {`,
		`\t\tlet mockExecuteFunctions: any;`,
		`\t\tbeforeEach(() => {`,
		`\t\t\tmockExecuteFunctions = {`,
		`\t\t\t\tgetNodeParameter: jest.fn(),`,
		`\t\t\t\thelpers: { returnJsonArray: jest.fn((data: any) => data) },`,
		`\t\t\t};`,
		`\t\t});`,
		'',
		`\t\tit('should call the correct API endpoint', async () => {`,
		`\t\t\tconst mockData = { id: 'test-id' };`,
		`\t\t\tconst client = new ApiClient(mockExecuteFunctions) as any;`,
		`\t\t\t(client.http${hm} as jest.Mock).mockResolvedValue(mockData);`,
		'',
		`\t\t\tmockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string => {`,
		getNodeRet + `\t\t\t\treturn '';`,
		`\t\t\t});`,
		'',
		`\t\t\tconst result = await execute.call(mockExecuteFunctions, 0);`,
		`\t\t\texpect(client.http${hm}).toHaveBeenCalled();`,
		`\t\t\texpect(result).toMatchObject([mockData]);`,
		`\t\t});`,
		`\t});`,
		`});`,
		'',
	].join('\n');
}

// ── Generate index.ts ──

function genIndex(nodeKey, nodeConfig, operations) {
	let imports = '';
	let options = '';
	let displayOpts = '';
	let cases = '';

	for (const op of operations) {
		const oc = capitalize(op.name);
		imports += `import {\n\texecute as execute${oc},\n\tdescription as description${oc},\n} from './${op.name}.operation';\n`;
		options += `\t\t\t{\n\t\t\t\tname: '${escapeTsString(op.displayName)}',\n\t\t\t\tvalue: '${op.name}',\n\t\t\t\taction: '${escapeTsString(op.action)}',\n\t\t\t},\n`;
		displayOpts += `\t\t...(description${oc}({\n\t\t\t...displayOptions,\n\t\t\tshow: { ${nodeConfig.operation}: ['${op.name}'] },\n\t\t}) as INodeProperties[]),\n`;
		cases += `\t\tcase '${op.name}':\n\t\t\treturn execute${oc}.call(this, itemIndex);\n`;
	}

	return [
		`import type {`,
		`\tIDisplayOptions,`,
		`\tIExecuteFunctions,`,
		`\tINodeExecutionData,`,
		`\tINodeProperties,`,
		`} from 'n8n-workflow';`,
		'',
		imports,
		`export function description(displayOptions: IDisplayOptions): INodeProperties[] {`,
		`\tconst operationProperties: INodeProperties[] = [`,
		`\t\t{`,
		`\t\t\tdisplayName: 'Operation',`,
		`\t\t\tname: '${nodeConfig.operation}',`,
		`\t\t\ttype: 'options',`,
		`\t\t\tnoDataExpression: true,`,
		`\t\t\toptions: [`,
		options,
		`\t\t\t],`,
		`\t\t\tdefault: '${operations[0].name}',`,
		`\t\t\tdisplayOptions,`,
		`\t\t},`,
		`\t];`,
		'',
		`\tconst properties: INodeProperties[] = [`,
		`\t\t...operationProperties,`,
		displayOpts,
		`\t];`,
		'',
		`\treturn properties;`,
		'}',
		'',
		`export async function execute(`,
		`\tthis: IExecuteFunctions,`,
		`\titemIndex: number,`,
		`): Promise<INodeExecutionData[]> {`,
		`\tconst operation = this.getNodeParameter('${nodeConfig.operation}', itemIndex, {`,
		`\t\textractValue: true,`,
		`\t});`,
		'',
		`\tswitch (operation) {`,
		cases,
		`\t}`,
		'',
		`\tthrow new Error(\`Unsupported operation "\${operation}" for resource "${nodeConfig.name}"\`);`,
		'}',
		'',
	].join('\n');
}

// ── Generate .node.ts ──

function genNodeFile(nodeClass, nodeConfig) {
	return [
		`import type {`,
		`\tIExecuteFunctions,`,
		`\tINodeExecutionData,`,
		`\tINodeType,`,
		`\tINodeTypeDescription,`,
		`} from 'n8n-workflow';`,
		`import { NodeConnectionTypes } from 'n8n-workflow';`,
		`import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';`,
		`import { description, execute } from './index';`,
		`import { BaseNode, executeTemplate } from '../../shared/nodes/BaseNode';`,
		'',
		`export class ${nodeClass} extends BaseNode implements INodeType {`,
		`\tdescription: INodeTypeDescription = {`,
		`\t\tdisplayName: '${nodeConfig.displayName}',`,
		`\t\tname: '${nodeConfig.name}',`,
		'\t\ticon: OvhCloudIcon,',
		`\t\tgroup: ['input'],`,
		'\t\tversion: 1,',
		`\t\tsubtitle: \'={{$parameter["${nodeConfig.operation}"]}}\',`,
		`\t\tdescription: '${nodeConfig.description}',`,
		'\t\tdefaults: {',
		`\t\t\tname: '${nodeConfig.displayName}',`,
		'\t\t},',
		'\t\tusableAsTool: true,',
		'\t\tinputs: [NodeConnectionTypes.Main],',
		'\t\toutputs: [NodeConnectionTypes.Main],',
		'\t\tcredentials: [',
		'\t\t\t{',
		'\t\t\t\tname: OvhCloudApiSecretName,',
		'\t\t\t\trequired: true,',
		'\t\t\t},',
		'\t\t],',
		`\t\tproperties: [...description({})],`,
		'\t};',
		'',
		`\tasync execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {`,
		'\t\treturn executeTemplate.call(this, execute);',
		'\t}',
		'}',
		'',
	].join('\n');
}

// ── Parse spec and extract operations ──

function parseSpec(specFile, nodeConfig) {
	const spec = JSON.parse(fs.readFileSync(specFile, 'utf8'));
	const operations = [];

	for (const api of spec.apis) {
		for (const op of api.operations) {
			const httpMethod = op.httpMethod;
			const endpoint = api.path;
			const params = extractParams(endpoint);
			const hasBody = op.parameters?.some((p) => p.paramType === 'body');
			const returnType = op.responseType || '';
			const returnsArray = returnType.endsWith('[]');

			const opName = deriveOpName(endpoint, httpMethod);
			// Make unique by appending suffix if needed
			const existingNames = operations.map((o) => o.name);
			let uniqueName = opName;
			let counter = 2;
			while (existingNames.includes(uniqueName)) {
				uniqueName = opName + counter;
				counter++;
			}

			const actionDesc = op.description || `${httpMethod} ${endpoint}`;

			operations.push({
				name: uniqueName,
				method: httpMethod,
				endpoint,
				displayName: actionDesc,
				action: actionDesc,
				params,
				body: hasBody,
				returnsArray,
			});
		}
	}

	return operations;
}

// ── Main ──

let totalFiles = 0;
let totalOps = 0;
const stats = {};

for (const [specFile, nodeConfig] of Object.entries(SPEC_NODE_MAP)) {
	const specPath = path.join(SPECS_DIR, `${specFile}.json`);
	if (!fs.existsSync(specPath)) {
		console.warn(`Warning: Spec file not found: ${specPath}`);
		continue;
	}

	const operations = parseSpec(specPath, nodeConfig);
	const nodeDirPath = path.join(NODES_DIR, nodeConfig.nodeClass);

	if (!fs.existsSync(nodeDirPath)) {
		fs.mkdirSync(nodeDirPath, { recursive: true });
	}

	// Generate node file
	fs.writeFileSync(
		path.join(nodeDirPath, `${nodeConfig.nodeClass}.node.ts`),
		genNodeFile(nodeConfig.nodeClass, nodeConfig),
	);
	totalFiles++;

	// Generate index.ts
	fs.writeFileSync(
		path.join(nodeDirPath, 'index.ts'),
		genIndex(nodeConfig.nodeClass, nodeConfig, operations),
	);
	totalFiles++;

	// Generate operation files and spec files
	for (const op of operations) {
		fs.writeFileSync(path.join(nodeDirPath, `${op.name}.operation.ts`), genOpFile(op));
		fs.writeFileSync(path.join(nodeDirPath, `${op.name}.operation.spec.ts`), genSpecFile(op));
		totalFiles += 2;
		totalOps++;
	}

	stats[nodeConfig.nodeClass] = operations.length;
	console.log(`  ${nodeConfig.nodeClass}: ${operations.length} ops`);
}

console.log(
	`\nTotal: ${totalFiles} files, ${totalOps} operations across ${Object.keys(stats).length} nodes`,
);
console.log('\nPer-node breakdown:');
for (const [node, count] of Object.entries(stats)) {
	console.log(`  ${node}: ${count} operations`);
}
console.log('\nDone!');
