import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudExchange',
	resource: 'emailExchange',
	operationParam: 'exchangeOperation',
	basePath: '/email/exchange',
	listSearchMethods: [],
});
