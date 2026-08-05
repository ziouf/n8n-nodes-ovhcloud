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
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Connection Pool ID',
			name: 'connectionPoolId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Database name',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'number',
			default: 10,
			required: true,
			description: 'Connection pool size',
			displayOptions,
		},
	];
}

/**
 * Executes the Update PostgreSQL Connection Pool operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/connectionPool/{connectionPoolId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const connectionPoolId = this.getNodeParameter('connectionPoolId', 0) as string;
	const name = (this.getNodeParameter('name', 0, '') || '') as string;
	const size = (this.getNodeParameter('size', 0, '') || '') as string;
	const body: IDataObject = {};
	if (name) body.name = name;
	if (size) body.size = size;
	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/connectionPool/${connectionPoolId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
