import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Subject',
			name: 'subject',
			type: 'string',
			default: '',
			required: true,
			description: 'The ticket subject',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'string',
			typeOptions: { rows: 3 },
			default: '',
			description: 'The message body',
			displayOptions,
		},
		{
			displayName: 'Category',
			name: 'category',
			type: 'options',
			options: [
				{
					name: 'Assistance',
					value: 'assistance',
				},
				{
					name: 'Billing',
					value: 'billing',
				},
				{
					name: 'Incident',
					value: 'incident',
				},
			],
			default: 'assistance',
			description: 'The ticket category',
			displayOptions,
		},
		{
			displayName: 'Product',
			name: 'product',
			type: 'options',
			options: [
				{
					name: 'ADSL / SDSL',
					value: 'adsl',
				},
				{
					name: 'CDN',
					value: 'cdn',
				},
				{
					name: 'Dedicated Cloud',
					value: 'dedicatedCloud',
				},
				{
					name: 'Dedicated Server',
					value: 'dedicated',
				},
				{
					name: 'Domain Name',
					value: 'domain',
				},
				{
					name: 'Email',
					value: 'email',
				},
				{
					name: 'Game Hosting',
					value: 'game',
				},
				{
					name: 'Hosting',
					value: 'hosting',
				},
				{
					name: 'IP Load Balancing',
					value: 'ipLoadbalancing',
				},
				{
					name: 'IP Range',
					value: 'ipRange',
				},
				{
					name: 'Managed Dedicated Server',
					value: 'managedDedicated',
				},
				{
					name: 'Mobile',
					value: 'mobile',
				},
				{
					name: 'Nasha',
					value: 'nasha',
				},
				{
					name: 'Other',
					value: 'other',
				},
				{
					name: 'OVH One',
					value: 'ovhOne',
				},
				{
					name: 'Public Cloud',
					value: 'publicCloud',
				},
				{
					name: 'Storage',
					value: 'storage',
				},
				{
					name: 'VPS',
					value: 'vps',
				},
				{
					name: 'Web',
					value: 'web',
				},
			],
			default: 'hosting',
			description: 'The product service concerned by the ticket',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			description: 'The internal name of the service concerned by the ticket',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const subject = this.getNodeParameter('subject', itemIndex, '') as string;
	const body = this.getNodeParameter('body', itemIndex, '') as string;
	const category = this.getNodeParameter('category', itemIndex, 'assistance') as string;
	const product = this.getNodeParameter('product', itemIndex, 'hosting') as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '') as string;

	const data: IDataObject = {
		subject,
		body,
		category,
		product,
		serviceName: serviceName || undefined,
	};

	const result = (await client.httpPost('/supportTicket/create', data)) as IDataObject;
	return this.helpers.returnJsonArray([result]);
}
