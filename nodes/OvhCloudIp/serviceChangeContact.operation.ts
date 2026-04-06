import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Change Contact operation.
 *
 * Launches a contact change procedure for an IP service.
 *
 * HTTP method: POST
 * Endpoint: /ip/service/{serviceName}/changeContact
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP service name',
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			required: true,
			description: 'Admin contact handle',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			required: true,
			description: 'Billing contact handle',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			required: true,
			description: 'Tech contact handle',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Contact operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', 0) as string;
	const contactBilling = this.getNodeParameter('contactBilling', 0) as string;
	const contactTech = this.getNodeParameter('contactTech', 0) as string;
	const data = (await client.httpPost(`/ip/service/${serviceName}/changeContact`, {
		body: { contactAdmin, contactBilling, contactTech },
	})) as IDataObject;
	return [{ json: data }];
}
