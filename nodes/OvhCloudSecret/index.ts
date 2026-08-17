import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as retrievePostExecute } from './resources/retrievePost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'secretOperation',
	'secret',
	[
	{
		name: 'Retrieve Secret',
		value: 'retrievePost',
		action: 'Retrieve a secret sent by email',
		execute: retrievePostExecute,
		description: noProps,
		default: true,
	},
	],

);

export { description, execute };
