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
		displayName: 'Maintenance ID',
		name: 'maintenanceId',
		type: 'string',
		default: '',
		required: true,
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
	];
}

/**
 * Executes the Get Clickhouse Maintenance operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/maintenance/{maintenanceId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const maintenanceId = this.getNodeParameter('maintenanceId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/maintenance/${maintenanceId}`)) as import('n8n-workflow').IDataObject;

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}
	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

