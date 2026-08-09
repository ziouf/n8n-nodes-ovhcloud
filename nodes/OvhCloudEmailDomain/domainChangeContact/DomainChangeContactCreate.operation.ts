import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainChangeContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contact to set as admin contact',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainChangeContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contact to set as billing contact',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainChangeContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contact to set as tech contact',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainChangeContactCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Launch a contact change procedure
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex ?? 0) as string;
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex ?? 0) as string;
	const contactTech = this.getNodeParameter('contactTech', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		contactAdmin: contactAdmin,
		contactBilling: contactBilling,
		contactTech: contactTech,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/changeContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
