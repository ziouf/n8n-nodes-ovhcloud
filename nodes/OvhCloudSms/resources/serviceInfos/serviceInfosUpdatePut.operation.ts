import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
 * Executes the Put /sms/{serviceName}/serviceInfos operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const canDeleteAtExpiration = this.getNodeParameter('canDeleteAtExpiration', _itemIndex ?? 0) as boolean;
	if (canDeleteAtExpiration) body['canDeleteAtExpiration'] = canDeleteAtExpiration;
	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex ?? 0) as string;
	if (contactAdmin) body['contactAdmin'] = contactAdmin;
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex ?? 0) as string;
	if (contactBilling) body['contactBilling'] = contactBilling;
	const contactTech = this.getNodeParameter('contactTech', _itemIndex ?? 0) as string;
	if (contactTech) body['contactTech'] = contactTech;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/serviceInfos`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
