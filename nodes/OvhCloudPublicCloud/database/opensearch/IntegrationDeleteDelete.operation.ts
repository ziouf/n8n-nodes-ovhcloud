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
			name: "clusterId",
			type: "string",
			required: true,
			default: "",
			description: "The clusterId parameter",
			displayOptions,
		},
		{
			displayName: 'Integration ID',
			name: "integrationId",
			type: "string",
			required: true,
			default: "",
			description: "The integrationId parameter",
			displayOptions,
		}
	];
}

/**
 * Executes the Delete Integration operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/opensearch/{clusterId}/integration/{integrationId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0, '') as string;
	const integrationId = this.getNodeParameter('integrationId', 0, '') as string;
	const data = (await client.httpDelete(`/cloud/project/${serviceName}/database/opensearch/${clusterId}/integration/${integrationId}`)) as IDataObject;

	if (Array.isArray(data)) {
		return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
	}
	return this.helpers.returnJsonArray([data]);
}
