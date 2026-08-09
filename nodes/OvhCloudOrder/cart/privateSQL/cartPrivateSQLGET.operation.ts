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
 * Executes the List Private S Q L offers operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/privateSQL
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/privateSQL`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
