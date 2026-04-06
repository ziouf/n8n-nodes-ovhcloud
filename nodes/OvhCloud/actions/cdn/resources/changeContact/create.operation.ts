import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Change CDN Contact operation
 *
 * Changes the admin, billing, or tech contact for a CDN Dedicated service.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/changeContact
 */
export function descriptionChangeContactCreate(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the CDN Dedicated service. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a CDN service...',
					typeOptions: {
						searchListMethod: 'getCdnServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			description: 'The admin contact handle',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			description: 'The billing contact handle',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			description: 'The tech contact handle',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Change CDN Contact operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function executeChangeContactCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', 0, '') as string;
	const contactBilling = this.getNodeParameter('contactBilling', 0, '') as string;
	const contactTech = this.getNodeParameter('contactTech', 0, '') as string;

	const body: IDataObject = {};
	if (contactAdmin) body.contactAdmin = contactAdmin;
	if (contactBilling) body.contactBilling = contactBilling;
	if (contactTech) body.contactTech = contactTech;

	const response = (await client.httpPost(
		`/cdn/dedicated/${serviceName}/changeContact`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
