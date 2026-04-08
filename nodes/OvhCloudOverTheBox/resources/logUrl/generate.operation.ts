import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** Generate a temporary URL to retrieve logs. HTTP: POST /overTheBox/{serviceName}/log/url */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Log URL Details (JSON)', name: 'logUrlDetails', type: 'json', default: '{}', required: true, description: 'Log URL generation details as a JSON object', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const rawBody = this.getNodeParameter('logUrlDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost(`/overTheBox/${serviceName}/log/url`, { body })) as IDataObject;
	return [{ json: data }];
}
