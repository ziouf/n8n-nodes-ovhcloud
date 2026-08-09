import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * Get the current OVH server time as UNIX timestamp.
 *
 * HTTP method: GET
 * Endpoint: /auth/time
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/auth/time')) as number;
	return this.helpers.returnJsonArray([{ time: data }]);
}
