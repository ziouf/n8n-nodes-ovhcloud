import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Create Support Ticket operation for Support resource
 *
 * Creates a new support ticket:
 * - HTTP POST request to `/support/tickets/create` endpoint
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Ticket operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Subject',
			name: 'subject',
			type: 'string',
			default: '',
			required: true,
			description: 'Subject of the support ticket',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				rows: 4,
			},
			description: 'Description of the issue',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Support Ticket operation.
 *
 * Creates a new support ticket.
 *
 * HTTP method: POST
 * Endpoint: /support/tickets/create
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created ticket
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body = {
		subject: this.getNodeParameter('subject', 0) as string,
		description: this.getNodeParameter('description', 0) as string,
	};
	const data = (await client.httpPost('/support/tickets/create', { body })) as IDataObject;
	return [{ json: data }];
}
