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
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Type parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Sourceserviceid',
			name: 'sourceServiceId',
			type: 'string',
			default: '',
			description: 'SourceServiceId parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Destinationserviceid',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			description: 'DestinationServiceId parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Parameters',
			name: 'parameters',
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
 * Executes the Create an integration.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/integration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = new ApiClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const type = this.getNodeParameter('type', _itemIndex ?? 0, '') as string;
const sourceServiceId = this.getNodeParameter('sourceServiceId', _itemIndex ?? 0, '') as string;
const destinationServiceId = this.getNodeParameter('destinationServiceId', _itemIndex ?? 0, '') as string;
const parameters = this.getNodeParameter('parameters', _itemIndex ?? 0, '') as string;
const data = (await client.httpPost(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/integration`, { type: type || undefined, sourceServiceId: sourceServiceId || undefined, destinationServiceId: destinationServiceId || undefined, parameters: parameters ? JSON.parse(parameters) : undefined })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
