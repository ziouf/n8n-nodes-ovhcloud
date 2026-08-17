import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionCanBeScored,
	execute as executeCanBeScored,
} from './resources/canBeScored.operation';
import {
	description as descriptionClose,
	execute as executeClose,
} from './resources/close.operation';
import {
	description as descriptionCreate,
	execute as executeCreate,
} from './resources/create.operation';
import {
	description as descriptionGet,
	execute as executeGet,
} from './resources/get.operation';
import {
	description as descriptionGetMessages,
	execute as executeGetMessages,
} from './resources/getMessages.operation';
import {
	description as descriptionList,
	execute as executeList,
} from './resources/list.operation';
import {
	description as descriptionReopen,
	execute as executeReopen,
} from './resources/reopen.operation';
import {
	description as descriptionReply,
	execute as executeReply,
} from './resources/reply.operation';
import {
	description as descriptionScore,
	execute as executeScore,
} from './resources/score.operation';

const { description, execute } = createOperationDispatcher(
	'ovhCloudSupportTicketOperation',
	'supportTicket',
	[
	{
		name: 'Can Be Scored',
		value: 'canBeScored',
		action: 'Check whether a support ticket can be scored',
		execute: executeCanBeScored,
		description: descriptionCanBeScored,
	},
	{
		name: 'Close',
		value: 'close',
		action: 'Close a support ticket',
		execute: executeClose,
		description: descriptionClose,
	},
	{
		name: 'Create',
		value: 'create',
		action: 'Create a support ticket',
		execute: executeCreate,
		description: descriptionCreate,
		default: true,
	},
	{
		name: 'Get',
		value: 'get',
		action: 'Get a support ticket',
		execute: executeGet,
		description: descriptionGet,
	},
	{
		name: 'Get Messages',
		value: 'getMessages',
		action: 'Get messages of a support ticket',
		execute: executeGetMessages,
		description: descriptionGetMessages,
	},
	{
		name: 'List',
		value: 'list',
		action: 'List all support tickets',
		execute: executeList,
		description: descriptionList,
	},
	{
		name: 'Reopen',
		value: 'reopen',
		action: 'Reopen a support ticket',
		execute: executeReopen,
		description: descriptionReopen,
	},
	{
		name: 'Reply',
		value: 'reply',
		action: 'Reply to a support ticket',
		execute: executeReply,
		description: descriptionReply,
	},
	{
		name: 'Score',
		value: 'score',
		action: 'Score a support ticket',
		execute: executeScore,
		description: descriptionScore,
	},
	],
);

export { description, execute };
