import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

 
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List SMS operation.
 *
 * HTTP method: GET
 * Endpoint: /sms
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const data = (await new ApiClient(this).httpGet('/sms')) as string[];
	return this.helpers.returnJsonArray(data.map((s: string) => ({ serviceName: s })));
}
