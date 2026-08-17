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
			displayName: 'Flavor Name',
			name: 'flavorName',
			type: 'string',
			default: '',
			required: true,
			description: 'The flavor name for the node',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cassandra Node operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/node
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const flavorName = (this.getNodeParameter('flavorName', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (flavorName) body.flavorName = flavorName;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/node`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
