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
			displayName: 'Block',
			name: 'block',
			type: 'string',
			default: '',
			required: true,
			description: 'The blocking type of the associate lines',
			displayOptions,
		},
		{
			displayName: 'Notify Email',
			name: 'notifyEmail',
			type: 'string',
			default: '',
			description: 'Override the nichandle email for this notification',
			displayOptions,
		},
		{
			displayName: 'Percentage',
			name: 'percentage',
			type: 'string',
			default: '',
			required: true,
			description: 'The notification percentage of maximum outplan',
			displayOptions,
		},
	];
}

/**
 * Executes the OutplanNotificationPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/outplanNotification
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const block = this.getNodeParameter('block', itemIndex) as string;
	const notifyEmail = this.getNodeParameter('notifyEmail', itemIndex) as string;
	const percentage = this.getNodeParameter('percentage', itemIndex) as string;

	const body: IDataObject = {
		block: block,
		notifyEmail: notifyEmail,
		percentage: percentage,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/outplanNotification', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
