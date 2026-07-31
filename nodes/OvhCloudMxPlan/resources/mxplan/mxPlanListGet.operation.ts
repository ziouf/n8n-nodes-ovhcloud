import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [];
}

/**
 * Executes the List MX Plan operation.
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const data = (await new ApiClient(this).httpGet('/email/mxplan')) as string[];
	return this.helpers.returnJsonArray(data.map((s: string) => ({ serviceName: s })));
}
