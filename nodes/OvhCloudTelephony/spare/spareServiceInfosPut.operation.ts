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
			displayName: 'Spare',
			name: 'spare',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your spare',
			displayOptions,
		},
		{
			displayName: 'Can Delete At Expiration',
			name: 'canDeleteAtExpiration',
			type: 'string',
			default: '',
			description: 'The canDeleteAtExpiration parameter',
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contactAdmin parameter',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contactBilling parameter',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contactTech parameter',
			displayOptions,
		},
		{
			displayName: 'Creation',
			name: 'creation',
			type: 'string',
			default: '',
			description: 'The creation parameter',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			description: 'The domain parameter',
			displayOptions,
		},
		{
			displayName: 'Engaged Up To',
			name: 'engagedUpTo',
			type: 'string',
			default: '',
			description: 'The engagedUpTo parameter',
			displayOptions,
		},
		{
			displayName: 'Expiration',
			name: 'expiration',
			type: 'string',
			default: '',
			description: 'The expiration parameter',
			displayOptions,
		},
		{
			displayName: 'Possible Renew Period',
			name: 'possibleRenewPeriod',
			type: 'string',
			default: '',
			description: 'The possibleRenewPeriod parameter',
			displayOptions,
		},
		{
			displayName: 'Renew',
			name: 'renew',
			type: 'string',
			default: '',
			description: 'The renew parameter',
			displayOptions,
		},
		{
			displayName: 'Renewal Type',
			name: 'renewalType',
			type: 'string',
			default: '',
			description: 'The renewalType parameter',
			displayOptions,
		},
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			description: 'The serviceId parameter',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The status parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Put Spare Service Infos Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/spare/{spare}/serviceInfos
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const spare = this.getNodeParameter('spare', _itemIndex) as string;
	const canDeleteAtExpiration = this.getNodeParameter('canDeleteAtExpiration', _itemIndex) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex) as string;
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex) as string;
	const contactTech = this.getNodeParameter('contactTech', _itemIndex) as string;
	const creation = this.getNodeParameter('creation', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const engagedUpTo = this.getNodeParameter('engagedUpTo', _itemIndex) as string;
	const expiration = this.getNodeParameter('expiration', _itemIndex) as string;
	const possibleRenewPeriod = this.getNodeParameter('possibleRenewPeriod', _itemIndex) as string;
	const renew = this.getNodeParameter('renew', _itemIndex) as string;
	const renewalType = this.getNodeParameter('renewalType', _itemIndex) as string;
	const serviceId = this.getNodeParameter('serviceId', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;

	const body: IDataObject = {
		canDeleteAtExpiration: canDeleteAtExpiration,
		contactAdmin: contactAdmin,
		contactBilling: contactBilling,
		contactTech: contactTech,
		creation: creation,
		domain: domain,
		engagedUpTo: engagedUpTo,
		expiration: expiration,
		possibleRenewPeriod: possibleRenewPeriod,
		renew: renew,
		renewalType: renewalType,
		serviceId: serviceId,
		status: status,
	};

	const client = getClient(this);
	const data = (await client.httpPut(
		'/telephony/spare/' + encodeURIComponent(spare) + '/serviceInfos',
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
