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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The database service name',
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
			displayOptions,
		},
		{
			displayName: 'Plan',
			name: 'plan',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'flavor',
			name: 'flavor',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Maintenance Time',
			name: 'maintenanceTime',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Backup Time',
			name: 'backupTime',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Deletion Protection',
			name: 'deletionProtection',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Update MongoDB Cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0, '') as string;
	const plan = this.getNodeParameter('plan', _itemIndex ?? 0, '') as string;
	const version = this.getNodeParameter('version', _itemIndex ?? 0, '') as string;
	const flavor = this.getNodeParameter('flavor', _itemIndex ?? 0, '') as string;
	const maintenanceTime = this.getNodeParameter('maintenanceTime', _itemIndex ?? 0, '') as string;
	const backupTime = this.getNodeParameter('backupTime', _itemIndex ?? 0, '') as string;
	const deletionProtection = this.getNodeParameter('deletionProtection', _itemIndex ?? 0, '') as string;

	const body: IDataObject = {
    description: description || undefined,
    plan: plan || undefined,
    version: version || undefined,
    flavor: flavor || undefined,
    maintenanceTime: maintenanceTime || undefined,
    backupTime: backupTime || undefined,
    deletionProtection: deletionProtection || undefined
  };
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/mongodb/${clusterId}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
