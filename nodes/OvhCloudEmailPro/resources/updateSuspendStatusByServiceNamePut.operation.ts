import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";

/** Updates the suspend status of a specific Email Pro service. */
export function description() { return [{ displayName: 'Service Name', name: 'serviceName' as const, type: 'resourceLocator' as const }]; }

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	try {
		const svcParam = this.getNodeParameter('serviceName', 0, '') as string;
		url = `/email/pro/${encodeURIComponent(svcParam)}`;
		const body: any = await client.httpPut(url, {});
		return this.helpers.returnJsonArray([body as INodeExecutionData]) as INodeExecutionData[];
	} catch (error) { throw new Error(`Failed to update Email Pro service: ${error}`); }
}
