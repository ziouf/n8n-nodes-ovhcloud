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
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The instanceId parameter',
			displayOptions,
		},
		{
			displayName: 'Monitoring',
			name: 'monitoring',
			type: 'string',
			default: '',
			description: 'The monitoring parameter',
			displayOptions,
		},
		{
			displayName: 'Template',
			name: 'template',
			type: 'string',
			default: '',
			description: 'The template parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Reinstall Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/instance/${instanceId}/reinstall
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('monitoring', 0)) {
		body.monitoring = this.getNodeParameter('monitoring', 0) as string;
	}
	if (this.getNodeParameter('template', 0)) {
		body.template = this.getNodeParameter('template', 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/instance/${instanceId}/reinstall`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
