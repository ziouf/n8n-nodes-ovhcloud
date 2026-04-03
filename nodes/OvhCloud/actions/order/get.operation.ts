import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Order operation for Order resource
 *
 * Retrieves detailed information for a specific order:
 * - HTTP GET request to `/order/{orderId}` endpoint
 * - Order ID parameter is required
 * - Returns order details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Order operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the order',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Order operation.
 *
 * Retrieves detailed information for a specific order.
 *
 * HTTP method: GET
 * Endpoint: /order/{orderId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing order details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', 0) as string;
	const data = (await client.httpGet(`/order/${orderId}`)) as IDataObject;
	return [{ json: data }];
}
