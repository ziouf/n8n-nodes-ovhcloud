import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
	];
}

/**
 * List available services
 *
 * HTTP method: GET
 * Endpoint: /email/exchange
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange")) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
