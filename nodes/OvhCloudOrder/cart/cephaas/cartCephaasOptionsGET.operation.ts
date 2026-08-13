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
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '' ,
			required: true,
			description: 'Identifier of the Ceph as a Service you want to consult options',
			displayOptions,
		}
	];
}

/**
 * Executes the Get Cephaas options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/cephaas/options
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const planCode = this.getNodeParameter('planCode', itemIndex ?? 0, '') as string;
	const qs: IDataObject = {
		planCode: planCode
	};
	const data = (await client.httpGet(`/order/cart/${cartId}/cephaas/options`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
