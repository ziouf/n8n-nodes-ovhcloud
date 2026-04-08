import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get Contact operation
 *
 * Retrieves a specific contact.
 *
 * HTTP method: GET
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
			description: 'The ID of the contact',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const contactId = this.getNodeParameter('contactId', 0) as string;

	const data = (await client.httpGet(`/domain/contact/${contactId}`)) as IDataObject;
	return [{ json: data }];
}
