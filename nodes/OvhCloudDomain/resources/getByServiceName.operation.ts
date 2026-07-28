import type { IExecuteFunctions, INodeExecutionData } from \"n8n-workflow\";

/** getByServiceName operation. */
export function description() { return []; }

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	try {
		const data: any[] = await client.httpGet(\"/domain/getByServiceName\");
		return this.helpers.returnJsonArray(data as INodeExecutionData[]) as INodeExecutionData[];
	} catch (error) { throw new Error(`Failed to execute ${f}: ${error}`); }
}
