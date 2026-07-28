import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description() {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/domain/alldom')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
