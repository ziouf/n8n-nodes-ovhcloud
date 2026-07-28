import type { IDisplayOptions, IExecuteFunctions } from 'n8n-workflow';
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
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'New first name for the contact',
			displayOptions,
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'New last name for the contact',
			displayOptions,
		},
	];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<any[]> {
	const client = new ApiClient(this);
	const ticketId = this.getNodeParameter('ticketId', itemIndex, '', {
		extractValue: true,
	}) as string;

	const firstNameParam = this.getNodeParameter('firstName', itemIndex) as string | undefined;
	const lastNameParam = this.getNodeParameter('lastName', itemIndex) as string | undefined;

	return [
		await client.httpPost(`/supportTicket/${ticketId}/contact/update`, {
			firstName: firstNameParam,
			lastName: lastNameParam,
		}),
	];
}
