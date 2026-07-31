import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeNotificationcontactMeanListGet,
	description as descriptionNotificationcontactMeanListGet,
} from './notificationcontactMeanListGet.operation';
import {
	execute as executeNotificationcontactMeanCreatePost,
	description as descriptionNotificationcontactMeanCreatePost,
} from './notificationcontactMeanCreatePost.operation';
import {
	execute as executeNotificationcontactMeanDeleteDelete,
	description as descriptionNotificationcontactMeanDeleteDelete,
} from './notificationcontactMeanDeleteDelete.operation';
import {
	execute as executeNotificationcontactMeanListGet2,
	description as descriptionNotificationcontactMeanListGet2,
} from './notificationcontactMeanListGet2.operation';
import {
	execute as executeNotificationcontactMeanUpdatePut,
	description as descriptionNotificationcontactMeanUpdatePut,
} from './notificationcontactMeanUpdatePut.operation';
import {
	execute as executeNotificationcontactMeanrestartValidationCreatePost,
	description as descriptionNotificationcontactMeanrestartValidationCreatePost,
} from './notificationcontactMeanrestartValidationCreatePost.operation';
import {
	execute as executeNotificationcontactMeantaskListGet,
	description as descriptionNotificationcontactMeantaskListGet,
} from './notificationcontactMeantaskListGet.operation';
import {
	execute as executeNotificationcontactMeantaskListGet2,
	description as descriptionNotificationcontactMeantaskListGet2,
} from './notificationcontactMeantaskListGet2.operation';
import {
	execute as executeNotificationcontactMeantaskUpdatePut,
	description as descriptionNotificationcontactMeantaskUpdatePut,
} from './notificationcontactMeantaskUpdatePut.operation';
import {
	execute as executeNotificationcontactMeanvalidateCreatePost,
	description as descriptionNotificationcontactMeanvalidateCreatePost,
} from './notificationcontactMeanvalidateCreatePost.operation';
import {
	execute as executeNotificationhistoryListGet,
	description as descriptionNotificationhistoryListGet,
} from './notificationhistoryListGet.operation';
import {
	execute as executeNotificationhistoryListGet2,
	description as descriptionNotificationhistoryListGet2,
} from './notificationhistoryListGet2.operation';
import {
	execute as executeNotificationhistoryattachmentListGet,
	description as descriptionNotificationhistoryattachmentListGet,
} from './notificationhistoryattachmentListGet.operation';
import {
	execute as executeNotificationreferenceListGet,
	description as descriptionNotificationreferenceListGet,
} from './notificationreferenceListGet.operation';
import {
	execute as executeNotificationroutingListGet,
	description as descriptionNotificationroutingListGet,
} from './notificationroutingListGet.operation';
import {
	execute as executeNotificationroutingCreatePost,
	description as descriptionNotificationroutingCreatePost,
} from './notificationroutingCreatePost.operation';
import {
	execute as executeNotificationroutingDeleteDelete,
	description as descriptionNotificationroutingDeleteDelete,
} from './notificationroutingDeleteDelete.operation';
import {
	execute as executeNotificationroutingListGet2,
	description as descriptionNotificationroutingListGet2,
} from './notificationroutingListGet2.operation';
import {
	execute as executeNotificationroutingUpdatePut,
	description as descriptionNotificationroutingUpdatePut,
} from './notificationroutingUpdatePut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'notificationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Retrieve every contact mean',
				value: 'notificationcontactMeanListGet',
				action: 'Retrieve every contact mean',
			},
			{
				name: 'Create a contact mean',
				value: 'notificationcontactMeanCreatePost',
				action: 'Create a contact mean',
			},
			{
				name: 'Delete the contact mean',
				value: 'notificationcontactMeanDeleteDelete',
				action: 'Delete the contact mean',
			},
			{
				name: 'Retrieve information about a contact mean',
				value: 'notificationcontactMeanListGet2',
				action: 'Retrieve information about a contact mean',
			},
			{
				name: 'Update a contact mean',
				value: 'notificationcontactMeanUpdatePut',
				action: 'Update a contact mean',
			},
			{
				name: 'Restart the validation process for this contact mean, if you did not receive the OTP',
				value: 'notificationcontactMeanrestartValidationCreatePost',
				action: 'Restart the validation process for this contact mean, if you did not receive the OTP',
			},
			{
				name: 'Get the list of tasks on a contact mean',
				value: 'notificationcontactMeantaskListGet',
				action: 'Get the list of tasks on a contact mean',
			},
			{
				name: 'Get a task on a contact mean',
				value: 'notificationcontactMeantaskListGet2',
				action: 'Get a task on a contact mean',
			},
			{
				name: 'Update a task on a contact mean',
				value: 'notificationcontactMeantaskUpdatePut',
				action: 'Update a task on a contact mean',
			},
			{
				name: 'Validate this contact mean',
				value: 'notificationcontactMeanvalidateCreatePost',
				action: 'Validate this contact mean',
			},
			{
				name: 'Retrieve every notification sent to you',
				value: 'notificationhistoryListGet',
				action: 'Retrieve every notification sent to you',
			},
			{
				name: 'Retrieve information about a notification sent to you',
				value: 'notificationhistoryListGet2',
				action: 'Retrieve information about a notification sent to you',
			},
			{
				name: 'Get a notification attachment',
				value: 'notificationhistoryattachmentListGet',
				action: 'Get a notification attachment',
			},
			{
				name: 'Retrieve data referential for /notification endpoints',
				value: 'notificationreferenceListGet',
				action: 'Retrieve data referential for /notification endpoints',
			},
			{
				name: 'Retrieve every routing',
				value: 'notificationroutingListGet',
				action: 'Retrieve every routing',
			},
			{
				name: 'Create a routing',
				value: 'notificationroutingCreatePost',
				action: 'Create a routing',
			},
			{
				name: 'Delete the routing',
				value: 'notificationroutingDeleteDelete',
				action: 'Delete the routing',
			},
			{
				name: 'Retrieve information about a routing',
				value: 'notificationroutingListGet2',
				action: 'Retrieve information about a routing',
			},
			{
				name: 'Update a routing',
				value: 'notificationroutingUpdatePut',
				action: 'Update a routing',
			},

			],
			default: 'notificationcontactMeanListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionNotificationcontactMeanListGet({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeanListGet'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeanCreatePost({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeanCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeanDeleteDelete({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeanDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeanListGet2({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeanListGet2'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeanUpdatePut({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeanUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeanrestartValidationCreatePost({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeanrestartValidationCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeantaskListGet({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeantaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeantaskListGet2({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeantaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeantaskUpdatePut({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeantaskUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionNotificationcontactMeanvalidateCreatePost({
			...displayOptions,
			show: { notificationOperation: ['notificationcontactMeanvalidateCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionNotificationhistoryListGet({
			...displayOptions,
			show: { notificationOperation: ['notificationhistoryListGet'] },
		}) as INodeProperties[]),
		...(descriptionNotificationhistoryListGet2({
			...displayOptions,
			show: { notificationOperation: ['notificationhistoryListGet2'] },
		}) as INodeProperties[]),
		...(descriptionNotificationhistoryattachmentListGet({
			...displayOptions,
			show: { notificationOperation: ['notificationhistoryattachmentListGet'] },
		}) as INodeProperties[]),
		...(descriptionNotificationreferenceListGet({
			...displayOptions,
			show: { notificationOperation: ['notificationreferenceListGet'] },
		}) as INodeProperties[]),
		...(descriptionNotificationroutingListGet({
			...displayOptions,
			show: { notificationOperation: ['notificationroutingListGet'] },
		}) as INodeProperties[]),
		...(descriptionNotificationroutingCreatePost({
			...displayOptions,
			show: { notificationOperation: ['notificationroutingCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionNotificationroutingDeleteDelete({
			...displayOptions,
			show: { notificationOperation: ['notificationroutingDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionNotificationroutingListGet2({
			...displayOptions,
			show: { notificationOperation: ['notificationroutingListGet2'] },
		}) as INodeProperties[]),
		...(descriptionNotificationroutingUpdatePut({
			...displayOptions,
			show: { notificationOperation: ['notificationroutingUpdatePut'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('notificationOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'notificationcontactMeanListGet':
			return executeNotificationcontactMeanListGet.call(this, itemIndex);
		case 'notificationcontactMeanCreatePost':
			return executeNotificationcontactMeanCreatePost.call(this, itemIndex);
		case 'notificationcontactMeanDeleteDelete':
			return executeNotificationcontactMeanDeleteDelete.call(this, itemIndex);
		case 'notificationcontactMeanListGet2':
			return executeNotificationcontactMeanListGet2.call(this, itemIndex);
		case 'notificationcontactMeanUpdatePut':
			return executeNotificationcontactMeanUpdatePut.call(this, itemIndex);
		case 'notificationcontactMeanrestartValidationCreatePost':
			return executeNotificationcontactMeanrestartValidationCreatePost.call(this, itemIndex);
		case 'notificationcontactMeantaskListGet':
			return executeNotificationcontactMeantaskListGet.call(this, itemIndex);
		case 'notificationcontactMeantaskListGet2':
			return executeNotificationcontactMeantaskListGet2.call(this, itemIndex);
		case 'notificationcontactMeantaskUpdatePut':
			return executeNotificationcontactMeantaskUpdatePut.call(this, itemIndex);
		case 'notificationcontactMeanvalidateCreatePost':
			return executeNotificationcontactMeanvalidateCreatePost.call(this, itemIndex);
		case 'notificationhistoryListGet':
			return executeNotificationhistoryListGet.call(this, itemIndex);
		case 'notificationhistoryListGet2':
			return executeNotificationhistoryListGet2.call(this, itemIndex);
		case 'notificationhistoryattachmentListGet':
			return executeNotificationhistoryattachmentListGet.call(this, itemIndex);
		case 'notificationreferenceListGet':
			return executeNotificationreferenceListGet.call(this, itemIndex);
		case 'notificationroutingListGet':
			return executeNotificationroutingListGet.call(this, itemIndex);
		case 'notificationroutingCreatePost':
			return executeNotificationroutingCreatePost.call(this, itemIndex);
		case 'notificationroutingDeleteDelete':
			return executeNotificationroutingDeleteDelete.call(this, itemIndex);
		case 'notificationroutingListGet2':
			return executeNotificationroutingListGet2.call(this, itemIndex);
		case 'notificationroutingUpdatePut':
			return executeNotificationroutingUpdatePut.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudNotification"`);
}
