import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudAllDom',
	resource: 'alldom',
	operationParam: 'allDomOperation',
	basePath: '/allDom',
	listSearchMethods: ['getAllDomServices'],
});
