import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudPrice',
	resource: 'price',
	operationParam: 'priceOperation',
	basePath: '/price',
	// The node declares no methods.listSearch and no operation references a
	// searchListMethod.
	listSearchMethods: [],
});
