import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [];
}

/**
 * Executes the List Installation Template operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installation/template
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/installation/template')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
