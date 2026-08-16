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
	execute as executeNotificationcontactMeanGetDetail,
	description as descriptionNotificationcontactMeanGetDetail,
} from './notificationcontactMeanGetDetail.operation';
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
	execute as executeNotificationhistoryGetDetail,
	description as descriptionNotificationhistoryGetDetail,
} from './notificationhistoryGetDetail.operation';
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
	execute as executeNotificationroutingGetDetail,
	description as descriptionNotificationroutingGetDetail,
} from './notificationroutingGetDetail.operation';
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
					name: 'Create a Contact Mean',
					value: 'notificationcontactMeanCreatePost',
					action: 'Create a contact mean',
				},
				{
					name: 'Create a Routing',
					value: 'notificationroutingCreatePost',
					action: 'Create a routing',
				},
				{
					name: 'Delete the Contact Mean',
					value: 'notificationcontactMeanDeleteDelete',
					action: 'Delete the contact mean',
				},
				{
					name: 'Delete the Routing',
					value: 'notificationroutingDeleteDelete',
					action: 'Delete the routing',
				},
				{
					name: 'Get a Notification Attachment',
					value: 'notificationhistoryattachmentListGet',
					action: 'Get a notification attachment',
				},
				{
					name: 'Get a Task on a Contact Mean',
					value: 'notificationcontactMeantaskListGet2',
					action: 'Get a task on a contact mean',
				},
				{
					name: 'Get Contact Mean',
					value: 'notificationcontactMeanListGet2',
					action: 'Retrieve information about a contact mean',
				},
				{
					name: 'Get Notification',
					value: 'notificationhistoryListGet2',
					action: 'Retrieve information about a notification sent to you',
				},
				{
					name: 'Get Routing',
					value: 'notificationroutingListGet2',
					action: 'Retrieve information about a routing',
				},
				{
					name: 'Get the List of Tasks on a Contact Mean',
					value: 'notificationcontactMeantaskListGet',
					action: 'Get the list of tasks on a contact mean',
				},
				{
					name: 'Restart the Validation Process for This Contact Mean, if You Did Not Receive the OTP',
					value: 'notificationcontactMeanrestartValidationCreatePost',
					action:
						'Restart the validation process for this contact mean, if you did not receive the OTP',
				},
				{
					name: 'Retrieve Data Referential for /Notification Endpoints',
					value: 'notificationreferenceListGet',
					action: 'Retrieve data referential for /notification endpoints',
				},
				{
					name: 'Retrieve Every Contact Mean',
					value: 'notificationcontactMeanListGet',
					action: 'Retrieve every contact mean',
				},
				{
					name: 'Retrieve Every Notification Sent to You',
					value: 'notificationhistoryListGet',
					action: 'Retrieve every notification sent to you',
				},
				{
					name: 'Retrieve Every Routing',
					value: 'notificationroutingListGet',
					action: 'Retrieve every routing',
				},
				{
					name: 'Update a Contact Mean',
					value: 'notificationcontactMeanUpdatePut',
					action: 'Update a contact mean',
				},
				{
					name: 'Update a Routing',
					value: 'notificationroutingUpdatePut',
					action: 'Update a routing',
				},
				{
					name: 'Update a Task on a Contact Mean',
					value: 'notificationcontactMeantaskUpdatePut',
					action: 'Update a task on a contact mean',
				},
				{
					name: 'Validate This Contact Mean',
					value: 'notificationcontactMeanvalidateCreatePost',
					action: 'Validate this contact mean',
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
		...(descriptionNotificationcontactMeanGetDetail({
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
		...(descriptionNotificationhistoryGetDetail({
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
		...(descriptionNotificationroutingGetDetail({
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
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('notificationOperation', itemIndex ?? 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'notificationcontactMeanListGet':
			return executeNotificationcontactMeanListGet.call(this, itemIndex ?? 0);
		case 'notificationcontactMeanCreatePost':
			return executeNotificationcontactMeanCreatePost.call(this, itemIndex ?? 0);
		case 'notificationcontactMeanDeleteDelete':
			return executeNotificationcontactMeanDeleteDelete.call(this, itemIndex ?? 0);
		case 'notificationcontactMeanListGet2':
			return executeNotificationcontactMeanGetDetail.call(this, itemIndex ?? 0);
		case 'notificationcontactMeanUpdatePut':
			return executeNotificationcontactMeanUpdatePut.call(this, itemIndex ?? 0);
		case 'notificationcontactMeanrestartValidationCreatePost':
			return executeNotificationcontactMeanrestartValidationCreatePost.call(this, itemIndex ?? 0);
		case 'notificationcontactMeantaskListGet':
			return executeNotificationcontactMeantaskListGet.call(this, itemIndex ?? 0);
		case 'notificationcontactMeantaskListGet2':
			return executeNotificationcontactMeantaskListGet2.call(this, itemIndex ?? 0);
		case 'notificationcontactMeantaskUpdatePut':
			return executeNotificationcontactMeantaskUpdatePut.call(this, itemIndex ?? 0);
		case 'notificationcontactMeanvalidateCreatePost':
			return executeNotificationcontactMeanvalidateCreatePost.call(this, itemIndex ?? 0);
		case 'notificationhistoryListGet':
			return executeNotificationhistoryListGet.call(this, itemIndex ?? 0);
		case 'notificationhistoryListGet2':
			return executeNotificationhistoryGetDetail.call(this, itemIndex ?? 0);
		case 'notificationhistoryattachmentListGet':
			return executeNotificationhistoryattachmentListGet.call(this, itemIndex ?? 0);
		case 'notificationreferenceListGet':
			return executeNotificationreferenceListGet.call(this, itemIndex ?? 0);
		case 'notificationroutingListGet':
			return executeNotificationroutingListGet.call(this, itemIndex ?? 0);
		case 'notificationroutingCreatePost':
			return executeNotificationroutingCreatePost.call(this, itemIndex ?? 0);
		case 'notificationroutingDeleteDelete':
			return executeNotificationroutingDeleteDelete.call(this, itemIndex ?? 0);
		case 'notificationroutingListGet2':
			return executeNotificationroutingGetDetail.call(this, itemIndex ?? 0);
		case 'notificationroutingUpdatePut':
			return executeNotificationroutingUpdatePut.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudNotification"`);
}

