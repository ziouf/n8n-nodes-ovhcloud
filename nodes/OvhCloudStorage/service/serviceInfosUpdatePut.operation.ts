import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getNetAppServices',
				displayName: 'NetApp Service Name',
				description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
				placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
			}),
			displayOptions,
		},
		{
			displayName: 'Can Delete At Expiration',
			name: 'canDeleteAtExpiration',
			type: 'boolean',
			default: false,
			description: 'Whether indicates that the service can be set up to be deleted at expiration',
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Engaged Up To',
			name: 'engagedUpTo',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Expiration',
			name: 'expiration',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Renewal Type',
			name: 'renewalType',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Update service information operation.
 *
 * HTTP method: PUT
 * Endpoint: /storage/netapp/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const body: IDataObject = {};
	const canDeleteAtExpiration = this.getNodeParameter('canDeleteAtExpiration', _itemIndex) as boolean;
	if (canDeleteAtExpiration) { body.canDeleteAtExpiration = canDeleteAtExpiration; }
	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex, '') as string;
	if (contactAdmin !== '') { body.contactAdmin = contactAdmin; }
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex, '') as string;
	if (contactBilling !== '') { body.contactBilling = contactBilling; }
	const contactTech = this.getNodeParameter('contactTech', _itemIndex, '') as string;
	if (contactTech !== '') { body.contactTech = contactTech; }
	const domain = this.getNodeParameter('domain', _itemIndex, '') as string;
	if (domain !== '') { body.domain = domain; }
	const engagedUpTo = this.getNodeParameter('engagedUpTo', _itemIndex, '') as string;
	if (engagedUpTo !== '') { body.engagedUpTo = engagedUpTo; }
	const expiration = this.getNodeParameter('expiration', _itemIndex, '') as string;
	if (expiration !== '') { body.expiration = expiration; }
	const renewalType = this.getNodeParameter('renewalType', _itemIndex, '') as string;
	if (renewalType !== '') { body.renewalType = renewalType; }
	const status = this.getNodeParameter('status', _itemIndex, '') as string;
	if (status !== '') { body.status = status; }
	const data = (await client.httpPut(`/storage/netapp/${encodeURIComponent(serviceName)}/serviceInfos`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
