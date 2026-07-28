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
			displayName: 'Alert Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'The type of alert to create (e.g. billing, usage)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create AI Alerting operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/alerting
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;

	const alertType = (this.getNodeParameter('type', 0) || '') as string;

	if (!alertType) {
		throw new Error('Alert type is required to create an alert');
	}

	const body = {
		type: alertType,
	} as import('n8n-workflow').IDataObject;

	(await client.httpPost(
		`/publicCloud/project/${projectId}/alerting`,
		body as IDataObject,
	)) as void;

	return this.helpers.returnJsonArray([]);
}
