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
			description: 'The Cassandra cluster ID',
			displayOptions,
		},
		{
			displayName: 'Node ID',
			name: 'nodeId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Cassandra Node operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const nodeId = this.getNodeParameter('nodeId', _itemIndex ?? 0) as string;

	await client.httpDelete(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/node/${nodeId}`,
	);

	return this.helpers.returnJsonArray([]);
}
