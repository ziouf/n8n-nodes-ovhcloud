import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDedicatedCeph',
	resource: 'dedicatedCeph',
	operationParam: 'dedicatedCephOperation',
	basePath: '/dedicated/ceph',
	listSearchMethods: ['getDedicatedCephServices'],
});
