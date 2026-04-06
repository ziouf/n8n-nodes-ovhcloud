import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Change contact for an MS service.
 *
 * HTTP method: POST
 * Endpoint: /msServices/{serviceName}/changeContact
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the MS service',
			displayOptions,
		},
		{
			displayName: 'Contact Type',
			name: 'contactType',
			type: 'options',
			options: [
				{ name: 'Admin', value: 'admin' },
				{ name: 'Billing', value: 'billing' },
				{ name: 'Tech', value: 'tech' },
			],
			default: 'admin',
			required: true,
			description: 'Type of contact to change',
			displayOptions,
		},
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'string',
			default: '',
			required: true,
			description: 'The new contact ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		contactType: this.getNodeParameter('contactType', 0) as string,
		contact: this.getNodeParameter('contactId', 0) as string,
	};
	const data = (await client.httpPost(`/msServices/${serviceName}/changeContact`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
