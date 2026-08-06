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
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Payload',
			name: 'payload',
			type: 'string',
			default: '',
			description: 'The payload parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Certificate operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/keymanager/certificate
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('name', 0)) {
		body.name = this.getNodeParameter('name', 0) as string;
	}
	if (this.getNodeParameter('payload', 0)) {
		body.payload = this.getNodeParameter('payload', 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/keymanager/certificate`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
