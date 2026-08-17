import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as getExecute } from './resources/get.operation';
import { execute as registerPostExecute } from './resources/registerPost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'partnerOperation',
	'partner',
	[
	{
		name: 'Get Partner Status',
		value: 'get',
		action: 'Retrieve the current status of a partner registration',
		execute: getExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Register as Partner',
		value: 'registerPost',
		action: 'Register an organization as a partner in the OVHcloud Partner Program',
		execute: registerPostExecute,
		description: noProps,
	},
	],

);

export { description, execute };
