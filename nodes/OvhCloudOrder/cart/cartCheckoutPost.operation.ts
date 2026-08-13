import type {
	IDataObject,
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
			description: 'The cart ID to checkout (execute)',
			displayOptions,
		},
		{
			displayName: 'Auto Pay With Preferred Payment Method',
			name: 'autoPayWithPreferredPaymentMethod',
			type: 'boolean',
			default: false,
			description: 'Whether the order will be automatically paid with preferred payment method',
			displayOptions,
		},
		{
			displayName: 'Waive Retracting Period',
			name: 'waiveRetractationPeriod',
			type: 'boolean',
			default: false,
			description: 'Whether the order will be processed with waiving retractation period',
			displayOptions,
		},
	];
}

/**
 * Executes the Checkout Cart (execute) operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/checkout
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const autoPayWithPreferredPaymentMethod = this.getNodeParameter(
		'autoPayWithPreferredPaymentMethod',
		itemIndex ?? 0,
		false,
	) as boolean;
	const waiveRetractationPeriod = this.getNodeParameter(
		'waiveRetractationPeriod',
		itemIndex ?? 0,
		false,
	) as boolean;

	const body: IDataObject = {
		autoPayWithPreferredPaymentMethod,
		waiveRetractationPeriod,
	};

	const data = (await client.httpPost(
		`/order/cart/${cartId}/checkout`,
		body,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
