import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { execute as executeList, description as descriptionList } from './resources/list.operation';
import { execute as executeGet, description as descriptionGet } from './resources/get.operation';
import {
	execute as executeCreate,
	description as descriptionCreate,
} from './resources/create.operation';
import {
	execute as executeCanBeScored,
	description as descriptionCanBeScored,
} from './resources/canBeScored.operation';
import {
	execute as executeGetMessages,
	description as descriptionGetMessages,
} from './resources/getMessages.operation';
import {
	execute as executeClose,
	description as descriptionClose,
} from './resources/close.operation';
import {
	execute as executeReopen,
	description as descriptionReopen,
} from './resources/reopen.operation';
import {
	execute as executeReply,
	description as descriptionReply,
} from './resources/reply.operation';
import {
	execute as executeScore,
	description as descriptionScore,
} from './resources/score.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'ovhCloudSupportTicketOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Can Be Scored',
					value: 'canBeScored',
					action: 'Check whether a support ticket can be scored',
				},
				{
					name: 'Close',
					value: 'close',
					action: 'Close a support ticket',
				},
				{
					name: 'Create',
					value: 'create',
					action: 'Create a support ticket',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get a support ticket',
				},
				{
					name: 'Get Messages',
					value: 'getMessages',
					action: 'Get messages of a support ticket',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all support tickets',
				},
				{
					name: 'Reopen',
					value: 'reopen',
					action: 'Reopen a support ticket',
				},
				{
					name: 'Reply',
					value: 'reply',
					action: 'Reply to a support ticket',
				},
				{
					name: 'Score',
					value: 'score',
					action: 'Score a support ticket',
				},
			],
			default: 'create',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionCanBeScored({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['canBeScored'] },
		}),
		...descriptionClose({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['close'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['create'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['get'] },
		}),
		...descriptionGetMessages({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['getMessages'] },
		}),
		...descriptionList(),
		...descriptionReopen({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['reopen'] },
		}),
		...descriptionReply({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['reply'] },
		}),
		...descriptionScore({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudSupportTicketOperation: ['score'] },
		}),
	] as INodeProperties[];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ovhCloudSupportTicketOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'canBeScored':
			return executeCanBeScored.call(this, itemIndex);
		case 'close':
			return executeClose.call(this, itemIndex);
		case 'create':
			return executeCreate.call(this, itemIndex);
		case 'get':
			return executeGet.call(this, itemIndex);
		case 'getMessages':
			return executeGetMessages.call(this, itemIndex);
		case 'list':
			return executeList.call(this);
		case 'reopen':
			return executeReopen.call(this, itemIndex);
		case 'reply':
			return executeReply.call(this, itemIndex);
		case 'score':
			return executeScore.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "supportTicket"`);
}
