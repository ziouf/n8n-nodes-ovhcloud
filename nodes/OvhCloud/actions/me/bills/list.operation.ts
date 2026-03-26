import type { INodeExecutionData, IDataObject, IDisplayOptions } from 'n8n-workflow';
import { IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

/**
 * @brief List Bills operation for My Account resource
 *
 * Retrieves all bills for the authenticated OVH account with optional filtering:
 * - HTTP GET request to `/me/bill` endpoint
 * - Supports category filter (autorenew, purchase, purchase-cloud, etc.)
 * - Supports order ID filter
 * - Supports date range filter (date.from and date.to parameters)
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing bill details
 * @throws NodeApiError if credentials are invalid or API fails
 *
 * @example
 * // Input configuration:
 * // billCategory = 'purchase-web'
 * // dateFrom = '2026-03-01T00:00:00Z'
 * // dateTo = '2026-03-31T23:59:59Z'
 * // billOrderId = 123456
 * // Output: Array of bill details with totalWithTax, status, lines, creationDate, etc.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Category',
			name: 'billCategory',
			description: 'Filter bills by category',
			type: 'options',
			options: [
				{ name: 'All', value: '' },
				{ name: 'Autorenew', value: 'autorenew' },
				{ name: 'Earlyrenewal', value: 'earlyrenewal' },
				{ name: 'Purchase', value: 'purchase' },
				{ name: 'Purchase Cloud', value: 'purchase-cloud' },
				{ name: 'Purchase Servers', value: 'purchase-servers' },
				{ name: 'Purchase Telecom', value: 'purchase-telecom' },
				{ name: 'Purchase Web', value: 'purchase-web' },
			],
			default: '',
			displayOptions,
		},
		{
			displayName: 'Order ID',
			name: 'billOrderId',
			type: 'number',
			default: 0,
			description: 'Filter bills related to this order ID',
			displayOptions,
		},
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
 * Executes the List Bills operation.
 *
 * Retrieves all bills for the authenticated account, optionally filtered by:
 * - Category (autorenew, purchase, purchase-cloud, etc.)
 * - Order ID
 * - Date range
 *
 * HTTP method: GET
 * Endpoint: /me/bill
 * Query parameters:
 * - category: Bill category filter
 * - date.from: Start date (ISO 8601 format)
 * - date.to: End date (ISO 8601 format)
 * - orderId: Order ID filter
 *
 * First retrieves list of bill IDs, then fetches details for each bill.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing bill details
 * @throws NodeApiError if credentials are invalid or API fails
 *
 * @example
 * // Input configuration:
 * // billCategory = 'purchase-web'
 * // dateFrom = '2026-03-01T00:00:00Z'
 * // dateTo = '2026-03-31T23:59:59Z'
 * // billOrderId = 123456
 * // Output: Array of bill details with totalWithTax, status, lines, creationDate, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	// Build query parameters from filter inputs
	let qs: { category?: string; 'date.from'?: string; 'date.to'?: string; orderId?: number } = {};
	const category = this.getNodeParameter('billCategory', 0, { extractValue: true }) as string;
	if (category?.length > 0) {
		qs = Object.assign(qs, { category });
	}
	const dateFrom = this.getNodeParameter('dateFrom', 0, { extractValue: true }) as string;
	if (dateFrom?.length > 0) {
		qs = Object.assign(qs, { 'date.from': dateFrom });
	}
	const dateTo = this.getNodeParameter('dateTo', 0, { extractValue: true }) as string;
	if (dateTo?.length > 0) {
		qs = Object.assign(qs, { 'date.to': dateTo });
	}
	const orderId = this.getNodeParameter('billOrderId', 0, { extractValue: true }) as number;
	if (orderId > 0) {
		qs = Object.assign(qs, { orderId });
	}

	// Get list of bill IDs
	const billIDs = (await client.httpGet(`/me/bill`, qs)) as string[];
	const bills: INodeExecutionData[] = [];

	// Fetch details for each bill
	for (const billID of billIDs) {
		const bill = await executeBillGet.call(this, billID);
		bills.push(bill);
	}

	return bills;
}

/**
 * @brief Helper function to fetch details for a single bill.
 *
 * Retrieves detailed information for a specific bill by its ID:
 * - HTTP GET request to `/me/bill/{billID}` endpoint
 * - Returns complete bill details with lines, totals, and status
 *
 * @param this - n8n IExecuteFunctions context
 * @param billID - The bill identifier (e.g., `bill-123456`)
 * @returns Execution result containing the bill details
 */
async function executeBillGet(
	this: IExecuteFunctions,
	billID: string,
): Promise<INodeExecutionData> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/me/bill/${billID}`)) as IDataObject;
	return { json: data };
}
