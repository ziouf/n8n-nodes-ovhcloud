import type { INodeExecutionData, IDataObject, IDisplayOptions } from 'n8n-workflow';
import { IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/me`)) as IDataObject;
	return [{ json: data }];
}
