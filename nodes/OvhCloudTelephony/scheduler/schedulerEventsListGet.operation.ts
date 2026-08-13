import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Categories',
			name: 'categories',
			type: 'string',
			default: '',
			description: 'Filter the value of categories property (=)',
			displayOptions,
		},
		{
			displayName: 'Date End.from',
			name: 'dateEnd.from',
			type: 'string',
			default: '',
			description: 'Filter the value of dateEnd property (>=)',
			displayOptions,
		},
		{
			displayName: 'Date End.to',
			name: 'dateEnd.to',
			type: 'string',
			default: '',
			description: 'Filter the value of dateEnd property (<=)',
			displayOptions,
		},
		{
			displayName: 'Date Start.from',
			name: 'dateStart.from',
			type: 'string',
			default: '',
			description: 'Filter the value of dateStart property (>=)',
			displayOptions,
		},
		{
			displayName: 'Date Start.to',
			name: 'dateStart.to',
			type: 'string',
			default: '',
			description: 'Filter the value of dateStart property (<=)',
			displayOptions,
		},
	];
}

/**
 * Executes the SchedulerEvents List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/scheduler/{serviceName}/events
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const categories = this.getNodeParameter('categories', _itemIndex) as string;
	const dateEnd_from = this.getNodeParameter('dateEnd.from', _itemIndex) as string;
	const dateEnd_to = this.getNodeParameter('dateEnd.to', _itemIndex) as string;
	const dateStart_from = this.getNodeParameter('dateStart.from', _itemIndex) as string;
	const dateStart_to = this.getNodeParameter('dateStart.to', _itemIndex) as string;

	const qs: IDataObject = {
		categories: categories,
		dateEnd_from: dateEnd_from,
		dateEnd_to: dateEnd_to,
		dateStart_from: dateStart_from,
		dateStart_to: dateStart_to,
	};

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/scheduler' + '/' + encodeURIComponent(serviceName) + '/events', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
