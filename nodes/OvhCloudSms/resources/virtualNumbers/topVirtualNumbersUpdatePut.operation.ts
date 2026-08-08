import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'Your virtual number',
			displayOptions,
		},
		{
			displayName: 'Can Delete At Expiration',
			name: 'canDeleteAtExpiration',
			type: 'boolean',
			default: false,
			description: 'Whether Property of services.Service',
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'Property of services.Service',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'Property of services.Service',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'Property of services.Service',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/virtualNumbers/{number}/serviceInfos operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/virtualNumbers/{number}/serviceInfos
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', 0) as string;
	const body: IDataObject = {};
	const canDeleteAtExpiration = this.getNodeParameter('canDeleteAtExpiration', 0) as boolean;
	if (canDeleteAtExpiration) body['canDeleteAtExpiration'] = canDeleteAtExpiration;
	const contactAdmin = this.getNodeParameter('contactAdmin', 0) as string;
	if (contactAdmin) body['contactAdmin'] = contactAdmin;
	const contactBilling = this.getNodeParameter('contactBilling', 0) as string;
	if (contactBilling) body['contactBilling'] = contactBilling;
	const contactTech = this.getNodeParameter('contactTech', 0) as string;
	if (contactTech) body['contactTech'] = contactTech;
	const data = (await new ApiClient(this).httpPut(
		`/sms/virtualNumbers/${encodeURIComponent(number)}/serviceInfos`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
