import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as serviceInfosGetExecute } from './resources/serviceInfosGet.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/serviceInfosUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'vipOperation',
	'vip',
	[
	{
		name: 'Get VIP Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information of a VIP service',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get VIP Service Properties',
		value: 'get',
		action: 'Get properties of a VIP service',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'List VIP Services',
		value: 'list',
		action: 'List all available VIP services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Update VIP Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update the service information of a VIP service',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
