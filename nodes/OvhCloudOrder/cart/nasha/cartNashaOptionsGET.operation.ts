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
			description: 'Identifier of the NAS HA you want to consult options',
			displayOptions,
		}
	];
}

/**
 * Executes the Get Nasha options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/nasha/options
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const planCode = this.getNodeParameter('planCode', 0, '') as string;
	const qs: IDataObject = {
		planCode: planCode
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/nasha/options`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
