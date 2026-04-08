import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update service information for an IP Load Balancer.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/serviceInfos
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name of the IP Load Balancer',
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'Admin contact handle',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'Billing contact handle',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'Technical contact handle',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Service Infos operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	const contactAdmin = this.getNodeParameter('contactAdmin', 0, '') as string;
	const contactBilling = this.getNodeParameter('contactBilling', 0, '') as string;
	const contactTech = this.getNodeParameter('contactTech', 0, '') as string;
	if (contactAdmin) body.contactAdmin = contactAdmin;
	if (contactBilling) body.contactBilling = contactBilling;
	if (contactTech) body.contactTech = contactTech;
	const data = (await client.httpPut(`/ipLoadbalancing/${serviceName}/serviceInfos`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
