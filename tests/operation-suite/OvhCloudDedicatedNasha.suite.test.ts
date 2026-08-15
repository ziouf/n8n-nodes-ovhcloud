import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDedicatedNasha',
	resource: 'dedicatedNasha',
	operationParam: 'dedicatedNashaOperation',
	basePath: '/dedicated',
	listSearchMethods: ['getDedicatedNashaServices'],
});
