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
			description: 'The Cassandra cluster ID',
			displayOptions,
		},
		{
			displayName: 'Destination Service ID',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The destination service ID for the integration',
			displayOptions,
		},
		{
			displayName: 'Source Service ID',
			name: 'sourceServiceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The source service ID for the integration',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cassandra Integration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/integration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const destinationServiceId = (this.getNodeParameter('destinationServiceId', _itemIndex ?? 0, '') ||
		'') as string;
	const sourceServiceId = (this.getNodeParameter('sourceServiceId', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (destinationServiceId) body.destinationServiceId = destinationServiceId;
	if (sourceServiceId) body.sourceServiceId = sourceServiceId;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/integration`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
