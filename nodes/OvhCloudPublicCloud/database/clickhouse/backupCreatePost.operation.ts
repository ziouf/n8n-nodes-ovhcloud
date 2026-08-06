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
		displayOptions,
	},
{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		
		description: 'Comment for the backup',
		displayOptions,
	},
	];
}

/**
 * Executes the Create Clickhouse Backup operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/backup
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', { extractValue: true }) as string;
	const comment = (this.getNodeParameter('comment', 0, '') || '') as string;

	const body: IDataObject = {};
	if (comment) body.comment = comment;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/backup`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

