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
	},
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
		displayName: 'Nodeid',
		name: 'nodeId',
		type: 'string',
		default: '',
		required: true,
		description: 'The nodeId identifier',
		displayOptions,
	}
	];
}

/**
 * Executes the Update Postgresql Node operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/cloud/database/postgresql/serviceName/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const nodeId = this.getNodeParameter('nodeId', 0) as string;
	const body = {} as IDataObject;

	const data = (await client.httpPut(`/publicCloud/project/${projectId}/cloud/database/postgresql/${serviceName}/node/${nodeId}`, body)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data]);
}