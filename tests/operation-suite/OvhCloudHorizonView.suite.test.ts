import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudHorizonView',
	resource: 'horizonview',
	operationParam: 'horizonViewOperation',
	basePath: '/horizonView',
	listSearchMethods: ['getHorizonViewServices'],
});
