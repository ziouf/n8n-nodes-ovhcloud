import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Uid',
			name: 'uid',
			type: 'string',
			default: '',
			required: true,
			description: 'The unique ICS event identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the SchedulerEventsGet operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const uid = this.getNodeParameter('uid', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/scheduler' + '/' + encodeURIComponent(serviceName) + '/events' + '/' + encodeURIComponent(uid))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
