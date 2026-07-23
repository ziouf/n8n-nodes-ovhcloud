import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.paginateResources<IDataObject>(
		'/domain',
		'/domain/{id}',
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
