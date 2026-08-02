import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(): string[] {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/support/tickets')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
