import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
		displayName: 'Cluster ID',
		name: 'clusterId',
		type: 'string',
		default: '',
		required: true,
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
		displayName: 'Deletion Protection',
		name: 'deletionProtection',
		type: 'boolean',
		default: false,
		
		description: 'Whether deletion protection is enabled',
		displayOptions,
	},
{
		displayName: 'Enable Prometheus',
		name: 'enablePrometheus',
		type: 'boolean',
		default: false,
		
		displayOptions,
	},
	];
}

/**
 * Executes the Update Clickhouse Cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0, '') || '') as string;
	const version = (this.getNodeParameter('version', _itemIndex ?? 0, '') || '') as string;
	const plan = (this.getNodeParameter('plan', _itemIndex ?? 0, '') || '') as string;
	const backups = (this.getNodeParameter('backups', _itemIndex ?? 0, '') || '') as string;
	const maintenanceTime = (this.getNodeParameter('maintenanceTime', _itemIndex ?? 0, '') || '') as string;
	const ipRestrictions = (this.getNodeParameter('ipRestrictions', _itemIndex ?? 0, '') || '') as string;
	const deletionProtection = this.getNodeParameter('deletionProtection', _itemIndex ?? 0, false) as boolean;
	const enablePrometheus = this.getNodeParameter('enablePrometheus', _itemIndex ?? 0, false) as boolean;

	const body: IDataObject = {};
	if (description) body.description = description;
	if (version) body.version = version;
	if (plan) body.plan = plan;
	if (backups) body.backups = JSON.parse(backups);
	if (maintenanceTime) body.maintenanceTime = maintenanceTime;
	if (ipRestrictions) body.ipRestrictions = JSON.parse(ipRestrictions);
	body.deletionProtection = deletionProtection;
	body.enablePrometheus = enablePrometheus;

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

