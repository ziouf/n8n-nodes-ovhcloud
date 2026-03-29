import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

/**
 * @brief Get Order operation for My Account resource
 *
 * Retrieves detailed information for a specific order:
 * - HTTP GET request to `/me/order/{orderId}` endpoint
 * - Requires order ID parameter
 * - Returns complete order details with status, items, and dates
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing order details
 * @throws NodeApiError if the order is not found or credentials are invalid
 *
 * @example
 * // Input configuration:
 * // orderId = 'order-123456'
 * // Output: Order details with status, items, date, total, etc.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			description: 'The unique identifier of the order to retrieve (e.g., `order-123456`)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Order operation.
 *
 * Retrieves the details of a specific order by its ID.
 *
 * HTTP method: GET
 * Endpoint: /me/order/{orderId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing order details
 * @throws NodeApiError if the order is not found
 *
 * @example
 * // Input configuration:
 * // orderId = 'order-123456'
 * // Output: Order details with status, items, date, total, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', 0, { extractValue: true }) as string;
	const data = (await client.httpGet(`/me/order/${orderId}`)) as IDataObject;
	return [{ json: data }];
}
