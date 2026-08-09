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
 * Executes the Post ChangeContact operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const contactAdmin = (this.getNodeParameter('contactAdmin', _itemIndex, "") as string);
	const contactBilling = (this.getNodeParameter('contactBilling', _itemIndex, "") as string);
	const contactTech = (this.getNodeParameter('contactTech', _itemIndex, "") as string);

	const body: IDataObject = {};
	if (contactAdmin !== '') body.contactAdmin = contactAdmin;
	if (contactBilling !== '') body.contactBilling = contactBilling;
	if (contactTech !== '') body.contactTech = contactTech;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/changeContact`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
