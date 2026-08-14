import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudVps',
	resource: 'vps',
	operationParam: 'vpsOperation',
	basePath: '/vps',
	listSearchMethods: ['getVpsServices'],
	methodOverrides: {
		'nodes/OvhCloudVps/diskUpdatePut.operation.ts': 'post',
		'nodes/OvhCloudVps/distributionUpdatePut.operation.ts': 'post',
		'nodes/OvhCloudVps/snapshotRevertPut.operation.ts': 'post',
	},
});
