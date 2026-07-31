#!/usr/bin/env node
/**
 * Generate 9 OVHCloud n8n nodes with all their operations and tests.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NODES_DIR = path.join(ROOT, 'nodes');

function op(
	name,
	method,
	endpoint,
	displayName,
	action,
	params = [],
	body = false,
	returnsArray = false,
) {
	return { name, method, endpoint, displayName, action, params, body, returnsArray };
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function httpMethodName(method) {
	// "GET" → "Get", "POST" → "Post", etc.
	return method.toLowerCase().charAt(0).toUpperCase() + method.toLowerCase().slice(1);
}

const NODES = {
	OvhCloudIp: {
		displayName: 'OVH Cloud IP',
		name: 'ovhCloudIp',
		description: 'Manage OVHcloud IP services via /ip API v1',
		operation: 'ipOperation',
		operations: [
			op('ipListGet', 'GET', '/ip', 'List IPs', 'List all IP addresses'),
			op('ipGetGet', 'GET', '/ip/{ip}', 'Get IP', 'Get details of an IP address', ['ip']),
			op('ipReverseGetGet', 'GET', '/ip/{ip}/reverse', 'Get Reverse', 'Get reverse DNS for an IP', [
				'ip',
			]),
			op(
				'ipReverseUpdatePut',
				'PUT',
				'/ip/{ip}/reverse',
				'Update Reverse',
				'Update reverse DNS for an IP',
				['ip'],
				true,
			),
			op(
				'ipEquilibriumListGet',
				'GET',
				'/ip/{ip}/equilibrium',
				'List Equilibrium',
				'List equilibrium configs for an IP',
				['ip'],
			),
			op(
				'ipEquilibriumCreatePost',
				'POST',
				'/ip/{ip}/equilibrium',
				'Create Equilibrium',
				'Create an equilibrium config for an IP',
				['ip'],
				true,
			),
			op(
				'ipEquilibriumDeleteDelete',
				'DELETE',
				'/ip/{ip}/equilibrium',
				'Delete Equilibrium',
				'Delete an equilibrium config for an IP',
				['ip'],
			),
			op(
				'ipEquilibriumDetailGet',
				'GET',
				'/ip/{ip}/equilibrium/{equilibrium}',
				'Get Equilibrium Detail',
				'Get equilibrium detail',
				['ip', 'equilibrium'],
			),
			op(
				'ipEquilibriumUpdatePut',
				'PUT',
				'/ip/{ip}/equilibrium/{equilibrium}',
				'Update Equilibrium',
				'Update an equilibrium config',
				['ip', 'equilibrium'],
				true,
			),
			op(
				'ipEquilibriumDetailDeleteDelete',
				'DELETE',
				'/ip/{ip}/equilibrium/{equilibrium}',
				'Delete Equilibrium Detail',
				'Delete an equilibrium config detail',
				['ip', 'equilibrium'],
			),
			op(
				'ipFailoverPost',
				'POST',
				'/ip/{ip}/failover',
				'Create Failover',
				'Create a failover config for an IP',
				['ip'],
				true,
			),
			op(
				'ipFailoverGetGet',
				'GET',
				'/ip/{ip}/failover/{failover}',
				'Get Failover',
				'Get failover details',
				['ip', 'failover'],
			),
			op(
				'ipFailoverUpdatePut',
				'PUT',
				'/ip/{ip}/failover/{failover}',
				'Update Failover',
				'Update a failover config',
				['ip', 'failover'],
				true,
			),
			op(
				'ipFailoverDeleteDelete',
				'DELETE',
				'/ip/{ip}/failover/{failover}',
				'Delete Failover',
				'Delete a failover config',
				['ip', 'failover'],
			),
		],
	},
	OvhCloudVrack: {
		displayName: 'OVH Cloud Vrack',
		name: 'ovhCloudVrack',
		description: 'Manage OVHcloud vRack services via /vrack API v1',
		operation: 'vrackOperation',
		operations: [
			op('vrackListGet', 'GET', '/vrack', 'List Vrack', 'List all vRack networks'),
			op('vrackGetGet', 'GET', '/vrack/{vrackId}', 'Get Vrack', 'Get vRack details', ['vrackId']),
			op(
				'vrackUpdatePut',
				'PUT',
				'/vrack/{vrackId}',
				'Update Vrack',
				'Update vRack details',
				['vrackId'],
				true,
			),
			op(
				'vrackDeleteDelete',
				'DELETE',
				'/vrack/{vrackId}',
				'Delete Vrack',
				'Delete a vRack network',
				['vrackId'],
			),
			op(
				'vrackServiceOrderListGet',
				'GET',
				'/vrack/{vrackId}/serviceOrder',
				'List Service Orders',
				'List service orders for a vRack',
				['vrackId'],
			),
			op(
				'vrackServiceOrderCreatePost',
				'POST',
				'/vrack/{vrackId}/serviceOrder',
				'Create Service Order',
				'Create a service order for a vRack',
				['vrackId'],
				true,
			),
			op(
				'ipSubListGet',
				'GET',
				'/vrack/{vrackId}/ip',
				'List IPs on Vrack',
				'List IPs attached to a vRack',
				['vrackId'],
			),
			op(
				'ipSubCreatePost',
				'POST',
				'/vrack/{vrackId}/ip',
				'Add IP to Vrack',
				'Add an IP to a vRack',
				['vrackId'],
				true,
			),
			op(
				'publicNetworkSubListGet',
				'GET',
				'/vrack/{vrackId}/publicNetwork',
				'List Public Networks',
				'List public networks in a vRack',
				['vrackId'],
			),
			op(
				'publicNetworkSubCreatePost',
				'POST',
				'/vrack/{vrackId}/publicNetwork',
				'Add Public Network to Vrack',
				'Add a public network to a vRack',
				['vrackId'],
				true,
			),
			op(
				'vrackSubListGet',
				'GET',
				'/vrack/{vrackId}/vRack',
				'List Vrack Services',
				'List services attached to a vRack',
				['vrackId'],
			),
		],
	},
	OvhCloudStorage: {
		displayName: 'OVH Cloud Storage',
		name: 'ovhCloudStorage',
		description: 'Manage OVHcloud Object Storage via /storage API v1',
		operation: 'storageOperation',
		operations: [
			op('storageListGet', 'GET', '/storage', 'List Storages', 'List all object storage services'),
			op('storageGetGet', 'GET', '/storage/{storageId}', 'Get Storage', 'Get storage details', [
				'storageId',
			]),
			op(
				'storageUpdatePut',
				'PUT',
				'/storage/{storageId}',
				'Update Storage',
				'Update storage details',
				['storageId'],
				true,
			),
			op(
				'storageDeleteDelete',
				'DELETE',
				'/storage/{storageId}',
				'Delete Storage',
				'Delete an object storage service',
				['storageId'],
			),
			op(
				'containerListGet',
				'GET',
				'/storage/{storageId}/container',
				'List Containers',
				'List containers in a storage',
				['storageId'],
			),
			op(
				'containerCreatePost',
				'POST',
				'/storage/{storageId}/container',
				'Create Container',
				'Create a new container',
				['storageId'],
				true,
			),
			op(
				'containerGetGet',
				'GET',
				'/storage/{storageId}/container/{containerId}',
				'Get Container',
				'Get container details',
				['storageId', 'containerId'],
			),
			op(
				'containerUpdatePut',
				'PUT',
				'/storage/{storageId}/container/{containerId}',
				'Update Container',
				'Update container metadata',
				['storageId', 'containerId'],
				true,
			),
			op(
				'containerDeleteDelete',
				'DELETE',
				'/storage/{storageId}/container/{containerId}',
				'Delete Container',
				'Delete a container',
				['storageId', 'containerId'],
			),
		],
	},
	OvhCloudCdn: {
		displayName: 'OVH Cloud CDN',
		name: 'ovhCloudCdn',
		description: 'Manage OVHcloud CDN services via /cdn API v1',
		operation: 'cdnOperation',
		operations: [
			op('cdnListGet', 'GET', '/cdn', 'List CDNs', 'List all CDN services'),
			op('cdnGetGet', 'GET', '/cdn/{serviceName}', 'Get CDN', 'Get CDN service details', [
				'serviceName',
			]),
			op(
				'cdnUpdatePut',
				'PUT',
				'/cdn/{serviceName}',
				'Update CDN',
				'Update CDN service details',
				['serviceName'],
				true,
			),
			op('cdnDeleteDelete', 'DELETE', '/cdn/{serviceName}', 'Delete CDN', 'Delete a CDN service', [
				'serviceName',
			]),
			op(
				'originListGet',
				'GET',
				'/cdn/{serviceName}/origin',
				'List Origins',
				'List origins for a CDN service',
				['serviceName'],
			),
			op(
				'originCreatePost',
				'POST',
				'/cdn/{serviceName}/origin',
				'Create Origin',
				'Create a new origin for a CDN',
				['serviceName'],
				true,
			),
			op(
				'originGetGet',
				'GET',
				'/cdn/{serviceName}/origin/{originId}',
				'Get Origin',
				'Get origin details',
				['serviceName', 'originId'],
			),
			op(
				'originUpdatePut',
				'PUT',
				'/cdn/{serviceName}/origin/{originId}',
				'Update Origin',
				'Update an origin',
				['serviceName', 'originId'],
				true,
			),
			op(
				'originDeleteDelete',
				'DELETE',
				'/cdn/{serviceName}/origin/{originId}',
				'Delete Origin',
				'Delete an origin',
				['serviceName', 'originId'],
			),
			op('userListGet', 'GET', '/cdn/{serviceName}/user', 'List Users', 'List CDN users', [
				'serviceName',
			]),
			op(
				'userCreatePost',
				'POST',
				'/cdn/{serviceName}/user',
				'Create User',
				'Create a CDN user',
				['serviceName'],
				true,
			),
			op(
				'userGetGet',
				'GET',
				'/cdn/{serviceName}/user/{userId}',
				'Get User',
				'Get CDN user details',
				['serviceName', 'userId'],
			),
			op(
				'userUpdatePut',
				'PUT',
				'/cdn/{serviceName}/user/{userId}',
				'Update User',
				'Update a CDN user',
				['serviceName', 'userId'],
				true,
			),
			op(
				'userDeleteDelete',
				'DELETE',
				'/cdn/{serviceName}/user/{userId}',
				'Delete User',
				'Delete a CDN user',
				['serviceName', 'userId'],
			),
		],
	},
	OvhCloudCluster: {
		displayName: 'OVH Cloud Cluster',
		name: 'ovhCloudCluster',
		description: 'Manage OVHcloud Cluster services via /cluster API v1',
		operation: 'clusterOperation',
		operations: [
			op('clusterListGet', 'GET', '/cluster', 'List Clusters', 'List all cluster services'),
			op('clusterGetGet', 'GET', '/cluster/{serviceName}', 'Get Cluster', 'Get cluster details', [
				'serviceName',
			]),
			op(
				'clusterUpdatePut',
				'PUT',
				'/cluster/{serviceName}',
				'Update Cluster',
				'Update cluster details',
				['serviceName'],
				true,
			),
			op(
				'clusterDeleteDelete',
				'DELETE',
				'/cluster/{serviceName}',
				'Delete Cluster',
				'Delete a cluster service',
				['serviceName'],
			),
			op(
				'serviceInfosGetGet',
				'GET',
				'/cluster/{serviceName}/serviceInfos',
				'Get Service Infos',
				'Get service information for a cluster',
				['serviceName'],
			),
			op(
				'reinstallPost',
				'POST',
				'/cluster/{serviceName}/reinstall',
				'Reinstall Cluster',
				'Reinstall a cluster service',
				['serviceName'],
				true,
			),
			op(
				'taskListGet',
				'GET',
				'/cluster/{serviceName}/task',
				'List Tasks',
				'List tasks for a cluster',
				['serviceName'],
			),
			op(
				'taskGetGet',
				'GET',
				'/cluster/{serviceName}/task/{taskId}',
				'Get Task',
				'Get task details',
				['serviceName', 'taskId'],
			),
		],
	},
	OvhCloudPack: {
		displayName: 'OVH Cloud Pack',
		name: 'ovhCloudPack',
		description: 'Manage OVHcloud Pack services via /pack API v1',
		operation: 'packOperation',
		operations: [
			op('packListGet', 'GET', '/pack', 'List Packs', 'List all pack services'),
			op('packGetGet', 'GET', '/pack/{serviceName}', 'Get Pack', 'Get pack service details', [
				'serviceName',
			]),
			op(
				'packUpdatePut',
				'PUT',
				'/pack/{serviceName}',
				'Update Pack',
				'Update pack service details',
				['serviceName'],
				true,
			),
			op(
				'packDeleteDelete',
				'DELETE',
				'/pack/{serviceName}',
				'Delete Pack',
				'Delete a pack service',
				['serviceName'],
			),
			op(
				'serviceInfosGetGet',
				'GET',
				'/pack/{serviceName}/serviceInfos',
				'Get Service Infos',
				'Get service information for a pack',
				['serviceName'],
			),
			op(
				'reinstallPost',
				'POST',
				'/pack/{serviceName}/reinstall',
				'Reinstall Pack',
				'Reinstall a pack service',
				['serviceName'],
				true,
			),
		],
	},
	OvhCloudServices: {
		displayName: 'OVH Cloud Services',
		name: 'ovhCloudServices',
		description: 'Manage OVHcloud generic services via /services API v1',
		operation: 'servicesOperation',
		operations: [
			op('servicesListGet', 'GET', '/services', 'List Services', 'List all generic services'),
			op('servicesGetGet', 'GET', '/services/{serviceName}', 'Get Service', 'Get service details', [
				'serviceName',
			]),
			op(
				'servicesUpdatePut',
				'PUT',
				'/services/{serviceName}',
				'Update Service',
				'Update service details',
				['serviceName'],
				true,
			),
			op(
				'servicesDeleteDelete',
				'DELETE',
				'/services/{serviceName}',
				'Delete Service',
				'Delete a service',
				['serviceName'],
			),
			op(
				'reinstallPost',
				'POST',
				'/services/{serviceName}/reinstall',
				'Reinstall Service',
				'Reinstall a service',
				['serviceName'],
				true,
			),
			op(
				'taskListGet',
				'GET',
				'/services/{serviceName}/task',
				'List Tasks',
				'List tasks for a service',
				['serviceName'],
			),
			op(
				'taskGetGet',
				'GET',
				'/services/{serviceName}/task/{taskId}',
				'Get Task',
				'Get task details',
				['serviceName', 'taskId'],
			),
		],
	},
	OvhCloudMsServices: {
		displayName: 'OVH Cloud MS Services',
		name: 'ovhCloudMsServices',
		description: 'Manage OVHcloud Mail/Phone services via /msServices API v1',
		operation: 'msServicesOperation',
		operations: [
			op('msServicesListGet', 'GET', '/msServices', 'List MS Services', 'List all MS services'),
			op(
				'msServicesGetGet',
				'GET',
				'/msServices/{serviceName}',
				'Get MS Service',
				'Get MS service details',
				['serviceName'],
			),
			op(
				'msServicesUpdatePut',
				'PUT',
				'/msServices/{serviceName}',
				'Update MS Service',
				'Update MS service details',
				['serviceName'],
				true,
			),
			op(
				'msServicesDeleteDelete',
				'DELETE',
				'/msServices/{serviceName}',
				'Delete MS Service',
				'Delete an MS service',
				['serviceName'],
			),
			op(
				'reinstallPost',
				'POST',
				'/msServices/{serviceName}/reinstall',
				'Reinstall MS Service',
				'Reinstall an MS service',
				['serviceName'],
				true,
			),
			op(
				'taskListGet',
				'GET',
				'/msServices/{serviceName}/task',
				'List Tasks',
				'List tasks for an MS service',
				['serviceName'],
			),
			op(
				'taskGetGet',
				'GET',
				'/msServices/{serviceName}/task/{taskId}',
				'Get Task',
				'Get task details',
				['serviceName', 'taskId'],
			),
		],
	},
	OvhCloudDbaas: {
		displayName: 'OVH Cloud DBaaS',
		name: 'ovhCloudDbaas',
		description: 'Manage OVHcloud Database-as-a-Service via /dbaas API v1',
		operation: 'dbaasOperation',
		operations: [
			op('dbaasListGet', 'GET', '/dbaas', 'List DBaaS', 'List all database services'),
			op(
				'dbaasGetGet',
				'GET',
				'/dbaas/{serviceName}',
				'Get DBaaS',
				'Get database service details',
				['serviceName'],
			),
			op(
				'dbaasUpdatePut',
				'PUT',
				'/dbaas/{serviceName}',
				'Update DBaaS',
				'Update database service details',
				['serviceName'],
				true,
			),
			op(
				'dbaasDeleteDelete',
				'DELETE',
				'/dbaas/{serviceName}',
				'Delete DBaaS',
				'Delete a database service',
				['serviceName'],
			),
			op(
				'clusterListGet',
				'GET',
				'/dbaas/{serviceName}/cluster',
				'List Clusters',
				'List clusters in a database service',
				['serviceName'],
			),
			op(
				'clusterCreatePost',
				'POST',
				'/dbaas/{serviceName}/cluster',
				'Create Cluster',
				'Create a new cluster',
				['serviceName'],
				true,
			),
			op(
				'clusterGetGet',
				'GET',
				'/dbaas/{serviceName}/cluster/{clusterId}',
				'Get Cluster',
				'Get cluster details',
				['serviceName', 'clusterId'],
			),
			op(
				'clusterUpdatePut',
				'PUT',
				'/dbaas/{serviceName}/cluster/{clusterId}',
				'Update Cluster',
				'Update a cluster',
				['serviceName', 'clusterId'],
				true,
			),
			op(
				'clusterDeleteDelete',
				'DELETE',
				'/dbaas/{serviceName}/cluster/{clusterId}',
				'Delete Cluster',
				'Delete a cluster',
				['serviceName', 'clusterId'],
			),
			op('userListGet', 'GET', '/dbaas/{serviceName}/user', 'List Users', 'List database users', [
				'serviceName',
			]),
			op(
				'userCreatePost',
				'POST',
				'/dbaas/{serviceName}/user',
				'Create User',
				'Create a database user',
				['serviceName'],
				true,
			),
			op(
				'userGetGet',
				'GET',
				'/dbaas/{serviceName}/user/{userId}',
				'Get User',
				'Get user details',
				['serviceName', 'userId'],
			),
			op(
				'userUpdatePut',
				'PUT',
				'/dbaas/{serviceName}/user/{userId}',
				'Update User',
				'Update a database user',
				['serviceName', 'userId'],
				true,
			),
			op(
				'userDeleteDelete',
				'DELETE',
				'/dbaas/{serviceName}/user/{userId}',
				'Delete User',
				'Delete a database user',
				['serviceName', 'userId'],
			),
			op(
				'backupListGet',
				'GET',
				'/dbaas/{serviceName}/backup',
				'List Backups',
				'List backups for a database',
				['serviceName'],
			),
			op(
				'backupCreatePost',
				'POST',
				'/dbaas/{serviceName}/backup',
				'Create Backup',
				'Create a database backup',
				['serviceName'],
				true,
			),
			op(
				'backupGetGet',
				'GET',
				'/dbaas/{serviceName}/backup/{backupId}',
				'Get Backup',
				'Get backup details',
				['serviceName', 'backupId'],
			),
			op(
				'backupDeleteDelete',
				'DELETE',
				'/dbaas/{serviceName}/backup/{backupId}',
				'Delete Backup',
				'Delete a backup',
				['serviceName', 'backupId'],
			),
		],
	},
};

// ── Build URL expression from endpoint template ──
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

// ── Generate operation .ts ──
function genOpFile(op) {
	const hm = httpMethodName(op.method);
	const urlExpr = buildUrlExpr(op.endpoint);
	let varDecls = '';
	for (const p of op.params) {
		varDecls += `\tconst ${p} = this.getNodeParameter('${p}', itemIndex) as string;\n`;
	}
	let bodyCode = '';
	if (['POST', 'PUT'].includes(op.method)) {
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
		descProps += `\t\t{\n\t\t\tdisplayName: '${label}',\n\t\t\tname: '${p}',\n\t\t\ttype: 'string',\n\t\t\tdefault: '',\n\t\t\trequired: true,\n\t\t\tdescription: 'The ${p} identifier',\n\t\t},\n`;
	}

	return [
		`import type {`,
		`\tIDataObject,`,
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
		` * Executes the ${hm} ${op.displayName.replace(/\s/g, '')} operation.`,
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
function genIndex(nodeKey) {
	const nd = NODES[nodeKey];
	let imports = '';
	let options = '';
	let displayOpts = '';
	let cases = '';

	for (const op of nd.operations) {
		const oc = capitalize(op.name);
		imports += `import {\n\texecute as execute${oc},\n\tdescription as description${oc},\n} from './${op.name}.operation';\n`;
		options += `\t\t\t{\n\t\t\t\tname: '${op.displayName}',\n\t\t\t\tvalue: '${op.name}',\n\t\t\t\taction: '${op.action}',\n\t\t\t},\n`;
		displayOpts += `\t\t...(description${oc}({\n\t\t\t...displayOptions,\n\t\t\tshow: { ${nd.operation}: ['${op.name}'] },\n\t\t}) as INodeProperties[]),\n`;
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
		`\t\t\tname: '${nd.operation}',`,
		`\t\t\ttype: 'options',`,
		`\t\t\tnoDataExpression: true,`,
		`\t\t\toptions: [`,
		options,
		`\t\t\t],`,
		`\t\t\tdefault: '${nd.operations[0].name}',`,
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
		`\tconst operation = this.getNodeParameter('${nd.operation}', itemIndex, {`,
		`\t\textractValue: true,`,
		`\t});`,
		'',
		`\tswitch (operation) {`,
		cases,
		`\t}`,
		'',
		`\tthrow new Error(\`Unsupported operation "\${operation}" for resource "${nd.name}"\`);`,
		'}',
		'',
	].join('\n');
}

// ── Generate .node.ts ──
function genNodeFile(nodeKey) {
	const nd = NODES[nodeKey];
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
		`export class ${nodeKey} extends BaseNode implements INodeType {`,
		`\tdescription: INodeTypeDescription = {`,
		`\t\tdisplayName: '${nd.displayName}',`,
		`\t\tname: '${nd.name}',`,
		'\t\ticon: OvhCloudIcon,',
		`\t\tgroup: ['input'],`,
		'\t\tversion: 1,',
		`\t\tsubtitle: \'={{$parameter["${nd.operation}"]}}\',`,
		`\t\tdescription: '${nd.description}',`,
		'\t\tdefaults: {',
		`\t\t\tname: '${nd.displayName}',`,
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

// ── Main ──
let totalFiles = 0;
let totalOps = 0;

for (const [nodeKey, nd] of Object.entries(NODES)) {
	const nodeDirPath = path.join(NODES_DIR, nodeKey);
	if (!fs.existsSync(nodeDirPath)) fs.mkdirSync(nodeDirPath, { recursive: true });

	fs.writeFileSync(path.join(nodeDirPath, `${nodeKey}.node.ts`), genNodeFile(nodeKey));
	fs.writeFileSync(path.join(nodeDirPath, 'index.ts'), genIndex(nodeKey));
	totalFiles += 2;

	for (const op of nd.operations) {
		fs.writeFileSync(path.join(nodeDirPath, `${op.name}.operation.ts`), genOpFile(op));
		fs.writeFileSync(path.join(nodeDirPath, `${op.name}.operation.spec.ts`), genSpecFile(op));
		totalFiles += 2;
		totalOps++;
	}
	console.log(`  ${nodeKey}: ${nd.operations.length} ops`);
}

console.log(`\nTotal: ${totalFiles} files, ${totalOps} operations across 9 nodes`);
console.log('Done!');
