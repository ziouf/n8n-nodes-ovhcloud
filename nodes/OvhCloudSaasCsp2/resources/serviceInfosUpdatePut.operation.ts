import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Office Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Office tenant service name (e.g. csp2-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getSaasCsp2Services', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'csp2-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'Contact email for administrative purposes',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'Contact email for billing purposes',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'Contact email for technical purposes',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			description: 'Domain associated with the service',
			displayOptions,
		},
		{
			displayName: 'Engaged Up To',
			name: 'engagedUpTo',
			type: 'dateTime',
			default: '',
			description: 'Date until which the service is engaged',
			displayOptions,
		},
		{
			displayName: 'Expiration',
			name: 'expiration',
			type: 'dateTime',
			default: '',
			description: 'Expiration date of the service',
			displayOptions,
		},
		{
			displayName: 'Possible Renew Period',
			name: 'possibleRenewPeriod',
			type: 'string',
			default: '',
			description: 'Comma-separated possible renewal periods for the service (e.g. 6,12)',
			displayOptions,
		},
	];
}

/**
 * Update service information of an Office tenant.
 *
 * HTTP method: PUT
 * Endpoint: /saas/csp2/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const contactAdmin = (this.getNodeParameter('contactAdmin', _itemIndex ?? 0, '') as string) || '';
	const contactBilling = (this.getNodeParameter('contactBilling', _itemIndex ?? 0, '') as string) || '';
	const contactTech = (this.getNodeParameter('contactTech', _itemIndex ?? 0, '') as string) || '';
	const domain = (this.getNodeParameter('domain', _itemIndex ?? 0, '') as string) || '';
	const engagedUpTo = (this.getNodeParameter('engagedUpTo', _itemIndex ?? 0, '') as string) || '';
	const expiration = (this.getNodeParameter('expiration', _itemIndex ?? 0, '') as string) || '';
	const possibleRenewPeriod = (this.getNodeParameter('possibleRenewPeriod', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (contactAdmin) body.contactAdmin = contactAdmin;
	if (contactBilling) body.contactBilling = contactBilling;
	if (contactTech) body.contactTech = contactTech;
	if (domain) body.domain = domain;
	if (engagedUpTo) body.engagedUpTo = engagedUpTo;
	if (expiration) body.expiration = expiration;
	if (possibleRenewPeriod) body.possibleRenewPeriod = possibleRenewPeriod;
	await client.httpPut(`/saas/csp2/${encodeURIComponent(serviceName)}/serviceInfos`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
