import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief Get Bill operation for My Account resource
 *
 * Retrieves detailed information for a specific bill:
 * - HTTP GET request to `/me/bill/{billId}` endpoint
 * - Requires bill ID parameter
 * - Returns complete bill details with lines, totals, and status
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing bill details
 * @throws NodeApiError if the bill is not found or credentials are invalid
 *
 * @example
 * // Input configuration:
 * // billId = 'bill-123456'
 * // Output: Bill details with totalWithTax, status, lines, creationDate, etc.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			description: 'The unique identifier of the bill to retrieve (e.g., `bill-123456`)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Bill operation.
 *
 * Retrieves the details of a specific bill by its ID from the OVH API.
 *
 * HTTP method: GET
 * Endpoint: /me/bill/{billId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing bill details
 * @throws NodeApiError if the bill is not found or credentials are invalid
 *
 * @example
 * // Input configuration:
 * // billId = 'bill-123456'
 * // Output: Bill details with totalWithTax, status, lines, creationDate, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', 0, { extractValue: true }) as string;
	const data = (await client.httpGet(`/me/bill/${billId}`)) as IDataObject;
	return [{ json: data }];
}
