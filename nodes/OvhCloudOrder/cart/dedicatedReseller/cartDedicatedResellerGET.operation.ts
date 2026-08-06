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
			displayName: 'Family',
			name: 'family',
			type: 'string',
			default: '' ,
			description: 'Filter the value of family property (=)',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '' ,
			description: 'Filter the value of planCode property (=)',
			displayOptions,
		}
	];
}

/**
 * Executes the List Dedicated Reseller offers operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/dedicatedReseller
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const family = this.getNodeParameter('family', 0, '') as string;
	const planCode = this.getNodeParameter('planCode', 0, '') as string;
	const qs: IDataObject = {
		family: family,
		planCode: planCode
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/dedicatedReseller`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
