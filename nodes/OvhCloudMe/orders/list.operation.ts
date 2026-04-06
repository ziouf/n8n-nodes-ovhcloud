import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List Orders operation for My Account resource
 *
 * Retrieves all orders for the authenticated account with optional date filtering:
 * - HTTP GET request to `/me/order` endpoint
 * - Supports date range filter (date.from and date.to parameters)
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing order details
 * @throws NodeApiError if credentials are invalid or API fails
 *
 * @example
 * // Input configuration:
 * // dateFrom = '2026-03-01T00:00:00Z'
 * // dateTo = '2026-03-31T23:59:59Z'
 * // Output: Array of order details with status, items, date, total, etc.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Date From',
			name: 'dateFrom',
			type: 'dateTime',
			default: null,
			description:
				'Filter from this date (inclusive). Format: ISO 8601 (e.g., `2026-03-01T00:00:00Z`).',
			displayOptions,
		},
		{
			displayName: 'Date To',
			name: 'dateTo',
			type: 'dateTime',
			default: null,
			description:
				'Filter up to this date (inclusive). Format: ISO 8601 (e.g., `2026-03-31T23:59:59Z`).',
			displayOptions,
		},
	];
}

/**
 * Executes the List Orders operation.
 *
 * Retrieves all orders for the authenticated account, optionally filtered by date range.
 *
 * HTTP method: GET
 * Endpoint: /me/order
 * Query parameters:
 * - date.from: Start date (ISO 8601 format)
 * - date.to: End date (ISO 8601 format)
 *
 * First retrieves list of order IDs, then fetches details for each order.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing order details
 *
 * @example
 * // Input configuration:
 * // dateFrom = '2026-03-01T00:00:00Z'
 * // dateTo = '2026-03-31T23:59:59Z'
 * // Output: Array of order details with status, items, date, total, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	let qs: { 'date.from'?: string; 'date.to'?: string } = {};
	const dateFrom = this.getNodeParameter('dateFrom', 0, { extractValue: true }) as string;
	if (dateFrom?.length > 0) {
		qs = Object.assign(qs, { 'date.from': dateFrom });
	}
	const dateTo = this.getNodeParameter('dateTo', 0, { extractValue: true }) as string;
	if (dateTo?.length > 0) {
		qs = Object.assign(qs, { 'date.to': dateTo });
	}

	// Get list of order IDs
	const orderIds = (await client.httpGet(`/me/order`, qs)) as string[];

	// Fetch details for each order
	const orders = [];
	for (const orderId of orderIds) {
		const order = await executeOrderGet.call(this, orderId);
		orders.push(order);
	}
	return orders;
}

/**
 * @brief Helper function to fetch details for a single order.
 *
 * Retrieves detailed information for a specific order by its ID:
 * - HTTP GET request to `/me/order/{orderId}` endpoint
 * - Returns complete order details with items, totals, and status
 *
 * @param this - n8n IExecuteFunctions context
 * @param orderId - The order identifier (e.g., `order-123456`)
 * @returns Execution result containing the order details
 */
async function executeOrderGet(
	this: IExecuteFunctions,
	orderId: string,
): Promise<INodeExecutionData> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/me/order/${orderId}`)) as IDataObject;
	return { json: data };
}
