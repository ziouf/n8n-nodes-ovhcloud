import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Close Support Ticket operation for Support resource
 *
 * Closes a support ticket:
 * - HTTP POST request to `/support/tickets/{ticketId}/close` endpoint
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Close Ticket operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Ticket ID',
			name: 'ticketId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the support ticket to close',
			displayOptions,
		},
	];
}

/**
 * Executes the Close Support Ticket operation.
 *
 * Closes a support ticket.
 *
 * HTTP method: POST
 * Endpoint: /support/tickets/{ticketId}/close
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', 0) as string;
	const data = (await client.httpPost(`/support/tickets/${ticketId}/close`, {
		body: {},
	})) as IDataObject;
	return [{ json: data }];
}
