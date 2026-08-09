import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(): never[] {
	return []; // no parameters needed for list operation
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ssl')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
