import type {
	IExecuteFunctions,
	IDisplayOptions,
	IDataObject,
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
			displayName: 'Extended',
			name: 'extended',
			type: 'boolean',
			default: false,
			description: 'Whether to request extended metrics',
			displayOptions,
		},
	];
}

/**
 * Executes the Get PostgreSQL Metrics operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/metric
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;

	const extended = this.getNodeParameter('extended', 0, false) as boolean | undefined;
	const qs: IDataObject = {
		extended: extended,
	};
	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/postgresql/${clusterId}/metric`,
		qs,
	)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
