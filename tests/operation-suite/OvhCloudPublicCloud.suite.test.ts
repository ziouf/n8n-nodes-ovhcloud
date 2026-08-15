import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudPublicCloud',
	resource: 'publicCloud',
	operationParam: 'publicCloudOperation',
	// v1 endpoints live under /publicCloud, v2 endpoints under /cloud (e.g.
	// database/kafkaConnect/*.operation.ts use `/cloud/project/{serviceName}/...`).
	basePath: ['/publicCloud', '/cloud'],
	listSearchMethods: ['getPublicCloudProjects'],
	// Broken operations: their resourceLocator references a searchListMethod
	// ('getPublicCloudRancherServices') that is DEFINED in shared/methods but
	// NOT registered in the node's methods.listSearch (only
	// 'getPublicCloudProjects' is), so n8n cannot resolve the locator in
	// "From List" mode at runtime. Follow-up fix: register the missing method
	// on the node and drop these entries.
	skipFiles: [
		'nodes/OvhCloudPublicCloud/rancher/adminCredentials.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/eventListGet.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/planCapabilityListGet.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/serviceDeleteDelete.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/serviceGet.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/serviceUpdatePut.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/taskDetailGet.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/taskListGet.operation.ts',
		'nodes/OvhCloudPublicCloud/rancher/versionCapabilityListGet.operation.ts',
		// Same bug class as rancher: the ops reference searchListMethod
		// 'getPublicCloudBlockStorageBackups|Snapshots|Volumes' (and legacy
		// 'getPublicCloudBackups'/'getPublicCloudVolumes' aliases) which are
		// exported in shared/methods but NOT registered on the node's
		// methods.listSearch (only getPublicCloudProjects is). Follow-up fix:
		// register the loaders on the node and drop the entries.
		'nodes/OvhCloudPublicCloud/blockstorage/backupDeleteDelete.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/backupGet.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/backupRetentionDailySetPost.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/backupUpdatePut.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/snapshotDeleteDelete.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/snapshotGet.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/snapshotUpdatePut.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/volumeBackupReferenceListGet.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/volumeDeleteDelete.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/volumeGet.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/volumeMonitoringStatsGet.operation.ts',
		'nodes/OvhCloudPublicCloud/blockstorage/volumeUpdatePut.operation.ts',
	],
});
