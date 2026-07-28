import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions = {} as IDisplayOptions): INodeProperties[] {
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
			displayName: 'Region',
			name: 'region',
			type: 'options',
			options: [
				{ name: 'EU', value: 'eu' },
				{ name: 'US East (N. Virginia)', value: 'us-east-1' },
				{ name: 'US West (Oregon)', value: 'us-west-2' },
			],
			default: 'eu',
			required: true,
			description: 'The region for the data store alias',
			displayOptions,
		},
	];
}

/**
 * Executes the Create AI Data Store operation.
 *
 * HTTP method: POST
 * Endpoint uses region param: /cloud/project/{serviceName}/ai/data/region/{region}/alias
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const region = (this.getNodeParameter('region', 0) || 'eu') as string;

	(await client.httpPost(`/cloud/project/${projectId}/ai/data/region/${region}/alias`)) as void;

	return this.helpers.returnJsonArray([]);
}
