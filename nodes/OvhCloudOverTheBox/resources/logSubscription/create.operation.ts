import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** Create a subscription from logs to a pre-existing LDP stream. HTTP: POST /overTheBox/{serviceName}/log/subscription */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Subscription Details (JSON)', name: 'subscriptionDetails', type: 'json', default: '{}', required: true, description: 'Subscription details as a JSON object', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const rawBody = this.getNodeParameter('subscriptionDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost(`/overTheBox/${serviceName}/log/subscription`, { body })) as IDataObject;
	return [{ json: data }];
}
