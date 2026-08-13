import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * Get credit balance and remaining pages available for all Freefax line accounts.
 *
 * HTTP method: GET
 * Endpoint: /freefax/credits
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/freefax/credits')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
