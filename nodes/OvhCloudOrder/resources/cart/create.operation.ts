import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a new OVH order cart.
 *
 * HTTP method: POST
 * Endpoint: /order/cart
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cart Details (JSON)',
			name: 'cartDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Cart creation details as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cart operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const rawBody = this.getNodeParameter('cartDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost('/order/cart', { body })) as IDataObject;
	return [{ json: data }];
}
