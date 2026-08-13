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
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the offer',
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
 * Executes the Create Microsoft operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/microsoft
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const duration = this.getNodeParameter('duration', itemIndex ?? 0, '') as string;
	const planCode = this.getNodeParameter('planCode', itemIndex ?? 0, '') as string;
	const pricingMode = this.getNodeParameter('pricingMode', itemIndex ?? 0, '') as string;
	const quantity = this.getNodeParameter('quantity', itemIndex ?? 0, 0) as number;
	const body: IDataObject = {
		duration: duration,
		planCode: planCode,
		pricingMode: pricingMode,
		quantity: quantity
    };
	const data = (await client.httpPost(`/order/cart/${cartId}/microsoft`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
