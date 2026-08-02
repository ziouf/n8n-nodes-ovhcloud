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
			displayName: 'Score',
			name: 'score',
			type: 'number',
			default: 0,
			typeOptions: {
				min: 0,
				max: 5,
				value: 5,
			},
			description: 'The satisfaction score (0-5)',
			displayOptions,
		},
		{
			displayName: 'Comment',
			name: 'comment',
			type: 'string',
			default: '',
			description: 'Optional comment for the score',
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
	const score = this.getNodeParameter('score', itemIndex, 5) as number;
	const comment = this.getNodeParameter('comment', itemIndex, '') as string;

	const body: IDataObject = {
		score,
		comment,
	};

	const data = (await client.httpPost(`/support/tickets/${ticketId}/score`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
