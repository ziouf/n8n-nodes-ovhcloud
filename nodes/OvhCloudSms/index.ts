import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionBlacklistCreatePost,
	execute as executeBlacklistCreatePost,
} from './resources/blacklist/blacklistCreatePost.operation';
import {
	description as descriptionBlacklistDeleteDelete,
	execute as executeBlacklistDeleteDelete,
} from './resources/blacklist/blacklistDeleteDelete.operation';
import {
	description as descriptionBlacklistGetGet,
	execute as executeBlacklistGetGet,
} from './resources/blacklist/blacklistGetGet.operation';
import {
	description as descriptionBlacklistListGet,
	execute as executeBlacklistListGet,
} from './resources/blacklist/blacklistListGet.operation';
import {
	description as descriptionSmsCreatePost,
	execute as executeSmsCreatePost,
} from './resources/sms/smsCreatePost.operation';
import {
	description as descriptionSmsDeleteDelete,
	execute as executeSmsDeleteDelete,
} from './resources/sms/smsDeleteDelete.operation';
import {
	description as descriptionSmsGetGet,
	execute as executeSmsGetGet,
} from './resources/sms/smsGetGet.operation';
import {
	description as descriptionSmsListGet,
	execute as executeSmsListGet,
} from './resources/sms/smsListGet.operation';
import {
	description as descriptionSmsRecipientListGet,
	execute as executeSmsRecipientListGet,
} from './resources/sms/smsRecipientListGet.operation';
import {
	description as descriptionSmsTaskGetGet,
	execute as executeSmsTaskGetGet,
} from './resources/sms/smsTaskGetGet.operation';
import {
	description as descriptionSmsTaskListGet,
	execute as executeSmsTaskListGet,
} from './resources/sms/smsTaskListGet.operation';

const { description, execute } = createOperationDispatcher(
	'smsOperation',
	'sms',
	[
	{
		name: 'Blacklist Create',
		value: 'blacklistCreatePost',
		action: 'Blacklist Create',
		execute: executeBlacklistCreatePost,
		description: descriptionBlacklistCreatePost,
	},
	{
		name: 'Blacklist Delete',
		value: 'blacklistDeleteDelete',
		action: 'Blacklist Delete',
		execute: executeBlacklistDeleteDelete,
		description: descriptionBlacklistDeleteDelete,
	},
	{
		name: 'Blacklist Get',
		value: 'blacklistGetGet',
		action: 'Blacklist Get',
		execute: executeBlacklistGetGet,
		description: descriptionBlacklistGetGet,
	},
	{
		name: 'Blacklist List',
		value: 'blacklistListGet',
		action: 'Blacklist List',
		execute: executeBlacklistListGet,
		description: descriptionBlacklistListGet,
	},
	{
		name: 'Send SMS',
		value: 'smsCreatePost',
		action: 'Send SMS',
		execute: executeSmsCreatePost,
		description: descriptionSmsCreatePost,
	},
	{
		name: 'Delete SMS Service',
		value: 'smsDeleteDelete',
		action: 'Delete SMS Service',
		execute: executeSmsDeleteDelete,
		description: descriptionSmsDeleteDelete,
	},
	{
		name: 'Get SMS Service',
		value: 'smsGetGet',
		action: 'Get SMS Service',
		execute: executeSmsGetGet,
		description: descriptionSmsGetGet,
	},
	{
		name: 'List SMS Services',
		value: 'smsListGet',
		action: 'List SMS Services',
		execute: executeSmsListGet,
		description: descriptionSmsListGet,
	},
	{
		name: 'List SMS Recipients',
		value: 'smsRecipientListGet',
		action: 'List SMS Recipients',
		execute: executeSmsRecipientListGet,
		description: descriptionSmsRecipientListGet,
	},
	{
		name: 'Get SMS Task',
		value: 'smsTaskGetGet',
		action: 'Get SMS Task',
		execute: executeSmsTaskGetGet,
		description: descriptionSmsTaskGetGet,
	},
	{
		name: 'List SMS Tasks',
		value: 'smsTaskListGet',
		action: 'List SMS Tasks',
		execute: executeSmsTaskListGet,
		description: descriptionSmsTaskListGet,
	},
	],
);

export { description, execute };
