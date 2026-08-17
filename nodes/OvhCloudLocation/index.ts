import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionLocationListGet,
	execute as executeLocationListGet,
} from './locationListGet.operation';
import {
	description as descriptionLocationListGet2,
	execute as executeLocationListGet2,
} from './locationListGet2.operation';

const { description, execute } = createOperationDispatcher(
	'locationOperation',
	'ovhCloudLocation',
	[
	{
		name: 'List Available Regions and Their Availability Zones',
		value: 'locationListGet',
		action: 'List available regions and their availability zones',
		execute: executeLocationListGet,
		description: descriptionLocationListGet,
		default: true,
	},
	{
		name: 'Get Available Region and Its Availability Zones',
		value: 'locationListGet2',
		action: 'Get available region and its availability zones',
		execute: executeLocationListGet2,
		description: descriptionLocationListGet2,
	},
	],
);

export { description, execute };
