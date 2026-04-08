import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Score Support Ticket operation for Support resource
 *
 * Sets ticket score:
 * - HTTP POST request to `/support/tickets/{ticketId}/score` endpoint
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Score Ticket operation
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
			displayName: 'Score',
			name: 'score',
			type: 'number',
			default: 5,
			required: true,
			description: 'Score to set for the ticket (1-5)',
			displayOptions,
		},
	];
}

/**
 * Executes the Score Support Ticket operation.
 *
 * Sets ticket score.
 *
 * HTTP method: POST
 * Endpoint: /support/tickets/{ticketId}/score
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', 0) as string;
	const body = {
		score: this.getNodeParameter('score', 0) as number,
	};
	const data = (await client.httpPost(`/support/tickets/${ticketId}/score`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
