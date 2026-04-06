import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Ticket Messages operation for Support resource
 *
 * Gets messages of a support ticket:
 * - HTTP GET request to `/support/tickets/{ticketId}/messages` endpoint
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Messages operation
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
	];
}

/**
 * Executes the Get Ticket Messages operation.
 *
 * Gets messages of a support ticket.
 *
 * HTTP method: GET
 * Endpoint: /support/tickets/{ticketId}/messages
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing ticket messages
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', 0) as string;
	const data = (await client.httpGet(`/support/tickets/${ticketId}/messages`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
