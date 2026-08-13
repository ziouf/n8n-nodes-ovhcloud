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
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		description: 'The internal name of your IP services',
		displayOptions,
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Custom description on your ip',
		displayOptions,
	},
	];
}

/**
 * Executes the Put Update IP Service operation.
 *
 * HTTP method: PUT
 * Endpoint: /ip/service/{serviceName}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const description = (this.getNodeParameter('description', _itemIndex) as string) || '';

	const body: IDataObject = {};
	if (description) body.description = description;

	const client = getClient(this);
	const data = (await client.httpPut(`/ip/service/${encodeURIComponent(serviceName)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
