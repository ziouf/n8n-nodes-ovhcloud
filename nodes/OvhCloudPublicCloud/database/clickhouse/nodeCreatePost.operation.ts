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
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		description: 'The database service name',
		displayOptions,
	},
	];
}

/**
 * Executes the Create Clickhouse Node operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/clickhouse/serviceName/node
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;

	const body = {} as IDataObject;
	const data = (await client.httpPost(`/publicCloud/project/${projectId}/clickhouse/${serviceName}/node`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}