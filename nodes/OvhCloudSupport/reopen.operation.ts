import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Reopen Support Ticket operation for Support resource
 *
 * Reopens a support ticket:
 * - HTTP POST request to `/support/tickets/{ticketId}/reopen` endpoint
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Reopen Ticket operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Ticket ID',
			name: 'ticketId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the support ticket to reopen',
			displayOptions,
		},
	];
}

/**
 * Executes the Reopen Support Ticket operation.
 *
 * Reopens a support ticket.
 *
 * HTTP method: POST
 * Endpoint: /support/tickets/{ticketId}/reopen
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', 0) as string;
	const data = (await client.httpPost(`/support/tickets/${ticketId}/reopen`, {
		body: {},
	})) as IDataObject;
	return [{ json: data }];
}
