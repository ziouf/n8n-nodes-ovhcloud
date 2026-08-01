import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Contact Type',
			name: 'contactType',
			type: 'options',
			options: [
				{ name: 'Administrative', value: 'admin' },
				{ name: 'Technical', value: 'tech' },
				{ name: 'Billing', value: 'billing' },
			],
			default: 'admin',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Contact Email',
			name: 'contactEmail',
			type: 'string',
			default: '',
			required: true,
			description: 'Email of the new contact',
			displayOptions,
		},
	];
}

/**
 * Change hosting contact
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const contactType = this.getNodeParameter('contactType', 0) as string;
	const contactEmail = this.getNodeParameter('contactEmail', 0) as string;
	const data = await client.httpPost(`/hosting/web/${serviceName}/changeContact`, {
		contactType,
		contactEmail,
	});
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
