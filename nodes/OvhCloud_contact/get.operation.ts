import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Contact operation for Contact resource
 *
 * Retrieves detailed information for a specific Contact:
 * - HTTP GET request to `/contact/{contactId}` endpoint
 * - Contact ID parameter is required
 * - Returns contact details
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the contact ID',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getContacts',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get Contact operation.
 *
 * Retrieves detailed information for a specific Contact.
 *
 * HTTP method: GET
 * Endpoint: /contact/{contactId.value}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing contact details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: contactId } = this.getNodeParameter('contactId', 0, {
		extractValue: true,
	}) as { value: string };
	const data = (await client.httpGet(`/contact/${contactId}`)) as IDataObject;
	return [{ json: data }];
}
