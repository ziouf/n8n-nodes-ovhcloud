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
			required: true,
			description: 'Identifier of the vRack you want to consult options',
			displayOptions,
		}
	];
}

/**
 * Executes the Get Vrack options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/vrack/options
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const planCode = this.getNodeParameter('planCode', 0, '') as string;
	const qs: IDataObject = {
		planCode: planCode
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/vrack/options`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
