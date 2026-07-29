import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(
	displayOptions: IDisplayOptions = {} as IDisplayOptions,
): INodeProperties[] {
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
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: '',
			description: 'Filter jobs by status (optional)',
			options: [
				{ name: 'All', value: '' },
				{ name: 'COMPLETED', value: 'COMPLETED' },
				{ name: 'FAILED', value: 'FAILED' },
				{ name: 'PENDING', value: 'PENDING' },
				{ name: 'RUNNING', value: 'RUNNING' },
			],
			displayOptions,
		},
	];
}

/**
 * Executes the List AI Jobs operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/ai/job
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const status = (this.getNodeParameter('status', 0) || '') as string;

	const qs: Record<string, string> = {};
	if (status) {
		qs.status = status;
	}

	const data = (await client.httpGet(`/publicCloud/project/${projectId}/ai/job`, qs)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
