import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;

	const data = (await client.httpGet(`/dedicated/server/${serviceName}/ip`)) as IDataObject[];

	return data.map((item) => ({ json: item }));
}
