import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionNetworkDefensevaceventListGet,
	execute as executeNetworkDefensevaceventListGet,
} from './networkDefensevaceventListGet.operation';
import {
	description as descriptionNetworkDefensevactrafficListGet,
	execute as executeNetworkDefensevactrafficListGet,
} from './networkDefensevactrafficListGet.operation';

const { description, execute } = createOperationDispatcher(
	'networkDefenseOperation',
	'ovhCloudNetworkDefense',
	[
	{
		name: 'Get All Network Defense Events',
		value: 'networkDefensevaceventListGet',
		action: 'Get all Network Defense events',
		execute: executeNetworkDefensevaceventListGet,
		description: descriptionNetworkDefensevaceventListGet,
		default: true,
	},
	{
		name: 'Get All Network Defense Traffic Statistics',
		value: 'networkDefensevactrafficListGet',
		action: 'Get all Network Defense traffic statistics',
		execute: executeNetworkDefensevactrafficListGet,
		description: descriptionNetworkDefensevactrafficListGet,
	},
	],
);

export { description, execute };
