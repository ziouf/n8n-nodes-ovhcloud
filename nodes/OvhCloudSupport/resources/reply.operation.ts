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
		{
			displayName: 'Message',
			name: 'message',
			type: 'string',
			default: '',
			typeOptions: { rows: 3 },
			description: 'The message text to send',
			displayOptions,
		},
		{
			displayName: 'Private',
			name: 'isPrivate',
			type: 'boolean',
			default: false,
			description: 'Whether the message is private (visible to user only)',
			displayOptions,
		},
		{
			displayName: 'Attach Files',
			name: 'attachFiles',
			type: 'boolean',
			default: false,
			description: 'Whether to attach the file from item data',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', _itemIndex, '', {
		extractValue: true,
	}) as string;
	const message = this.getNodeParameter('message', _itemIndex, '') as string;
	const isPrivate = this.getNodeParameter('isPrivate', _itemIndex, false) as boolean;

	const body: IDataObject = {
		body: message,
		isPrivate,
	};

	const data = (await client.httpPost(`/support/tickets/${ticketId}/reply`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
