import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Check if Ticket Can Be Scored operation for Support resource
 *
 * Checks whether a ticket can be scored:
 * - HTTP GET request to `/support/tickets/{ticketId}/canBeScored` endpoint
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Can Be Scored operation
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
 * Executes the Check if Ticket Can Be Scored operation.
 *
 * Checks whether a ticket can be scored.
 *
 * HTTP method: GET
 * Endpoint: /support/tickets/{ticketId}/canBeScored
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', 0) as string;
	const data = (await client.httpGet(`/support/tickets/${ticketId}/canBeScored`)) as IDataObject;
	return [{ json: data }];
}
