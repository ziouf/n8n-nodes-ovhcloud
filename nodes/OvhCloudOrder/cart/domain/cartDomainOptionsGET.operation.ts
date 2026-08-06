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
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '' ,
			required: true,
			description: 'Domain name linked to the option',
			displayOptions,
		}
	];
}

/**
 * Executes the Get Domain options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/domain/options
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const domain = this.getNodeParameter('domain', 0, '') as string;
	const qs: IDataObject = {
		domain: domain
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/domain/options`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
