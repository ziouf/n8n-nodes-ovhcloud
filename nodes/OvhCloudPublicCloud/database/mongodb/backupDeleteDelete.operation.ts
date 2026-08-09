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
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}
/**
 * Executes the Delete MongoDB Backup operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/backup/{backupId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const backupId = this.getNodeParameter('backupId', _itemIndex ?? 0) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/backup/${backupId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
