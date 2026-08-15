import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudOverTheBox',
	resource: 'overthebox',
	operationParam: 'overTheBoxOperation',
	basePath: '/overTheBox',
	listSearchMethods: ['getOverTheBoxServices'],
});
