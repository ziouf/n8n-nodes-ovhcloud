import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudTelephony',
	resource: 'telephony',
	operationParam: 'telephonyOperation',
	basePath: '/telephony',
	// The node declares no methods.listSearch and no operation references a
	// searchListMethod.
	listSearchMethods: [],
	// Duplicated property names in description() (n8n cannot render duplicate
	// names) — generated bug:
	skipFiles: [
		'nodes/OvhCloudTelephony/abbreviatedNumber/abbreviatedNumberPut.operation.ts',
		'nodes/OvhCloudTelephony/carrierSip/carrierSipVnoRangesPut.operation.ts',
		'nodes/OvhCloudTelephony/directories/directoriesAvailableZipCodesGet.operation.ts',
		'nodes/OvhCloudTelephony/directories/directoriesCitiesGet.operation.ts',
		'nodes/OvhCloudTelephony/directories/directoriesServicesGet.operation.ts',
		'nodes/OvhCloudTelephony/fax/faxPut.operation.ts',
		'nodes/OvhCloudTelephony/fax/faxScreenListsPut.operation.ts',
		'nodes/OvhCloudTelephony/line/lineAbbreviatedNumberPut.operation.ts',
		'nodes/OvhCloudTelephony/line/linePhoneFunctionKeyPut.operation.ts',
		'nodes/OvhCloudTelephony/line/linePhonePhonebookPhonebookContactPut.operation.ts',
		'nodes/OvhCloudTelephony/line/linePhonePhonebookPut.operation.ts',
		'nodes/OvhCloudTelephony/line/linePhoneRmaPut.operation.ts',
		'nodes/OvhCloudTelephony/line/linePut.operation.ts',
		'nodes/OvhCloudTelephony/misc/searchServicesGet.operation.ts',
		'nodes/OvhCloudTelephony/misc/sipDomainsGet.operation.ts',
		'nodes/OvhCloudTelephony/number/numberPut.operation.ts',
		'nodes/OvhCloudTelephony/offers/faxOffersGet.operation.ts',
		'nodes/OvhCloudTelephony/offers/lineOfferPhonesGet.operation.ts',
		'nodes/OvhCloudTelephony/offers/lineOffersGet.operation.ts',
		'nodes/OvhCloudTelephony/root/billingAccountPut.operation.ts',
	],
});
