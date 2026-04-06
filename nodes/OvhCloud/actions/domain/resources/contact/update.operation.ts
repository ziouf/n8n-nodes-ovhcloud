import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update Contact operation
 *
 * Updates a contact.
 *
 * HTTP method: PUT
 * Endpoint: /domain/contact/{contactId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the contact to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const contactId = this.getNodeParameter('contactId', 0) as string;

	const data = (await client.httpPut(`/domain/contact/${contactId}`)) as IDataObject;
	return [{ json: data }];
}
