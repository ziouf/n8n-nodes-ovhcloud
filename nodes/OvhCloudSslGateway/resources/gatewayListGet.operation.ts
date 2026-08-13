import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * List SSL Gateway services
 *
 * HTTP method: GET
 * Endpoint: /sslGateway
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/sslGateway')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
