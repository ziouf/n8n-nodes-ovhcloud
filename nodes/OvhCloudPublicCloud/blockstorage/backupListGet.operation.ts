import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
	];
}

/**
 * Executes the List Backups operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/backup
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const iamTags = this.getNodeParameter('iamTags', 0) as string | undefined;

	let url = `/publicCloud/project/${projectId}/blockStorage/backup`;

	if (iamTags && iamTags !== '') {
		url += `?iamTags=${encodeURIComponent(iamTags)}`;
	}

	const data = (await client.httpGet(url)) as unknown[];

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
