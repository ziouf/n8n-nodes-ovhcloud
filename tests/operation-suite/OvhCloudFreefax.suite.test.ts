import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudFreefax',
	resource: 'freefax',
	operationParam: 'freefaxOperation',
	basePath: '/freefax',
	listSearchMethods: ['getFreefaxServices'],
});
