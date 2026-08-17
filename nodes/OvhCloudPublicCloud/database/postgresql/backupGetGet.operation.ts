import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
		IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The PostgreSQL cluster ID',
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
 * Executes the Get PostgreSQL Backup operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/backup/{backupId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const backupId = this.getNodeParameter('backupId', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/backup/${backupId}`)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
