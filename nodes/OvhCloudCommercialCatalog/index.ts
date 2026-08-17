import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionCommercialCatalogoffersListGet,
	execute as executeCommercialCatalogoffersListGet,
} from './commercialCatalogoffersListGet.operation';
import {
	description as descriptionCommercialCatalogoffersListGet2,
	execute as executeCommercialCatalogoffersListGet2,
} from './commercialCatalogoffersListGet2.operation';

const { description, execute } = createOperationDispatcher(
	'commercialCatalogOperation',
	'ovhCloudCommercialCatalog',
	[
	{
		name: 'List All Offers',
		value: 'commercialCatalogoffersListGet',
		action: 'List all offers',
		execute: executeCommercialCatalogoffersListGet,
		description: descriptionCommercialCatalogoffersListGet,
		default: true,
	},
	{
		name: 'Get Details of an Offer',
		value: 'commercialCatalogoffersListGet2',
		action: 'Get details of an offer',
		execute: executeCommercialCatalogoffersListGet2,
		description: descriptionCommercialCatalogoffersListGet2,
	},
	],
);

export { description, execute };
