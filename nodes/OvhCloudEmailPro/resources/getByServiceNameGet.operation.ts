import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Gets a specific Email Pro service by name. */
export function description() {
	return [
		{ displayName: 'Service Name', name: 'serviceName' as const, type: 'resourceLocator' as const },
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	try {
		const svcParam = this.getNodeParameter('serviceName', _itemIndex ?? 0, '') as string;
		const url = `/email/pro/${encodeURIComponent(svcParam)}`;
		const data: unknown[] = (await client.httpGet(url)) as unknown[];
		return this.helpers.returnJsonArray(data as INodeExecutionData[]) as INodeExecutionData[];
	} catch (error) {
		throw new Error(`Failed to get Email Pro service: ${error}`);
	}
}
