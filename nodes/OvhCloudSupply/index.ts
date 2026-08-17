import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as mondialRelayPostExecute } from './resources/mondialRelayPost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'supplyOperation',
	'supply',
	[
	{
		name: 'Find Nearest MondialRelay Points',
		value: 'mondialRelayPost',
		action: 'Find the 10 nearest MondialRelay points from an address or city',
		execute: mondialRelayPostExecute,
		description: noProps,
		default: true,
	},
	],

);

export { description, execute };
