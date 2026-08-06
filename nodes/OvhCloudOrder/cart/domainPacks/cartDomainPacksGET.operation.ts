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
			description: 'Domain name requested',
			displayOptions,
		}
	];
}

/**
 * Executes the List Domain Packs offers operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/domainPacks
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const domain = this.getNodeParameter('domain', 0, '') as string;
	const qs: IDataObject = {
		domain: domain
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/domainPacks`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
