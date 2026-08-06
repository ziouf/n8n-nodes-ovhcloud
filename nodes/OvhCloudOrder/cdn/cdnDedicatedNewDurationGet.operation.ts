import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const data = (await client.httpGet('/order/cdn/dedicated/new')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
