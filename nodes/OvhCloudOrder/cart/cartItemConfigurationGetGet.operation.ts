import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Item ID',
			name: 'itemId',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Configuration ID',
			name: 'configurationId',
			type: 'string',
			required: true,
			default: '',
			description: 'The configuration ID to get',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cart Item Configuration operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const itemId = this.getNodeParameter('itemId', 0) as string;
	const configurationId = this.getNodeParameter('configurationId', 0) as string;

	const data = (await client.httpGet(
		`/order/cart/${cartId}/item/${itemId}/configuration/${configurationId}`,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
