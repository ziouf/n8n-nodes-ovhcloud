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
		displayName: 'Ip',
		name: 'ip',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP block identifier (e.g. 1.2.3.4/32)',
		displayOptions,
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		default: '',
		required: true,
		description: 'Destination customer ID',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Generate Migration Token operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/migrationToken
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const customerId = (this.getNodeParameter('customerId', _itemIndex) as string) || '';

	const body: IDataObject = {};
	body.customerId = customerId;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/migrationToken`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
