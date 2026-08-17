import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionNotificationcontactMeanCreatePost,
	execute as executeNotificationcontactMeanCreatePost,
} from './notificationcontactMeanCreatePost.operation';
import {
	description as descriptionNotificationcontactMeanDeleteDelete,
	execute as executeNotificationcontactMeanDeleteDelete,
} from './notificationcontactMeanDeleteDelete.operation';
import {
	description as descriptionNotificationcontactMeanGetDetail,
	execute as executeNotificationcontactMeanGetDetail,
} from './notificationcontactMeanGetDetail.operation';
import {
	description as descriptionNotificationcontactMeanListGet,
	execute as executeNotificationcontactMeanListGet,
} from './notificationcontactMeanListGet.operation';
import {
	description as descriptionNotificationcontactMeanUpdatePut,
	execute as executeNotificationcontactMeanUpdatePut,
} from './notificationcontactMeanUpdatePut.operation';
import {
	description as descriptionNotificationcontactMeanrestartValidationCreatePost,
	execute as executeNotificationcontactMeanrestartValidationCreatePost,
} from './notificationcontactMeanrestartValidationCreatePost.operation';
import {
	description as descriptionNotificationcontactMeantaskListGet,
	execute as executeNotificationcontactMeantaskListGet,
} from './notificationcontactMeantaskListGet.operation';
import {
	description as descriptionNotificationcontactMeantaskListGet2,
	execute as executeNotificationcontactMeantaskListGet2,
} from './notificationcontactMeantaskListGet2.operation';
import {
	description as descriptionNotificationcontactMeantaskUpdatePut,
	execute as executeNotificationcontactMeantaskUpdatePut,
} from './notificationcontactMeantaskUpdatePut.operation';
import {
	description as descriptionNotificationcontactMeanvalidateCreatePost,
	execute as executeNotificationcontactMeanvalidateCreatePost,
} from './notificationcontactMeanvalidateCreatePost.operation';
import {
	description as descriptionNotificationhistoryGetDetail,
	execute as executeNotificationhistoryGetDetail,
} from './notificationhistoryGetDetail.operation';
import {
	description as descriptionNotificationhistoryListGet,
	execute as executeNotificationhistoryListGet,
} from './notificationhistoryListGet.operation';
import {
	description as descriptionNotificationhistoryattachmentListGet,
	execute as executeNotificationhistoryattachmentListGet,
} from './notificationhistoryattachmentListGet.operation';
import {
	description as descriptionNotificationreferenceListGet,
	execute as executeNotificationreferenceListGet,
} from './notificationreferenceListGet.operation';
import {
	description as descriptionNotificationroutingCreatePost,
	execute as executeNotificationroutingCreatePost,
} from './notificationroutingCreatePost.operation';
import {
	description as descriptionNotificationroutingDeleteDelete,
	execute as executeNotificationroutingDeleteDelete,
} from './notificationroutingDeleteDelete.operation';
import {
	description as descriptionNotificationroutingGetDetail,
	execute as executeNotificationroutingGetDetail,
} from './notificationroutingGetDetail.operation';
import {
	description as descriptionNotificationroutingListGet,
	execute as executeNotificationroutingListGet,
} from './notificationroutingListGet.operation';
import {
	description as descriptionNotificationroutingUpdatePut,
	execute as executeNotificationroutingUpdatePut,
} from './notificationroutingUpdatePut.operation';

const { description, execute } = createOperationDispatcher(
	'notificationOperation',
	'ovhCloudNotification',
	[
	{
		name: 'Create a Contact Mean',
		value: 'notificationcontactMeanCreatePost',
		action: 'Create a contact mean',
		execute: executeNotificationcontactMeanCreatePost,
		description: descriptionNotificationcontactMeanCreatePost,
	},
	{
		name: 'Create a Routing',
		value: 'notificationroutingCreatePost',
		action: 'Create a routing',
		execute: executeNotificationroutingCreatePost,
		description: descriptionNotificationroutingCreatePost,
	},
	{
		name: 'Delete the Contact Mean',
		value: 'notificationcontactMeanDeleteDelete',
		action: 'Delete the contact mean',
		execute: executeNotificationcontactMeanDeleteDelete,
		description: descriptionNotificationcontactMeanDeleteDelete,
	},
	{
		name: 'Delete the Routing',
		value: 'notificationroutingDeleteDelete',
		action: 'Delete the routing',
		execute: executeNotificationroutingDeleteDelete,
		description: descriptionNotificationroutingDeleteDelete,
	},
	{
		name: 'Get a Notification Attachment',
		value: 'notificationhistoryattachmentListGet',
		action: 'Get a notification attachment',
		execute: executeNotificationhistoryattachmentListGet,
		description: descriptionNotificationhistoryattachmentListGet,
	},
	{
		name: 'Get a Task on a Contact Mean',
		value: 'notificationcontactMeantaskListGet2',
		action: 'Get a task on a contact mean',
		execute: executeNotificationcontactMeantaskListGet2,
		description: descriptionNotificationcontactMeantaskListGet2,
	},
	{
		name: 'Get Contact Mean',
		value: 'notificationcontactMeanListGet2',
		action: 'Retrieve information about a contact mean',
		execute: executeNotificationcontactMeanGetDetail,
		description: descriptionNotificationcontactMeanGetDetail,
	},
	{
		name: 'Get Notification',
		value: 'notificationhistoryListGet2',
		action: 'Retrieve information about a notification sent to you',
		execute: executeNotificationhistoryGetDetail,
		description: descriptionNotificationhistoryGetDetail,
	},
	{
		name: 'Get Routing',
		value: 'notificationroutingListGet2',
		action: 'Retrieve information about a routing',
		execute: executeNotificationroutingGetDetail,
		description: descriptionNotificationroutingGetDetail,
	},
	{
		name: 'Get the List of Tasks on a Contact Mean',
		value: 'notificationcontactMeantaskListGet',
		action: 'Get the list of tasks on a contact mean',
		execute: executeNotificationcontactMeantaskListGet,
		description: descriptionNotificationcontactMeantaskListGet,
	},
	{
		name: 'Restart the Validation Process for This Contact Mean, if You Did Not Receive the OTP',
		value: 'notificationcontactMeanrestartValidationCreatePost',
		action: 'Restart the validation process for this contact mean, if you did not receive the OTP',
		execute: executeNotificationcontactMeanrestartValidationCreatePost,
		description: descriptionNotificationcontactMeanrestartValidationCreatePost,
	},
	{
		name: 'Retrieve Data Referential for /Notification Endpoints',
		value: 'notificationreferenceListGet',
		action: 'Retrieve data referential for /notification endpoints',
		execute: executeNotificationreferenceListGet,
		description: descriptionNotificationreferenceListGet,
	},
	{
		name: 'Retrieve Every Contact Mean',
		value: 'notificationcontactMeanListGet',
		action: 'Retrieve every contact mean',
		execute: executeNotificationcontactMeanListGet,
		description: descriptionNotificationcontactMeanListGet,
		default: true,
	},
	{
		name: 'Retrieve Every Notification Sent to You',
		value: 'notificationhistoryListGet',
		action: 'Retrieve every notification sent to you',
		execute: executeNotificationhistoryListGet,
		description: descriptionNotificationhistoryListGet,
	},
	{
		name: 'Retrieve Every Routing',
		value: 'notificationroutingListGet',
		action: 'Retrieve every routing',
		execute: executeNotificationroutingListGet,
		description: descriptionNotificationroutingListGet,
	},
	{
		name: 'Update a Contact Mean',
		value: 'notificationcontactMeanUpdatePut',
		action: 'Update a contact mean',
		execute: executeNotificationcontactMeanUpdatePut,
		description: descriptionNotificationcontactMeanUpdatePut,
	},
	{
		name: 'Update a Routing',
		value: 'notificationroutingUpdatePut',
		action: 'Update a routing',
		execute: executeNotificationroutingUpdatePut,
		description: descriptionNotificationroutingUpdatePut,
	},
	{
		name: 'Update a Task on a Contact Mean',
		value: 'notificationcontactMeantaskUpdatePut',
		action: 'Update a task on a contact mean',
		execute: executeNotificationcontactMeantaskUpdatePut,
		description: descriptionNotificationcontactMeantaskUpdatePut,
	},
	{
		name: 'Validate This Contact Mean',
		value: 'notificationcontactMeanvalidateCreatePost',
		action: 'Validate this contact mean',
		execute: executeNotificationcontactMeanvalidateCreatePost,
		description: descriptionNotificationcontactMeanvalidateCreatePost,
	},
	],
);

export { description, execute };
