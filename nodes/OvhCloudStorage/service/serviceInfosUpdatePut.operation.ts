import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'NetApp Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNetAppServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
			],
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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
				extractValue: true,
			}) as string;
	const body: IDataObject = {};
	const canDeleteAtExpiration = this.getNodeParameter('canDeleteAtExpiration', itemIndex) as boolean;
	if (canDeleteAtExpiration) { body.canDeleteAtExpiration = canDeleteAtExpiration; }
	const contactAdmin = this.getNodeParameter('contactAdmin', itemIndex, '') as string;
	if (contactAdmin !== '') { body.contactAdmin = contactAdmin; }
	const contactBilling = this.getNodeParameter('contactBilling', itemIndex, '') as string;
	if (contactBilling !== '') { body.contactBilling = contactBilling; }
	const contactTech = this.getNodeParameter('contactTech', itemIndex, '') as string;
	if (contactTech !== '') { body.contactTech = contactTech; }
	const domain = this.getNodeParameter('domain', itemIndex, '') as string;
	if (domain !== '') { body.domain = domain; }
	const engagedUpTo = this.getNodeParameter('engagedUpTo', itemIndex, '') as string;
	if (engagedUpTo !== '') { body.engagedUpTo = engagedUpTo; }
	const expiration = this.getNodeParameter('expiration', itemIndex, '') as string;
	if (expiration !== '') { body.expiration = expiration; }
	const renewalType = this.getNodeParameter('renewalType', itemIndex, '') as string;
	if (renewalType !== '') { body.renewalType = renewalType; }
	const status = this.getNodeParameter('status', itemIndex, '') as string;
	if (status !== '') { body.status = status; }
	const data = (await client.httpPut(`/storage/netapp/${encodeURIComponent(serviceName)}/serviceInfos`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
