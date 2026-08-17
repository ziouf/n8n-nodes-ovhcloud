import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const name = this.getNodeParameter('name', _itemIndex ?? 0, '') as string;
const connectorId = this.getNodeParameter('connectorId', _itemIndex ?? 0, '') as string;
const configuration = this.getNodeParameter('configuration', _itemIndex ?? 0, '') as string;
const data = (await client.httpPost(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/connector`, { name: name || undefined, connectorId: connectorId || undefined, configuration: configuration ? JSON.parse(configuration) : undefined })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
