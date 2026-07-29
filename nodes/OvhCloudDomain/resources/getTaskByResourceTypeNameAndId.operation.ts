import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Get a task by resource type, service name and ID. */
export function description() {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	try {
		const data: unknown[] = (await client.httpGet('/domain/getTaskById')) as unknown[];
		return this.helpers.returnJsonArray(data as INodeExecutionData[]) as INodeExecutionData[];
	} catch (error) {
		throw new Error(`Failed to get task by resource type and name: ${error}`);
	}
}
