import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Vrack ID',
			name: 'vrackId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			description: 'The order',
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const vrackId = this.getNodeParameter('vrackId', _itemIndex) as string;
	const orderId = this.getNodeParameter('orderId', _itemIndex) as string;
	const data = (await client.httpGet(
		'/vrack/' + vrackId + '/serviceOrder/' + orderId,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
