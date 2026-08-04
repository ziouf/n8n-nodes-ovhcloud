import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions) {
	void _displayOptions;
	return [];
}

/**
 * Executes the List Cluster operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/cluster')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
