import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionGet,
	execute as executeGet,
} from './resources/gatewayGetGet.operation';
import {
	description as descriptionList,
	execute as executeList,
} from './resources/gatewayListGet.operation';
import {
	description as descriptionTaskGetGet,
	execute as executeTaskGetGet,
} from './resources/gatewayTaskGetGet.operation';
import {
	description as descriptionTaskListGet,
	execute as executeTaskListGet,
} from './resources/gatewayTaskListGet.operation';
import {
	description as descriptionTerminate,
	execute as executeTerminate,
} from './resources/gatewayTerminatePost.operation';
import {
	description as descriptionUpdate,
	execute as executeUpdate,
} from './resources/gatewayUpdatePut.operation';


const { description, execute } = createOperationDispatcher(
	'sslGatewayOperation',
	'sslGateway',
	[
	{
		name: 'Get',
		value: 'get',
		action: 'Get details of an SSL Gateway',
		execute: executeGet,
		description: descriptionGet,
	},
	{
		name: 'Get Task',
		value: 'getTask',
		action: 'Get details of an SSL Gateway task',
		execute: executeTaskGetGet,
		description: descriptionTaskGetGet,
	},
	{
		name: 'List',
		value: 'list',
		action: 'List your SSL Gateways',
		execute: executeList,
		description: descriptionList,
		show: false,
		default: true,
	},
	{
		name: 'List Tasks',
		value: 'listTasks',
		action: 'List tasks for an SSL Gateway',
		execute: executeTaskListGet,
		description: descriptionTaskListGet,
	},
	{
		name: 'Terminate',
		value: 'terminate',
		action: 'Request termination of an SSL Gateway',
		execute: executeTerminate,
		description: descriptionTerminate,
	},
	{
		name: 'Update',
		value: 'update',
		action: 'Update an SSL Gateway',
		execute: executeUpdate,
		description: descriptionUpdate,
	},
	],
);

export { description, execute };
