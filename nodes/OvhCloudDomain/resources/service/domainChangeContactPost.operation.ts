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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
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
 * Executes the Launch a contact change procedure operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex, '') as string;
		if (contactAdmin !== '') body['contactAdmin'] = contactAdmin;
		const contactBilling = this.getNodeParameter('contactBilling', _itemIndex, '') as string;
		if (contactBilling !== '') body['contactBilling'] = contactBilling;
		const contactTech = this.getNodeParameter('contactTech', _itemIndex, '') as string;
		if (contactTech !== '') body['contactTech'] = contactTech;

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/changeContact`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
