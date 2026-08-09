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
		}
	];
}

/**
 * Executes the List Netapp offers operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/netapp
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/netapp`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
