import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * Expire the current credential (disconnect).
 *
 * HTTP method: POST
 * Endpoint: /auth/logout
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	await client.httpPost('/auth/logout', {});
	return this.helpers.returnJsonArray([{ success: true }]);
}
