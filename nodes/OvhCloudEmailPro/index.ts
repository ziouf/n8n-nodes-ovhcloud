import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as taskGetGetExecute } from './resources/taskGetGet.operation';
import { execute as taskListGetExecute } from './resources/taskListGet.operation';
import { execute as getServiceByNameExecute } from './resources/getByServiceNameGet.operation';
import { execute as listServicesExecute } from './resources/list.operation';
import { execute as updateSuspendStatusByServiceNamePutExecute } from './resources/updateSuspendStatusByServiceNamePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'emailProOperation',
	'emailpro',
	[
	{
		name: 'Get Email Pro Task',
		value: 'emailProGetTask',
		action: 'Get Email Pro Task',
		execute: taskGetGetExecute,
		description: noProps,
	},
	{
		name: 'List Email Pro Tasks',
		value: 'emailProListTasks',
		action: 'List Email Pro Tasks',
		execute: taskListGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service By Name',
		value: 'getServiceByName',
		action: 'Get Service By Name',
		execute: getServiceByNameExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'List Services',
		value: 'listServices',
		action: 'List Services',
		execute: listServicesExecute,
		description: noProps,
	},
	{
		name: 'Update Suspend Status By Service Name',
		value: 'updateSuspendStatusByServiceName',
		action: 'Update Suspend Status By Service Name',
		execute: updateSuspendStatusByServiceNamePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
