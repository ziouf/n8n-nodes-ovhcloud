import type { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function execute(this: IExecuteFunctions): Promise<any[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/supportTicket/health/score/get')) as IDataObject;
	return [data];
}
