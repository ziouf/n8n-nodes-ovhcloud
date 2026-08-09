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
 * Executes the List Dedicated Labs offers operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/dedicatedLabs
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const planCode = this.getNodeParameter('planCode', _itemIndex ?? 0, '') as string;
	const qs: IDataObject = {
		planCode: planCode
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/dedicatedLabs`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
