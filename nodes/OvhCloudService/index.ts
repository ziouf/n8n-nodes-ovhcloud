import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionCreateRenew,
	execute as executeCreateRenew,
} from './createRenew.operation';
import {
	description as descriptionGet,
	execute as executeGet,
} from './get.operation';
import {
	description as descriptionList,
	execute as executeList,
} from './list.operation';
import {
	description as descriptionListRenews,
	execute as executeListRenews,
} from './listRenews.operation';
import {
	description as descriptionReopenService,
	execute as executeReopenService,
} from './reopen.operation';
import {
	description as descriptionSuspend,
	execute as executeSuspend,
} from './suspend.operation';
import {
	description as descriptionTerminate,
	execute as executeTerminate,
} from './terminate.operation';

const { description, execute } = createOperationDispatcher(
	'serviceOperation',
	'service',
	[
	{
		name: 'Create Renew Order',
		value: 'createRenew',
		action: 'Create a renew order for a service',
		execute: executeCreateRenew,
		description: descriptionCreateRenew,
	},
	{
		name: 'Get',
		value: 'get',
		action: 'Get service details',
		execute: executeGet,
		description: descriptionGet,
	},
	{
		name: 'List',
		value: 'list',
		action: 'List all services',
		execute: executeList,
		description: descriptionList,
		default: true,
	},
	{
		name: 'List Renews',
		value: 'listRenews',
		action: 'List possible renews for a service',
		execute: executeListRenews,
		description: descriptionListRenews,
	},
	{
		name: 'Reopen Service',
		value: 'reopenService',
		action: 'Reopen a suspended service',
		execute: executeReopenService,
		description: descriptionReopenService,
	},
	{
		name: 'Suspend Service',
		value: 'suspend',
		action: 'Suspend a service',
		execute: executeSuspend,
		description: descriptionSuspend,
	},
	{
		name: 'Terminate Service',
		value: 'terminate',
		action: 'Terminate a suspended service (irreversible)',
		execute: executeTerminate,
		description: descriptionTerminate,
	},
	],
);

export { description, execute };
