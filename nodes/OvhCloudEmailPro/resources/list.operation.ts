import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";

/** Lists all Email Pro services. */
export function description() { return []; }

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	try {
		const data: any[] = await client.httpGet('/email/pro');
		return this.helpers.returnJsonArray(data as INodeExecutionData[]) as INodeExecutionData[];
	} catch (error) { throw new Error(`Failed to list Email Pro services: ${error}`); }
}
