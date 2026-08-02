import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * Expire the current credential (disconnect).
 *
 * HTTP method: POST
 * Endpoint: /auth/logout
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	await client.httpPost('/auth/logout', {});
	return this.helpers.returnJsonArray([{ success: true }]);
}
