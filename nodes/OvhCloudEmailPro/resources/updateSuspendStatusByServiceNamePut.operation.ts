import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

/** Updates suspend status of an Email Pro service. */
export function description() {
	return [];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	try {
		const svcParam = this.getNodeParameter('serviceName', _itemIndex ?? 0, '') as string;
		const url = `/email/pro/${encodeURIComponent(svcParam)}/suspendStatus`;
		const body: unknown = await client.httpPut(url, {});
		return this.helpers.returnJsonArray([body as INodeExecutionData]) as INodeExecutionData[];
	} catch (error) {
		throw new Error(`Failed to update Email Pro service suspend status: ${error}`);
	}
}
