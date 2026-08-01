import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeAliasListGet,
	description as descriptionAliasListGet,
} from './aliases/aliasListGet.operation';
import {
	execute as executeAliasGet,
	description as descriptionAliasGet,
} from './aliases/aliasGet.operation';
import {
	execute as executeAliasChangeContactPost,
	description as descriptionAliasChangeContactPost,
} from './aliases/aliasChangeContactPost.operation';
import {
	execute as executeAliasServiceInfosGet,
	description as descriptionAliasServiceInfosGet,
} from './aliases/aliasServiceInfosGet.operation';
import {
	execute as executeAliasServiceInfosPut,
	description as descriptionAliasServiceInfosPut,
} from './aliases/aliasServiceInfosPut.operation';
import {
	execute as executeLinesListGet,
	description as descriptionLinesListGet,
} from './lines/linesListGet.operation';
import {
	execute as executeLinesGet,
	description as descriptionLinesGet,
} from './lines/linesGet.operation';
import {
	execute as executeLinesChangeContactPost,
	description as descriptionLinesChangeContactPost,
} from './lines/linesChangeContactPost.operation';
import {
	execute as executeLinesServiceInfosGet,
	description as descriptionLinesServiceInfosGet,
} from './lines/linesServiceInfosGet.operation';
import {
	execute as executeLinesServiceInfosPut,
	description as descriptionLinesServiceInfosPut,
} from './lines/linesServiceInfosPut.operation';
import {
	execute as executeLinesHardwareListGet,
	description as descriptionLinesHardwareListGet,
} from './lines/linesHardwareListGet.operation';
import {
	execute as executeLinesHardwarePost,
	description as descriptionLinesHardwarePost,
} from './lines/linesHardwarePost.operation';
import {
	execute as executeLinesNumberListGet,
	description as descriptionLinesNumberListGet,
} from './lines/linesNumberListGet.operation';
import {
	execute as executeLinesNumberPost,
	description as descriptionLinesNumberPost,
} from './lines/linesNumberPost.operation';
import {
	execute as executeLinesNumberGet,
	description as descriptionLinesNumberGet,
} from './lines/linesNumberGet.operation';
import {
	execute as executeLinesNumberPut,
	description as descriptionLinesNumberPut,
} from './lines/linesNumberPut.operation';
import {
	execute as executeLinesNumberDelete,
	description as descriptionLinesNumberDelete,
} from './lines/linesNumberDelete.operation';
import {
	execute as executeLinesPortabilityListGet,
	description as descriptionLinesPortabilityListGet,
} from './lines/linesPortabilityListGet.operation';
import {
	execute as executeLinesPortabilityPost,
	description as descriptionLinesPortabilityPost,
} from './lines/linesPortabilityPost.operation';
import {
	execute as executeLinesPortabilityGet,
	description as descriptionLinesPortabilityGet,
} from './lines/linesPortabilityGet.operation';
import {
	execute as executeLinesPortabilityPut,
	description as descriptionLinesPortabilityPut,
} from './lines/linesPortabilityPut.operation';
import {
	execute as executeLinesPortabilityDelete,
	description as descriptionLinesPortabilityDelete,
} from './lines/linesPortabilityDelete.operation';
import {
	execute as executeLinesSimListGet,
	description as descriptionLinesSimListGet,
} from './lines/linesSimListGet.operation';
import {
	execute as executeLinesSimPost,
	description as descriptionLinesSimPost,
} from './lines/linesSimPost.operation';
import {
	execute as executeLinesSimGet,
	description as descriptionLinesSimGet,
} from './lines/linesSimGet.operation';
import {
	execute as executeLinesSimPut,
	description as descriptionLinesSimPut,
} from './lines/linesSimPut.operation';
import {
	execute as executeLinesSimDelete,
	description as descriptionLinesSimDelete,
} from './lines/linesSimDelete.operation';
import {
	execute as executeTrunksListGet,
	description as descriptionTrunksListGet,
} from './trunks/trunksListGet.operation';
import {
	execute as executeTrunksGet,
	description as descriptionTrunksGet,
} from './trunks/trunksGet.operation';
import {
	execute as executeTrunksChangeContactPost,
	description as descriptionTrunksChangeContactPost,
} from './trunks/trunksChangeContactPost.operation';
import {
	execute as executeTrunksServiceInfosGet,
	description as descriptionTrunksServiceInfosGet,
} from './trunks/trunksServiceInfosGet.operation';
import {
	execute as executeTrunksServiceInfosPut,
	description as descriptionTrunksServiceInfosPut,
} from './trunks/trunksServiceInfosPut.operation';
import {
	execute as executeTrunksHardwareListGet,
	description as descriptionTrunksHardwareListGet,
} from './trunks/trunksHardwareListGet.operation';
import {
	execute as executeTrunksHardwarePost,
	description as descriptionTrunksHardwarePost,
} from './trunks/trunksHardwarePost.operation';
import {
	execute as executeTrunksNumberListGet,
	description as descriptionTrunksNumberListGet,
} from './trunks/trunksNumberListGet.operation';
import {
	execute as executeTrunksNumberPost,
	description as descriptionTrunksNumberPost,
} from './trunks/trunksNumberPost.operation';
import {
	execute as executeTrunksNumberGet,
	description as descriptionTrunksNumberGet,
} from './trunks/trunksNumberGet.operation';
import {
	execute as executeTrunksNumberPut,
	description as descriptionTrunksNumberPut,
} from './trunks/trunksNumberPut.operation';
import {
	execute as executeTrunksNumberDelete,
	description as descriptionTrunksNumberDelete,
} from './trunks/trunksNumberDelete.operation';
import {
	execute as executeNumbersListGet,
	description as descriptionNumbersListGet,
} from './numbers/numbersListGet.operation';
import {
	execute as executeNumbersGet,
	description as descriptionNumbersGet,
} from './numbers/numbersGet.operation';
import {
	execute as executeNumbersPost,
	description as descriptionNumbersPost,
} from './numbers/numbersPost.operation';
import {
	execute as executeNumbersPut,
	description as descriptionNumbersPut,
} from './numbers/numbersPut.operation';
import {
	execute as executeNumbersDelete,
	description as descriptionNumbersDelete,
} from './numbers/numbersDelete.operation';
import {
	execute as executeNumbersPortabilityListGet,
	description as descriptionNumbersPortabilityListGet,
} from './numbers/numbersPortabilityListGet.operation';
import {
	execute as executeNumbersPortabilityPost,
	description as descriptionNumbersPortabilityPost,
} from './numbers/numbersPortabilityPost.operation';
import {
	execute as executeNumbersPortabilityGet,
	description as descriptionNumbersPortabilityGet,
} from './numbers/numbersPortabilityGet.operation';
import {
	execute as executeNumbersPortabilityPut,
	description as descriptionNumbersPortabilityPut,
} from './numbers/numbersPortabilityPut.operation';
import {
	execute as executeNumbersPortabilityDelete,
	description as descriptionNumbersPortabilityDelete,
} from './numbers/numbersPortabilityDelete.operation';
import {
	execute as executeAccessoriesGet,
	description as descriptionAccessoriesGet,
} from './accessories/accessoriesGet.operation';
import {
	execute as executeLineOffersGet,
	description as descriptionLineOffersGet,
} from './offers/lineOffersGet.operation';
import {
	execute as executeLineOfferPhonesGet,
	description as descriptionLineOfferPhonesGet,
} from './offers/lineOfferPhonesGet.operation';
import {
	execute as executeFaxOffersGet,
	description as descriptionFaxOffersGet,
} from './offers/faxOffersGet.operation';
import {
	execute as executeLineOfferDetailsGet,
	description as descriptionLineOfferDetailsGet,
} from './offers/lineOfferDetailsGet.operation';
import {
	execute as executeDirectoriesCitiesGet,
	description as descriptionDirectoriesCitiesGet,
} from './directories/directoriesCitiesGet.operation';
import {
	execute as executeDirectoriesAvailableZipCodesGet,
	description as descriptionDirectoriesAvailableZipCodesGet,
} from './directories/directoriesAvailableZipCodesGet.operation';
import {
	execute as executeDirectoriesServicesGet,
	description as descriptionDirectoriesServicesGet,
} from './directories/directoriesServicesGet.operation';
import {
	execute as executeDirectoriesCountriesGet,
	description as descriptionDirectoriesCountriesGet,
} from './directories/directoriesCountriesGet.operation';
import {
	execute as executeTelephonyListGet,
	description as descriptionTelephonyListGet,
} from './misc/telephonyListGet.operation';
import {
	execute as executeSipDomainsGet,
	description as descriptionSipDomainsGet,
} from './misc/sipDomainsGet.operation';
import {
	execute as executeCurrentOrderIdsGet,
	description as descriptionCurrentOrderIdsGet,
} from './misc/currentOrderIdsGet.operation';
import {
	execute as executeSearchServicesGet,
	description as descriptionSearchServicesGet,
} from './misc/searchServicesGet.operation';
import {
	execute as executeSetDefaultSipDomainPost,
	description as descriptionSetDefaultSipDomainPost,
} from './misc/setDefaultSipDomainPost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'telephonyOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Aliases',
					value: 'aliasListGet',
					action: 'List your telephony aliases',
				},
				{
					name: 'Get Alias',
					value: 'aliasGet',
					action: 'Get alias properties',
				},
				{
					name: 'Change Contact',
					value: 'aliasChangeContactPost',
					action: 'Launch a contact change procedure for an alias',
				},
				{
					name: 'Get Alias Service Info',
					value: 'aliasServiceInfosGet',
					action: 'Get service information for an alias',
				},
				{
					name: 'Update Alias Service Info',
					value: 'aliasServiceInfosPut',
					action: 'Update service information for an alias',
				},
				{
					name: 'List Lines',
					value: 'linesListGet',
					action: 'List your telephony lines',
				},
				{
					name: 'Get Line',
					value: 'linesGet',
					action: 'Get line properties',
				},
				{
					name: 'Get Line Service Info',
					value: 'linesServiceInfosGet',
					action: 'Get service information for a line',
				},
				{
					name: 'Update Line Service Info',
					value: 'linesServiceInfosPut',
					action: 'Update service information for a line',
				},
				{
					name: 'List Hardware',
					value: 'linesHardwareListGet',
					action: 'List hardware associated with a line',
				},
				{
					name: 'Create Hardware',
					value: 'linesHardwarePost',
					action: 'Add hardware to a line',
				},
				{
					name: 'List Numbers',
					value: 'linesNumberListGet',
					action: 'List numbers associated with a line',
				},
				{
					name: 'Create Number',
					value: 'linesNumberPost',
					action: 'Add a number to a line',
				},
				{
					name: 'Get Number',
					value: 'linesNumberGet',
					action: 'Get number properties',
				},
				{
					name: 'Update Number',
					value: 'linesNumberPut',
					action: 'Update number properties',
				},
				{
					name: 'Delete Number',
					value: 'linesNumberDelete',
					action: 'Delete a number from a line',
				},
				{
					name: 'List Portabilities',
					value: 'linesPortabilityListGet',
					action: 'List portabilities for a line',
				},
				{
					name: 'Create Portability',
					value: 'linesPortabilityPost',
					action: 'Create a portability request for a line',
				},
				{
					name: 'Get Portability',
					value: 'linesPortabilityGet',
					action: 'Get portability details',
				},
				{
					name: 'Update Portability',
					value: 'linesPortabilityPut',
					action: 'Update portability properties',
				},
				{
					name: 'Delete Portability',
					value: 'linesPortabilityDelete',
					action: 'Delete a portability request',
				},
				{
					name: 'List SIMs',
					value: 'linesSimListGet',
					action: 'List SIMs associated with a line',
				},
				{
					name: 'Create SIM',
					value: 'linesSimPost',
					action: 'Add a SIM to a line',
				},
				{
					name: 'Get SIM',
					value: 'linesSimGet',
					action: 'Get SIM properties',
				},
				{
					name: 'Update SIM',
					value: 'linesSimPut',
					action: 'Update SIM properties',
				},
				{
					name: 'Delete SIM',
					value: 'linesSimDelete',
					action: 'Delete a SIM from a line',
				},
				{
					name: 'List Trunks',
					value: 'trunksListGet',
					action: 'List your telephony trunks',
				},
				{
					name: 'Get Trunk',
					value: 'trunksGet',
					action: 'Get trunk properties',
				},
				{
					name: 'Get Trunk Service Info',
					value: 'trunksServiceInfosGet',
					action: 'Get service information for a trunk',
				},
				{
					name: 'Update Trunk Service Info',
					value: 'trunksServiceInfosPut',
					action: 'Update service information for a trunk',
				},
				{
					name: 'List Accessories',
					value: 'accessoriesGet',
					action: 'Get available telephony accessories',
				},
				{
					name: 'List Line Offers',
					value: 'lineOffersGet',
					action: 'Get available line offers by country',
				},
				{
					name: 'Get Offer Phones',
					value: 'lineOfferPhonesGet',
					action: 'Get phones for a line offer',
				},
				{
					name: 'List Fax Offers',
					value: 'faxOffersGet',
					action: 'Get available fax offers by country',
				},
				{
					name: 'Get Line Offer Details',
					value: 'lineOfferDetailsGet',
					action: 'Get detailed information about a line offer',
				},
				{
					name: 'List Cities',
					value: 'directoriesCitiesGet',
					action: 'Get cities by country and zip code',
				},
				{
					name: 'List Zip Codes',
					value: 'directoriesAvailableZipCodesGet',
					action: 'Get available zip codes by country and number',
				},
				{
					name: 'List Services',
					value: 'directoriesServicesGet',
					action: 'Get available telephony services by country',
				},
				{
					name: 'List Countries',
					value: 'directoriesCountriesGet',
					action: 'Get available countries for telephony',
				},
				{
					name: 'List Billing Accounts',
					value: 'telephonyListGet',
					action: 'List your telephony billing accounts',
				},
				{
					name: 'List SIP Domains',
					value: 'sipDomainsGet',
					action: 'Get available default SIP domains',
				},
				{
					name: 'List Current Orders',
					value: 'currentOrderIdsGet',
					action: 'Get current telephony order IDs',
				},
				{
					name: 'Search Services',
					value: 'searchServicesGet',
					action: 'Search a service with its domain to get its billing account and type',
				},
				{
					name: 'Set Default SIP Domain',
					value: 'setDefaultSipDomainPost',
					action: 'Set the default SIP domain for a country and type',
				},

			],
			default: 'telephonyListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionAliasListGet({
			...displayOptions,
			show: { telephonyOperation: ['aliasListGet'] },
		}) as INodeProperties[]),
		...(descriptionAliasGet({
			...displayOptions,
			show: { telephonyOperation: ['aliasGet'] },
		}) as INodeProperties[]),
		...(descriptionAliasChangeContactPost({
			...displayOptions,
			show: { telephonyOperation: ['aliasChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionAliasServiceInfosGet({
			...displayOptions,
			show: { telephonyOperation: ['aliasServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionAliasServiceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['aliasServiceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesGet({
			...displayOptions,
			show: { telephonyOperation: ['linesGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesChangeContactPost({
			...displayOptions,
			show: { telephonyOperation: ['linesChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesServiceInfosGet({
			...displayOptions,
			show: { telephonyOperation: ['linesServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesServiceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['linesServiceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesHardwareListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesHardwareListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesHardwarePost({
			...displayOptions,
			show: { telephonyOperation: ['linesHardwarePost'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberGet({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberPut({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberDelete({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberDelete'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityPost({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityGet({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityPut({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityDelete({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityDelete'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesSimListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimPost({
			...displayOptions,
			show: { telephonyOperation: ['linesSimPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimGet({
			...displayOptions,
			show: { telephonyOperation: ['linesSimGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimPut({
			...displayOptions,
			show: { telephonyOperation: ['linesSimPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimDelete({
			...displayOptions,
			show: { telephonyOperation: ['linesSimDelete'] },
		}) as INodeProperties[]),
		...(descriptionTrunksListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksListGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksChangeContactPost({
			...displayOptions,
			show: { telephonyOperation: ['trunksChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionTrunksServiceInfosGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksServiceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['trunksServiceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionTrunksHardwareListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksHardwareListGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksHardwarePost({
			...displayOptions,
			show: { telephonyOperation: ['trunksHardwarePost'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberListGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberPut({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberPut'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberDelete({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberDelete'] },
		}) as INodeProperties[]),
		...(descriptionNumbersListGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersListGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPost({
			...displayOptions,
			show: { telephonyOperation: ['numbersPost'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPut({
			...displayOptions,
			show: { telephonyOperation: ['numbersPut'] },
		}) as INodeProperties[]),
		...(descriptionNumbersDelete({
			...displayOptions,
			show: { telephonyOperation: ['numbersDelete'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityListGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityListGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityPost({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityPost'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityPut({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityPut'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityDelete({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityDelete'] },
		}) as INodeProperties[]),
		...(descriptionAccessoriesGet({
			...displayOptions,
			show: { telephonyOperation: ['accessoriesGet'] },
		}) as INodeProperties[]),
		...(descriptionLineOffersGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOffersGet'] },
		}) as INodeProperties[]),
		...(descriptionLineOfferPhonesGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOfferPhonesGet'] },
		}) as INodeProperties[]),
		...(descriptionFaxOffersGet({
			...displayOptions,
			show: { telephonyOperation: ['faxOffersGet'] },
		}) as INodeProperties[]),
		...(descriptionLineOfferDetailsGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOfferDetailsGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesCitiesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesCitiesGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesAvailableZipCodesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesAvailableZipCodesGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesServicesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesCountriesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesCountriesGet'] },
		}) as INodeProperties[]),
		...(descriptionTelephonyListGet({
			...displayOptions,
			show: { telephonyOperation: ['telephonyListGet'] },
		}) as INodeProperties[]),
		...(descriptionSipDomainsGet({
			...displayOptions,
			show: { telephonyOperation: ['sipDomainsGet'] },
		}) as INodeProperties[]),
		...(descriptionCurrentOrderIdsGet({
			...displayOptions,
			show: { telephonyOperation: ['currentOrderIdsGet'] },
		}) as INodeProperties[]),
		...(descriptionSearchServicesGet({
			...displayOptions,
			show: { telephonyOperation: ['searchServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionSetDefaultSipDomainPost({
			...displayOptions,
			show: { telephonyOperation: ['setDefaultSipDomainPost'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('telephonyOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'aliasListGet':
			return executeAliasListGet.call(this, itemIndex);
		case 'aliasGet':
			return executeAliasGet.call(this, itemIndex);
		case 'aliasChangeContactPost':
			return executeAliasChangeContactPost.call(this, itemIndex);
		case 'aliasServiceInfosGet':
			return executeAliasServiceInfosGet.call(this, itemIndex);
		case 'aliasServiceInfosPut':
			return executeAliasServiceInfosPut.call(this, itemIndex);
		case 'linesListGet':
			return executeLinesListGet.call(this, itemIndex);
		case 'linesGet':
			return executeLinesGet.call(this, itemIndex);
		case 'linesChangeContactPost':
			return executeLinesChangeContactPost.call(this, itemIndex);
		case 'linesServiceInfosGet':
			return executeLinesServiceInfosGet.call(this, itemIndex);
		case 'linesServiceInfosPut':
			return executeLinesServiceInfosPut.call(this, itemIndex);
		case 'linesHardwareListGet':
			return executeLinesHardwareListGet.call(this, itemIndex);
		case 'linesHardwarePost':
			return executeLinesHardwarePost.call(this, itemIndex);
		case 'linesNumberListGet':
			return executeLinesNumberListGet.call(this, itemIndex);
		case 'linesNumberPost':
			return executeLinesNumberPost.call(this, itemIndex);
		case 'linesNumberGet':
			return executeLinesNumberGet.call(this, itemIndex);
		case 'linesNumberPut':
			return executeLinesNumberPut.call(this, itemIndex);
		case 'linesNumberDelete':
			return executeLinesNumberDelete.call(this, itemIndex);
		case 'linesPortabilityListGet':
			return executeLinesPortabilityListGet.call(this, itemIndex);
		case 'linesPortabilityPost':
			return executeLinesPortabilityPost.call(this, itemIndex);
		case 'linesPortabilityGet':
			return executeLinesPortabilityGet.call(this, itemIndex);
		case 'linesPortabilityPut':
			return executeLinesPortabilityPut.call(this, itemIndex);
		case 'linesPortabilityDelete':
			return executeLinesPortabilityDelete.call(this, itemIndex);
		case 'linesSimListGet':
			return executeLinesSimListGet.call(this, itemIndex);
		case 'linesSimPost':
			return executeLinesSimPost.call(this, itemIndex);
		case 'linesSimGet':
			return executeLinesSimGet.call(this, itemIndex);
		case 'linesSimPut':
			return executeLinesSimPut.call(this, itemIndex);
		case 'linesSimDelete':
			return executeLinesSimDelete.call(this, itemIndex);
		case 'trunksListGet':
			return executeTrunksListGet.call(this, itemIndex);
		case 'trunksGet':
			return executeTrunksGet.call(this, itemIndex);
		case 'trunksChangeContactPost':
			return executeTrunksChangeContactPost.call(this, itemIndex);
		case 'trunksServiceInfosGet':
			return executeTrunksServiceInfosGet.call(this, itemIndex);
		case 'trunksServiceInfosPut':
			return executeTrunksServiceInfosPut.call(this, itemIndex);
		case 'trunksHardwareListGet':
			return executeTrunksHardwareListGet.call(this, itemIndex);
		case 'trunksHardwarePost':
			return executeTrunksHardwarePost.call(this, itemIndex);
		case 'trunksNumberListGet':
			return executeTrunksNumberListGet.call(this, itemIndex);
		case 'trunksNumberPost':
			return executeTrunksNumberPost.call(this, itemIndex);
		case 'trunksNumberGet':
			return executeTrunksNumberGet.call(this, itemIndex);
		case 'trunksNumberPut':
			return executeTrunksNumberPut.call(this, itemIndex);
		case 'trunksNumberDelete':
			return executeTrunksNumberDelete.call(this, itemIndex);
		case 'numbersListGet':
			return executeNumbersListGet.call(this, itemIndex);
		case 'numbersGet':
			return executeNumbersGet.call(this, itemIndex);
		case 'numbersPost':
			return executeNumbersPost.call(this, itemIndex);
		case 'numbersPut':
			return executeNumbersPut.call(this, itemIndex);
		case 'numbersDelete':
			return executeNumbersDelete.call(this, itemIndex);
		case 'numbersPortabilityListGet':
			return executeNumbersPortabilityListGet.call(this, itemIndex);
		case 'numbersPortabilityPost':
			return executeNumbersPortabilityPost.call(this, itemIndex);
		case 'numbersPortabilityGet':
			return executeNumbersPortabilityGet.call(this, itemIndex);
		case 'numbersPortabilityPut':
			return executeNumbersPortabilityPut.call(this, itemIndex);
		case 'numbersPortabilityDelete':
			return executeNumbersPortabilityDelete.call(this, itemIndex);
		case 'accessoriesGet':
			return executeAccessoriesGet.call(this, itemIndex);
		case 'lineOffersGet':
			return executeLineOffersGet.call(this, itemIndex);
		case 'lineOfferPhonesGet':
			return executeLineOfferPhonesGet.call(this, itemIndex);
		case 'faxOffersGet':
			return executeFaxOffersGet.call(this, itemIndex);
		case 'lineOfferDetailsGet':
			return executeLineOfferDetailsGet.call(this, itemIndex);
		case 'directoriesCitiesGet':
			return executeDirectoriesCitiesGet.call(this, itemIndex);
		case 'directoriesAvailableZipCodesGet':
			return executeDirectoriesAvailableZipCodesGet.call(this, itemIndex);
		case 'directoriesServicesGet':
			return executeDirectoriesServicesGet.call(this, itemIndex);
		case 'directoriesCountriesGet':
			return executeDirectoriesCountriesGet.call(this, itemIndex);
		case 'telephonyListGet':
			return executeTelephonyListGet.call(this, itemIndex);
		case 'sipDomainsGet':
			return executeSipDomainsGet.call(this, itemIndex);
		case 'currentOrderIdsGet':
			return executeCurrentOrderIdsGet.call(this, itemIndex);
		case 'searchServicesGet':
			return executeSearchServicesGet.call(this, itemIndex);
		case 'setDefaultSipDomainPost':
			return executeSetDefaultSipDomainPost.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "telephony"`);
}
