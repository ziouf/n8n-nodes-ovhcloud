import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as getExecute } from './resources/get.operation';
import { execute as registerPostExecute } from './resources/registerPost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'startupOperation',
	'startup',
	[
	{
		name: 'Get Startup Status',
		value: 'get',
		action: 'Get the status of the registered startup',
		execute: getExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Register Startup',
		value: 'registerPost',
		action: 'Register a startup',
		execute: registerPostExecute,
		description: noProps,
	},
	],

);

export { description, execute };
