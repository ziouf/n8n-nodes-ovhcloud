import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
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
			displayName: 'Instances',
			name: 'instances',
			type: 'string',
			typeOptions: { rows: 6 },
			default: '',
			description: 'JSON array of instance configurations to create in bulk (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Bulk Create Instances operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/instance/bulk
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const instances = (this.getNodeParameter('instances', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = {};
	if (instances !== '') {
		body.instances = JSON.parse(instances);
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/instance/bulk`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
