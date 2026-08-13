import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

 
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
	const data = (await getClient(this).httpGet('/sms')) as string[];
	return this.helpers.returnJsonArray(data.map((s: string) => ({ serviceName: s })));
}
