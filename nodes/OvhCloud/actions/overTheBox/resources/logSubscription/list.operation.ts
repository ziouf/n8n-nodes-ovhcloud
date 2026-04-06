import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/** List subscription IDs for a cluster. HTTP: GET /overTheBox/{serviceName}/log/subscription */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions }];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}/log/subscription`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
