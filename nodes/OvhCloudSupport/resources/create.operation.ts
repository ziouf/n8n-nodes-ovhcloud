import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

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
			...serviceNameLocator({
				searchListMethod: 'getSupportTicketServices',
				displayName: 'Service Name',
				description: 'The internal name of the service concerned by the ticket',
			}),
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const subject = this.getNodeParameter('subject', _itemIndex, '') as string;
	const body = this.getNodeParameter('body', _itemIndex, '') as string;
	const category = this.getNodeParameter('category', _itemIndex, 'assistance') as string;
	const product = this.getNodeParameter('product', _itemIndex, 'hosting') as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;

	const data: IDataObject = {
		subject,
		body,
		category,
		product,
		serviceName: serviceName || undefined,
	};

	const result = (await client.httpPost('/support/tickets/create', data)) as IDataObject;
	return this.helpers.returnJsonArray([result]);
}
