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
			description: 'The MySQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Maintenance ID',
			name: 'maintenanceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Apply MySQL Maintenance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}/maintenance/{maintenanceId}/apply
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const maintenanceId = this.getNodeParameter('maintenanceId', _itemIndex ?? 0) as string;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/maintenance/${maintenanceId}/apply`,
		{},
	)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data]);
}
