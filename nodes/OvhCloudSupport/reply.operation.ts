import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Reply to Support Ticket operation for Support resource
 *
 * Replies to a support ticket:
 * - HTTP POST request to `/support/tickets/{ticketId}/reply` endpoint
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Reply to Ticket operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Ticket ID',
			name: 'ticketId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the support ticket',
			displayOptions,
		},
		{
			displayName: 'Message',
			name: 'message',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				rows: 4,
			},
			description: 'Reply message',
			displayOptions,
		},
	];
}

/**
 * Executes the Reply to Support Ticket operation.
 *
 * Replies to a support ticket.
 *
 * HTTP method: POST
 * Endpoint: /support/tickets/{ticketId}/reply
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', 0) as string;
	const body = {
		message: this.getNodeParameter('message', 0) as string,
	};
	const data = (await client.httpPost(`/support/tickets/${ticketId}/reply`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
