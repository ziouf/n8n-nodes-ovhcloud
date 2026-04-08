import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** Get subscription details. HTTP: GET /overTheBox/{serviceName}/log/subscription/{subscriptionId} */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Subscription ID', name: 'subscriptionId', type: 'string', default: '', required: true, description: 'The ID of the subscription', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}/log/subscription/${subscriptionId}`)) as IDataObject;
	return [{ json: data }];
}
