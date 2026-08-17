import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as serviceInfosGetExecute } from './resources/serviceInfosGet.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/serviceInfosUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'stackOperation',
	'stack',
	[
	{
		name: 'Get Stack Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information of a Stack MIS service',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get Stack Service Properties',
		value: 'get',
		action: 'Get properties of a Stack MIS service',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'List Stack Services',
		value: 'list',
		action: 'List all available Stack MIS services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Update Stack Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update the service information of a Stack MIS service',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
