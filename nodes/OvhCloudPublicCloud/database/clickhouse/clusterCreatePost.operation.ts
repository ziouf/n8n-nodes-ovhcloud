import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
{
		displayName: 'Public Cloud Project',
		name: 'publicCloudProjectId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: { searchListMethod: 'getPublicCloudProjects' },
			},
			{
				displayName: 'By ID',
				name: 'name',
				type: 'string',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			},
		],
		displayOptions,
	},
{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		
		description: 'Description of the cluster',
		displayOptions,
	},
{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		default: '',
		
		description: 'Version of the engine',
		displayOptions,
	},
{
		displayName: 'Plan',
		name: 'plan',
		type: 'string',
		default: '',
		
		description: 'Plan of the cluster',
		displayOptions,
	},
{
		displayName: 'Nodes Pattern',
		name: 'nodesPattern',
		type: 'json',
		default: '',
		
		description: 'Pattern definition of the nodes',
		displayOptions,
	},
{
		displayName: 'Nodes List',
		name: 'nodesList',
		type: 'json',
		default: '',
		
		description: 'List of nodes in the cluster',
		displayOptions,
	},
{
		displayName: 'Network ID',
		name: 'networkId',
		type: 'string',
		default: '',
		
		description: 'Private network ID',
		displayOptions,
	},
{
		displayName: 'Subnet ID',
		name: 'subnetId',
		type: 'string',
		default: '',
		
		description: 'Private subnet ID',
		displayOptions,
	},
{
		displayName: 'Backups',
		name: 'backups',
		type: 'json',
		default: '',
		
		description: 'Backup configuration',
		displayOptions,
	},
{
		displayName: 'Maintenance Time',
		name: 'maintenanceTime',
		type: 'string',
		default: '',
		
		description: 'Maintenance time window',
		displayOptions,
	},
{
		displayName: 'Ip Restrictions',
		name: 'ipRestrictions',
		type: 'json',
		default: '',
		
		displayOptions,
	},
{
		displayName: 'Fork From',
		name: 'forkFrom',
		type: 'json',
		default: '',
		
		description: 'Backup to fork from',
		displayOptions,
	},
	];
}

/**
 * Executes the Create Clickhouse Cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0, '') || '') as string;
	const version = (this.getNodeParameter('version', _itemIndex ?? 0, '') || '') as string;
	const plan = (this.getNodeParameter('plan', _itemIndex ?? 0, '') || '') as string;
	const nodesPattern = (this.getNodeParameter('nodesPattern', _itemIndex ?? 0, '') || '') as string;
	const nodesList = (this.getNodeParameter('nodesList', _itemIndex ?? 0, '') || '') as string;
	const networkId = (this.getNodeParameter('networkId', _itemIndex ?? 0, '') || '') as string;
	const subnetId = (this.getNodeParameter('subnetId', _itemIndex ?? 0, '') || '') as string;
	const backups = (this.getNodeParameter('backups', _itemIndex ?? 0, '') || '') as string;
	const maintenanceTime = (this.getNodeParameter('maintenanceTime', _itemIndex ?? 0, '') || '') as string;
	const ipRestrictions = (this.getNodeParameter('ipRestrictions', _itemIndex ?? 0, '') || '') as string;
	const forkFrom = (this.getNodeParameter('forkFrom', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (description) body.description = description;
	if (version) body.version = version;
	if (plan) body.plan = plan;
	if (nodesPattern) body.nodesPattern = JSON.parse(nodesPattern);
	if (nodesList) body.nodesList = JSON.parse(nodesList);
	if (networkId) body.networkId = networkId;
	if (subnetId) body.subnetId = subnetId;
	if (backups) body.backups = JSON.parse(backups);
	if (maintenanceTime) body.maintenanceTime = maintenanceTime;
	if (ipRestrictions) body.ipRestrictions = JSON.parse(ipRestrictions);
	if (forkFrom) body.forkFrom = JSON.parse(forkFrom);

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

