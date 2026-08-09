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
			displayName: 'Url',
			name: 'url',
			type: 'string',
			default: '',
			required: true,
			description: 'The URL of your ICS formated calendar',
			displayOptions,
		},
	];
}

/**
 * Executes the SchedulerImportIcsCalendarPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const url = this.getNodeParameter('url', _itemIndex) as string;

	const body: IDataObject = {
		url: url,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/scheduler' + '/' + encodeURIComponent(serviceName) + '/importIcsCalendar', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
