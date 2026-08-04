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
			displayName: 'Category',
			name: 'category',
			type: 'string',
			default: '',
			required: true,
			description: 'The category of the event',
			displayOptions,
		},
		{
			displayName: 'Date End',
			name: 'dateEnd',
			type: 'string',
			default: '',
			required: true,
			description: 'The ending date of the event',
			displayOptions,
		},
		{
			displayName: 'Date Start',
			name: 'dateStart',
			type: 'string',
			default: '',
			required: true,
			description: 'The beginning date of the event',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'The descritpion of the event',
			displayOptions,
		},
		{
			displayName: 'Title',
			name: 'title',
			type: 'string',
			default: '',
			required: true,
			description: 'The title of the event',
			displayOptions,
		},
		{
			displayName: 'Uid',
			name: 'uid',
			type: 'string',
			default: '',
			description: 'The unique ICS event identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the SchedulerEventsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/scheduler/{serviceName}/events
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const category = this.getNodeParameter('category', itemIndex) as string;
	const dateEnd = this.getNodeParameter('dateEnd', itemIndex) as string;
	const dateStart = this.getNodeParameter('dateStart', itemIndex) as string;
	const description = this.getNodeParameter('description', itemIndex) as string;
	const title = this.getNodeParameter('title', itemIndex) as string;
	const uid = this.getNodeParameter('uid', itemIndex) as string;

	const body: IDataObject = {
		category: category,
		dateEnd: dateEnd,
		dateStart: dateStart,
		description: description,
		title: title,
		uid: uid,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/scheduler' + '/' + encodeURIComponent(serviceName) + '/events', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
