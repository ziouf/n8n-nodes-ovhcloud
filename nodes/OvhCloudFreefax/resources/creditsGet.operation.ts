import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * Get credit balance and remaining pages available for all Freefax line accounts.
 *
 * HTTP method: GET
 * Endpoint: /freefax/credits
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/freefax/credits')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
