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
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'ClusterId ID',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Name parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Connectorid',
			name: 'connectorId',
			type: 'string',
			default: '',
			description: 'ConnectorId parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Configuration',
			name: 'configuration',
			type: 'string',
			typeOptions: {
				rows: 3,
			},
			default: '',
			description: 'JSON configuration',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Create a connector.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
const client = new ApiClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', 0) as string;
const name = this.getNodeParameter('name', 0, '') as string;
const connectorId = this.getNodeParameter('connectorId', 0, '') as string;
const configuration = this.getNodeParameter('configuration', 0, '') as string;
const data = (await client.httpPost(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/connector`, { name: name || undefined, connectorId: connectorId || undefined, configuration: configuration ? JSON.parse(configuration) : undefined })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
