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
			required: true,
			description: 'Identifier of a dedicated server offer',
			displayOptions,
		}
	];
}

/**
 * Executes the Get Dedicated Reseller options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/dedicatedReseller/options
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const family = this.getNodeParameter('family', itemIndex ?? 0, '') as string;
	const planCode = this.getNodeParameter('planCode', itemIndex ?? 0, '') as string;
	const qs: IDataObject = {
		family: family,
		planCode: planCode
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/dedicatedReseller/options`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
