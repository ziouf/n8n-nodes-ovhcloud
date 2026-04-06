import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Create Contact Change operation.
 *
 * Defines inputs for initiating a contact change for a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name and contact fields
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to change the contact for. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a VPS service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The admin contact ID to assign',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The billing contact ID to assign',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The technical contact ID to assign',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Contact Change operation.
 *
 * Initiates a contact change for a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the contact change result
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', 0, '') as string;
	const contactBilling = this.getNodeParameter('contactBilling', 0, '') as string;
	const contactTech = this.getNodeParameter('contactTech', 0, '') as string;

	const body: IDataObject = {};
	if (contactAdmin) {
		body.contactAdmin = contactAdmin;
	}
	if (contactBilling) {
		body.contactBilling = contactBilling;
	}
	if (contactTech) {
		body.contactTech = contactTech;
	}

	const response = (await client.httpPost(`/vps/${serviceName}/changeContact`, {
		body,
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
