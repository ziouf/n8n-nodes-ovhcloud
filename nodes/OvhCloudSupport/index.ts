/**
 * @brief Support resource operations for n8n node
 *
 * Provides operations for managing OVHcloud support tickets including:
 * - List all support tickets
 * - Create a new ticket
 * - Get ticket details
 * - Check if ticket can be scored
 * - Close ticket
 * - Get ticket messages
 * - Reopen ticket
 * - Reply to ticket
 * - Set ticket score
 *
 * Available operations:
 * - `list`: ListTickets - List support tickets
 * - `create`: CreateTicket - Create a new ticket
 * - `get`: GetTicket - Get ticket details
 * - `canBeScored`: CanBeScored - Check if ticket can be scored
 * - `close`: CloseTicket - Close ticket
 * - `getMessages`: GetMessages - Get ticket messages
 * - `reopen`: ReopenTicket - Reopen a ticket
 * - `reply`: ReplyToTicket - Reply to ticket
 * - `score`: ScoreTicket - Set ticket score
 *
 * @remarks
 * Support tickets are managed under `/support/tickets` route.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeCreate, description as descriptionCreate } from './create.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeCanBeScored,
	description as descriptionCanBeScored,
} from './canBeScored.operation';
import { execute as executeClose, description as descriptionClose } from './close.operation';
import {
	execute as executeGetMessages,
	description as descriptionGetMessages,
} from './getMessages.operation';
import { execute as executeReopen, description as descriptionReopen } from './reopen.operation';
import { execute as executeReply, description as descriptionReply } from './reply.operation';
import { execute as executeScore, description as descriptionScore } from './score.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Support Operation',
			name: 'supportOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Can Be Scored',
					value: 'canBeScored',
					action: 'Check if ticket can be scored',
				},
				{
					name: 'Close Ticket',
					value: 'close',
					action: 'Close ticket',
				},
				{
					name: 'Create Ticket',
					value: 'create',
					action: 'Create a new ticket',
				},
				{
					name: 'Get Messages',
					value: 'getMessages',
					action: 'Get ticket messages',
				},
				{
					name: 'Get Ticket',
					value: 'get',
					action: 'Get ticket details',
				},
				{
					name: 'List Tickets',
					value: 'list',
					action: 'List support tickets',
				},
				{
					name: 'Reopen Ticket',
					value: 'reopen',
					action: 'Reopen a ticket',
				},
				{
					name: 'Reply to Ticket',
					value: 'reply',
					action: 'Reply to ticket',
				},
				{
					name: 'Score Ticket',
					value: 'score',
					action: 'Set ticket score',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['list'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['create'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['get'] },
		}),
		...descriptionCanBeScored({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['canBeScored'] },
		}),
		...descriptionClose({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['close'] },
		}),
		...descriptionGetMessages({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['getMessages'] },
		}),
		...descriptionReopen({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['reopen'] },
		}),
		...descriptionReply({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['reply'] },
		}),
		...descriptionScore({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['score'] },
		}),
	];
}

/**
 * Executes the selected support operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('supportOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'create':
			return await executeCreate.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'canBeScored':
			return await executeCanBeScored.call(this);
		case 'close':
			return await executeClose.call(this);
		case 'getMessages':
			return await executeGetMessages.call(this);
		case 'reopen':
			return await executeReopen.call(this);
		case 'reply':
			return await executeReply.call(this);
		case 'score':
			return await executeScore.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "support"`);
}
