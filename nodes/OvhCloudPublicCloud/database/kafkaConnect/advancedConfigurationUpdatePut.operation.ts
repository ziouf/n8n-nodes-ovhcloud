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
 * Executes the Update advanced configuration.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/advancedConfiguration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = new ApiClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const configuration = this.getNodeParameter('configuration', _itemIndex ?? 0, '') as string;
const data = (await client.httpPut(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/advancedConfiguration`, { configuration: configuration ? JSON.parse(configuration) : undefined })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
