import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// SMS operations
import { execute as executeSmsListGet } from './resources/sms/smsListGet.operation';
import { execute as executeSmsCreatePost } from './resources/sms/smsCreatePost.operation';
import { execute as executeSmsGetGet } from './resources/sms/smsGetGet.operation';
import { execute as executeSmsDeleteDelete } from './resources/sms/smsDeleteDelete.operation';
import { execute as executeSmsRecipientListGet } from './resources/sms/smsRecipientListGet.operation';
import { execute as executeSmsTaskListGet } from './resources/sms/smsTaskListGet.operation';
import { execute as executeSmsTaskGetGet } from './resources/sms/smsTaskGetGet.operation';

// Blacklist operations
import { execute as executeBlacklistListGet } from './resources/blacklist/blacklistListGet.operation';
import { execute as executeBlacklistCreatePost } from './resources/blacklist/blacklistCreatePost.operation';
import { execute as executeBlacklistDeleteDelete } from './resources/blacklist/blacklistDeleteDelete.operation';
import { execute as executeBlacklistGetGet } from './resources/blacklist/blacklistGetGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker
	props.push({
		displayName: 'Operation',
		name: 'smsOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			// SMS operations
			{ displayName: 'List SMS Services', name: 'smsListGet', value: 'smsListGet' },
			{ displayName: 'Send SMS', name: 'smsCreatePost', value: 'smsCreatePost' },
			{ displayName: 'Get SMS Service', name: 'smsGetGet', value: 'smsGetGet' },
			{ displayName: 'Delete SMS Service', name: 'smsDeleteDelete', value: 'smsDeleteDelete' },
			{
				displayName: 'List SMS Recipients',
				name: 'smsRecipientListGet',
				value: 'smsRecipientListGet',
			},
			{ displayName: 'List SMS Tasks', name: 'smsTaskListGet', value: 'smsTaskListGet' },
			{ displayName: 'Get SMS Task', name: 'smsTaskGetGet', value: 'smsTaskGetGet' },
			// Blacklist operations
			{
				displayName: 'Blacklist List',
				name: 'blacklistListGet',
				value: 'blacklistListGet',
			},
			{
				displayName: 'Blacklist Create',
				name: 'blacklistCreatePost',
				value: 'blacklistCreatePost',
			},
			{
				displayName: 'Blacklist Delete',
				name: 'blacklistDeleteDelete',
				value: 'blacklistDeleteDelete',
			},
			{ displayName: 'Blacklist Get', name: 'blacklistGetGet', value: 'blacklistGetGet' },
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('smsOperation', 0) as string;

	switch (operation) {
		// SMS operations
		case 'smsListGet':
			return executeSmsListGet.call(this);
		case 'smsCreatePost':
			return executeSmsCreatePost.call(this);
		case 'smsGetGet':
			return executeSmsGetGet.call(this);
		case 'smsDeleteDelete':
			return executeSmsDeleteDelete.call(this);
		case 'smsRecipientListGet':
			return executeSmsRecipientListGet.call(this);
		case 'smsTaskListGet':
			return executeSmsTaskListGet.call(this);
		case 'smsTaskGetGet':
			return executeSmsTaskGetGet.call(this);
		// Blacklist operations
		case 'blacklistListGet':
			return executeBlacklistListGet.call(this);
		case 'blacklistCreatePost':
			return executeBlacklistCreatePost.call(this);
		case 'blacklistDeleteDelete':
			return executeBlacklistDeleteDelete.call(this);
		case 'blacklistGetGet':
			return executeBlacklistGetGet.call(this);
		default: {
			throw new Error(`No handler for operation '${operation}'`);
		}
	}
}
