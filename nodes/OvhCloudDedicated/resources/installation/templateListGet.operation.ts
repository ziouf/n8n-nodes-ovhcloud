import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	// No additional parameters are needed for this operation.
	void displayOptions;
	return [];
}

/**
 * Executes the List Installation Template operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
