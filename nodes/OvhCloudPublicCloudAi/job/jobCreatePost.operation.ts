import type {
	IDataObject,
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
			displayName: 'Job Name',
			name: 'appName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the AI job to create',
			displayOptions,
		},
		{
			displayName: 'Model ID',
			name: 'modelId',
			type: 'string',
			default: 'openai-gpt-4o-mini',
			description: 'The model identifier for the AI job (e.g. openai-gpt-4o-mini)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create AI Job operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/ai/job
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const appName = (this.getNodeParameter('appName', 0) || '') as string;
	const modelId = (this.getNodeParameter('modelId', 0) || 'openai-gpt-4o-mini') as string;

	const body = {
		name: appName,
		modelId,
	} as import('n8n-workflow').IDataObject;

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/ai/job`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
