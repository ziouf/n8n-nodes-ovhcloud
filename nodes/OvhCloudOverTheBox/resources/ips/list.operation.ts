import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** List IPs assigned to an OverTheBox service. HTTP: GET /overTheBox/{serviceName}/ips */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions }];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}/ips`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
