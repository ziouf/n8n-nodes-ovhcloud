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
		}
	];
}

/**
 * Executes the List Email Domain offers operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/emailDomain
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/emailDomain`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
