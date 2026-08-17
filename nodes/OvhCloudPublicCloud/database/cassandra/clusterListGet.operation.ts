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
	];
}

/**
 * Executes the List Cassandra Clusters operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/cassandra
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/cassandra`,
	)) as unknown[];

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
