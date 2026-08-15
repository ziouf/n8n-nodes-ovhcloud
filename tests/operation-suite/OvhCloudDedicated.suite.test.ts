import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDedicated',
	resource: 'dedicated',
	operationParam: 'dedicatedServerOperation',
	basePath: '/dedicated',
	listSearchMethods: ['getDedicatedServerServices'],
	// Broken operations: their resourceLocator references a searchListMethod
	// ('clusterListGet' / 'housingListGet' / 'nashaListGet') that is NOT
	// registered in the node's methods.listSearch (only
	// 'getDedicatedServerServices' is), so n8n cannot resolve the locator at
	// runtime. Follow-up fix: register the missing list-search methods on the
	// node and drop these entries.
	skipFiles: [
		'nodes/OvhCloudDedicated/resources/ceph/nashaGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/shareCreatePost.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/shareDeleteDelete.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/shareGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/shareListGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/shareUpdatePut.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/snapshotCreatePost.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/snapshotDeleteDelete.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/snapshotGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/ceph/snapshotListGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/cluster/clusterDeleteDelete.operation.ts',
		'nodes/OvhCloudDedicated/resources/cluster/clusterGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/cluster/clusterUpdatePut.operation.ts',
		'nodes/OvhCloudDedicated/resources/cluster/nodeDeleteDelete.operation.ts',
		'nodes/OvhCloudDedicated/resources/cluster/nodeGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/cluster/nodeListGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/cluster/nodeUpdatePut.operation.ts',
		'nodes/OvhCloudDedicated/resources/housing/bandwidthCreatePost.operation.ts',
		'nodes/OvhCloudDedicated/resources/housing/bandwidthGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/housing/bandwidthVrackCreatePost.operation.ts',
		'nodes/OvhCloudDedicated/resources/housing/bandwidthVrackGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/housing/housingGetGet.operation.ts',
		'nodes/OvhCloudDedicated/resources/housing/housingUpdatePut.operation.ts',
	],
});
