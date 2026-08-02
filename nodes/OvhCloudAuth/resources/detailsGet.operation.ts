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
 * Get details on the current authentication (identity and permissions).
 *
 * HTTP method: GET
 * Endpoint: /auth/details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/auth/details')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
