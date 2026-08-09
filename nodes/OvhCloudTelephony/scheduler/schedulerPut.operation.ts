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
			displayName: 'Time Zone',
			name: 'timeZone',
			type: 'string',
			default: '',
			description: 'The timeZone parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the SchedulerPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/scheduler/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const timeZone = this.getNodeParameter('timeZone', _itemIndex) as string;

	const body: IDataObject = {
		timeZone: timeZone,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/scheduler' + '/' + encodeURIComponent(serviceName), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
