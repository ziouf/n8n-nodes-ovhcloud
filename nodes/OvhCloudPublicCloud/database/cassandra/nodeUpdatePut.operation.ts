import { projectIdLocator } from '../../../../shared/nodes/locators';
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
		{
			displayName: 'Flavor Name',
			name: 'flavorName',
			type: 'string',
			default: '',
			description: 'The flavor name for the node',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cassandra Node operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const nodeId = this.getNodeParameter('nodeId', _itemIndex ?? 0) as string;
	const flavorName = (this.getNodeParameter('flavorName', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (flavorName) body.flavorName = flavorName;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/node/${nodeId}`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
