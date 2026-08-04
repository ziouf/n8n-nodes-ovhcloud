import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Can Delete At Expiration',
			name: 'canDeleteAtExpiration',
			type: 'boolean',
			default: false,
			description: 'Whether the service can be deleted at expiration',
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contact to set as admin contact',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contact to set as billing contact',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contact to set as tech contact',
			displayOptions,
		},
	];
}

/**
 * Executes the Put UpdateServiceInfos operation.
 *
 * HTTP method: PUT
 * Endpoint: /cdn/dedicated/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const canDeleteAtExpiration = (this.getNodeParameter('canDeleteAtExpiration', itemIndex, false) as boolean);
	const contactAdmin = (this.getNodeParameter('contactAdmin', itemIndex, "") as string);
	const contactBilling = (this.getNodeParameter('contactBilling', itemIndex, "") as string);
	const contactTech = (this.getNodeParameter('contactTech', itemIndex, "") as string);

	const body: IDataObject = {};
	if (canDeleteAtExpiration !== false) body.canDeleteAtExpiration = canDeleteAtExpiration;
	if (contactAdmin !== '') body.contactAdmin = contactAdmin;
	if (contactBilling !== '') body.contactBilling = contactBilling;
	if (contactTech !== '') body.contactTech = contactTech;

	const client = new ApiClient(this);
	const data = (await client.httpPut(`/cdn/dedicated/${encodeURIComponent(serviceName)}/serviceInfos`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
