import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

/**
 * @brief Get Debt Account operation for My Account resource
 *
 * Retrieves information about the authenticated user's debt account:
 * - HTTP GET request to `/me/debtAccount` endpoint
 * - No additional parameters required
 * - Returns debt account details including outstanding balances
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing debt account details
 * @throws NodeApiError if credentials are invalid or API fails
 *
 * @example
 * // Input: No parameters required
 * // Output: Debt account details with totalDebt, debtAccountType, lastUpdate, etc.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Debt Account operation.
 *
 * Retrieves information about the authenticated user's debt account,
 * which contains any outstanding balances or debts.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing debt account details
 *
 * @example
 * ```typescript
 * // Output includes: totalDebt, debtAccountType, lastUpdate, etc.
 * ```
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/me/debtAccount`)) as IDataObject;
	return [{ json: data }];
}
