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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The clusterId parameter',
			displayOptions,
		},
		{
			displayName: 'Source Service ID',
			name: 'sourceServiceId',
			type: 'string',
			default: '',
			required: true,
					description: 'SourceServiceId parameter',
			displayOptions,
		},
		{
			displayName: 'Destination Service ID',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			required: true,
					description: 'DestinationServiceId parameter',
			displayOptions,
		},
		{
			displayName: 'Parameters',
			name: 'parameters',
			type: 'string',
			default: '',
			description: 'Parameters parameter',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Type parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new integration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}/integration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/m3db/${clusterId}/integration`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
