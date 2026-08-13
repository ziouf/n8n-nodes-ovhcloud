import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

/** Lists all Email Pro services. */
export function description() {
	return [];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	try {
		const data: unknown[] = (await client.httpGet('/email/pro')) as unknown[];
		return this.helpers.returnJsonArray(data as INodeExecutionData[]) as INodeExecutionData[];
	} catch (error) {
		throw new Error(`Failed to list Email Pro services: ${error}`);
	}
}
