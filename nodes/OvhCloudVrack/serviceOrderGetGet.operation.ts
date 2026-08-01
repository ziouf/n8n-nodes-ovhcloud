import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Vrack ID',
			name: 'vrackId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vrackId identifier',
			displayOptions,
		},
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			description: 'The order identifier',
			displayOptions,
		},
	];
}

/**
 * Get vRack service order details
 *
 * HTTP method: GET
 * Endpoint: /vrack/{vrackId}/serviceOrder/{orderId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const vrackId = this.getNodeParameter('vrackId', itemIndex) as string;
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(
		'/vrack/' + vrackId + '/serviceOrder/' + orderId,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
