import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** Get a log kind. HTTP: GET /overTheBox/{serviceName}/log/kind/{name} */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Log Kind Name', name: 'name', type: 'string', default: '', required: true, description: 'The name of the log kind', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}/log/kind/${name}`)) as IDataObject;
	return [{ json: data }];
}
