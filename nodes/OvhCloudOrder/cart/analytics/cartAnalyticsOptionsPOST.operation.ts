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
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			default: '' ,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			description: 'Duration selected for the purchase of the product',
			displayOptions,
		},
		{
			displayName: 'Item ID',
			name: 'itemId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Cart item to be linked',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the option offer',
			displayOptions,
		},
		{
			displayName: 'Pricing Mode',
			name: 'pricingMode',
			type: 'string',
			default: '',
			required: true,
			description: 'Pricing mode selected for the purchase of the product',
			displayOptions,
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 0,
			required: true,
			description: 'Quantity of product desired',
			displayOptions,
		}
	];
}

/**
 * Executes the Add Analytics option to cart operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/analytics/options
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const duration = this.getNodeParameter('duration', _itemIndex ?? 0, '') as string;
	const itemId = this.getNodeParameter('itemId', _itemIndex ?? 0, 0) as number;
	const planCode = this.getNodeParameter('planCode', _itemIndex ?? 0, '') as string;
	const pricingMode = this.getNodeParameter('pricingMode', _itemIndex ?? 0, '') as string;
	const quantity = this.getNodeParameter('quantity', _itemIndex ?? 0, 0) as number;
	const body: IDataObject = {
		duration: duration,
		itemId: itemId,
		planCode: planCode,
		pricingMode: pricingMode,
		quantity: quantity
    };
	const data = (await client.httpPost(`/order/cart/${cartId}/analytics/options`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
