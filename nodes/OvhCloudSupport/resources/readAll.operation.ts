import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Ticket ID',
			name: 'ticketId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The support ticket ID (e.g. 1234567890)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getSupportTicketServices' },
				},
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: '1234567890',
				},
			],
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', itemIndex, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(`/supportTicket/${ticketId}/messages`, {
		method: 'readAll',
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
