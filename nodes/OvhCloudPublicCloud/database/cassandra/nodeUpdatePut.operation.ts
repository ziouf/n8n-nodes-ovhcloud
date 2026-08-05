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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const nodeId = this.getNodeParameter('nodeId', 0) as string;
	const flavorName = (this.getNodeParameter('flavorName', 0, '') || '') as string;

	const body: IDataObject = {};
	if (flavorName) body.flavorName = flavorName;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/node/${nodeId}`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
