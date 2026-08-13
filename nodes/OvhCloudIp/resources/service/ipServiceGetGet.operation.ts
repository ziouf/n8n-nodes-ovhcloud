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
	];
}

/**
 * Executes the Get IP Service operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/service/{serviceName}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet(`/ip/service/${encodeURIComponent(serviceName)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
