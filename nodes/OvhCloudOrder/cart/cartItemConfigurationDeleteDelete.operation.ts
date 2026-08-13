import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			description: 'The configuration ID to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Cart Item Configuration operation.
 *
 * HTTP method: DELETE
 * Endpoint: /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const itemId = this.getNodeParameter('itemId', _itemIndex) as string;
	const configurationId = this.getNodeParameter('configurationId', _itemIndex) as string;

	await client.httpDelete(`/order/cart/${cartId}/item/${itemId}/configuration/${configurationId}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}
