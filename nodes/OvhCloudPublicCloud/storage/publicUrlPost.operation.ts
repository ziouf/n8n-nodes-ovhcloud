import type {
	IDataObject,
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
		{
			displayName: 'Container ID',
			name: 'containerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The container name/ID',
			displayOptions,
		},
		{
			displayName: 'Object Name',
			name: 'objectName',
			type: 'string',
			default: '',
			required: true,
			description: 'The object name for the temporary URL',
			displayOptions,
		},
		{
			displayName: 'Expiration Date',
			name: 'expirationDate',
			type: 'dateTime',
			default: '',
			required: true,
			description: 'Temporary URL expiration date',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Public URL operation on a SWIFT container.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/storage/{containerId}/publicUrl
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const containerId = this.getNodeParameter('containerId', 0) as string;

	const body: IDataObject = {};
	body['objectName'] = this.getNodeParameter('objectName', 0) as string;
	body['expirationDate'] = this.getNodeParameter('expirationDate', 0) as string;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/storage/${containerId}/publicUrl`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
