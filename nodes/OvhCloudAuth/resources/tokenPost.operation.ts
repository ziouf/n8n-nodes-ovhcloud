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
 * Generate a unique one-time token (chatbot auth).
 *
 * HTTP method: POST
 * Endpoint: /auth/token
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpPost('/auth/token', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
