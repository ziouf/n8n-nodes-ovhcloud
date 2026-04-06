import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Support Ticket operation for Support resource
 *
 * Retrieves detailed information for a specific support ticket:
 * - HTTP GET request to `/support/{ticketId}` endpoint
 * - Ticket ID parameter is required
 * - Returns support ticket details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Support Ticket operation
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
 * Executes the Get Support Ticket operation.
 *
 * Retrieves detailed information for a specific support ticket.
 *
 * HTTP method: GET
 * Endpoint: /support/{ticketId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing support ticket details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', 0) as string;
	const data = (await client.httpGet(`/support/${ticketId}`)) as IDataObject;
	return [{ json: data }];
}
