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
		displayOptions,
	},
{
		displayName: 'Source Service ID',
		name: 'sourceServiceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
{
		displayName: 'Destination Service ID',
		name: 'destinationServiceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		default: '',
		required: true,
		description: 'Type of the integration',
		displayOptions,
	},
{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'json',
		default: '',
		
		description: 'Parameters for the integration',
		displayOptions,
	},
	];
}

/**
 * Executes the Create Clickhouse Integration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/integration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const sourceServiceId = (this.getNodeParameter('sourceServiceId', _itemIndex ?? 0, '') || '') as string;
	const destinationServiceId = (this.getNodeParameter('destinationServiceId', _itemIndex ?? 0, '') || '') as string;
	const type = (this.getNodeParameter('type', _itemIndex ?? 0, '') || '') as string;
	const parameters = (this.getNodeParameter('parameters', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (sourceServiceId) body.sourceServiceId = sourceServiceId;
	if (destinationServiceId) body.destinationServiceId = destinationServiceId;
	if (type) body.type = type;
	if (parameters) body.parameters = JSON.parse(parameters);

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/integration`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

