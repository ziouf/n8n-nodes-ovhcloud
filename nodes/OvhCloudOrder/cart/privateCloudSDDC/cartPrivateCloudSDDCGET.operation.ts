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
 * Executes the List Private Cloud S D D C offers operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/privateCloudSDDC
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/privateCloudSDDC`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
