import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";

/** Gets a specific Email Pro service by name. */
export function description() { return [{ displayName: 'Service Name', name: 'serviceName' as const, type: 'resourceLocator' as const }]; }

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	try {
		const svcParam = this.getNodeParameter('serviceName', 0, '') as string;
		url = `/email/pro/${encodeURIComponent(svcParam)}`;
		const data: any[] = await client.httpGet(url);
		return this.helpers.returnJsonArray(data as INodeExecutionData[]) as INodeExecutionData[];
	} catch (error) { throw new Error(`Failed to get Email Pro service: ${error}`); }
}
