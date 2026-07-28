import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Volume operations (depth 3)
import { description as volumeListGetDescription, execute as volumeListGetExecute } from './volume/listGet.operation';
// Volume operations (depth 3)
import { description as createVolumePostDescription, execute as createVolumePostExecute } from './volume/createPost.operation';
// Volume operations (depth 3)
import { description as getDetail_volumeIdDescription, execute as getDetail_volumeIdExecute } from './volume/getGet.operation';
// Volume operations (depth 3)
import { description as updateVolumePutDescription, execute as updateVolumePutExecute } from './volume/updatePut.operation';
// Volume operations (depth 3)
import { description as deleteVolumeDeleteDescription, execute as deleteVolumeDeleteExecute } from './volume/deleteDelete.operation';
// Volume operations (depth 3)
import { description as listCapabilitiesTypesByRegionNameDescription, execute as listCapabilitiesTypesByRegionNameExecute } from './volume/capabilitiesListGet.operation';
// Volume operations (depth 3)
import { description as planCapabilityDetailGetByRegionNameDescription, execute as planCapabilityDetailGetByRegionNameExecute } from './volume/planCapabilityListGetByRegionNameGet.operation';
// Volume operations (depth 3)
import { description as getMonitoringStatsForAVolumeIdDescription, execute as getMonitoringStatsForAVolumeIdExecute } from './volume/monitoringStatsGet.operation';
// Volume operations (depth 3)
import { description as listBackupReferenceListGetForVolumeIdDescription, execute as listBackupReferenceListGetForVolumeIdExecute } from './volume/backupReferenceListGet.operation';

// Backup operations (depth 3)
import { description as backupListGetByRegionNameDescription, execute as backupListGetByRegionNameExecute } from './backup/listGet.operation';
// Backup operations (depth 3)
import { description as createFromVolumeOrSnapshotIdPostBackupDescription, execute as createFromVolumeOrSnapshotIdPostBackupExecute } from './backup/createPost.operation';
// Backup operations (depth 3)
import { description as getDetail_backupByIdDescription, execute as getDetail_backupByIdExecute } from './backup/getGet.operation';
// Backup operations (depth 3)
import { description as suspendResumeUpdateBackupPutDescription, execute as suspendResumeUpdateBackupPutExecute } from './backup/updatePut.operation';
// Backup operations (depth 3)
import { description as deleteBackupDeleteDescription, execute as deleteBackupDeleteExecute } from './backup/deleteDelete.operation';
// Backup operations (depth 3)
import { description as setRetentionAgeInDaysForABackupPostDescription, execute as setRetentionAgeInDaysForABackupPostExecute } from './backup/retentionDailySetPost.operation';

// Snapshot operations (depth 3)
import { description as snapshotListGetByRegionNameDescription, execute as snapshotListGetByRegionNameExecute } from './snapshot/listGet.operation';
// Snapshot operations (depth 3)
import { description as createFromVolumeIdPostSnapshotDescription, execute as createFromVolumeIdPostSnapshotExecute } from './snapshot/createPost.operation';
// Snapshot operations (depth 3)
import { description as getDetail_snapshotByIdDescription, execute as getDetail_snapshotByIdExecute } from './snapshot/getGet.operation';
// Snapshot operations (depth 3)
import { description as suspendResumeUpdateSnapshotPutDescription, execute as suspendResumeUpdateSnapshotPutExecute } from './snapshot/updatePut.operation';
// Snapshot operations (depth 3)
import { description as deleteSnapshotDeleteDescription, execute as deleteSnapshotDeleteExecute } from './snapshot/deleteDelete.operation';

// Top-level operations (depth 1)
import { description as volumeCapabilityDetailGetByRegionNameForAProjectDescription, execute as volumeCapabilityDetailGetByRegionNameForAProjectExecute } from './volumeCapabilityListGetByRegionNameGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Operation',
		name: 'publicCloudBlockStorageOperation',
		type: 'options',
		noDataExpression: true,
		options: [
		{ name: 'Backup List Get', value: 'backupListGetByRegionName' },
		{ name: 'Create Backup From Volume Or Snapshot ID Post', value: 'createBackupFromVolumeOrSnapshotIdPost' },
		{ name: 'Create Snapshot From Volume ID Post', value: 'createSnapshotFromVolumeIdPost' },
		{ name: 'Create Volume', value: 'createVolumePost' },
		{ name: 'Delete Backup', value: 'deleteBackupDelete' },
		{ name: 'Delete Snapshot', value: 'deleteSnapshotDelete' },
		{ name: 'Delete Volume', value: 'deleteVolumeDelete' },
		{ name: 'Get Backup Detail By ID', value: 'getDetail_backupById' },
		{ name: 'Get Snapshot Detail By ID', value: 'getDetail_snapshotById' },
		{ name: 'List Backup References For A Volume ID', value: 'listBackupReferencesForAVolumeId' },
		{ name: 'List Capabilities Types For A Region Name', value: 'listCapabilitiesTypesByRegionName' },
		{ name: 'Monitoring Stats Get By Region Name For A Volume ID', value: 'getMonitoringStatsForAVolumeId' },
		{ name: 'Plan Capability Details Get By Region Name', value: 'planCapabilityDetailGetByRegionName' },
		{ name: 'Set Backup Daily Retention Age In Days For A Volume', value: 'setRetentionAgeInDaysForABackupPost' },
		{ name: 'Snapshot List Get', value: 'snapshotListGetByRegionName' },
		{ name: 'Update Backup Suspend Or Resume', value: 'suspendResumeUpdateBackupPut' },
		{ name: 'Update Snapshot Suspend Or Resume', value: 'suspendResumeUpdateSnapshotPut' },
		{ name: 'Update Volume', value: 'updateVolumePut' },
		{ name: 'Volume Capability Details Get By Region Name For A Project', value: 'volumeCapabilityDetailGetByRegionNameForAProject' },
		{ name: 'Volume Detail Get By ID', value: 'getDetail_volumeId' },
		{ name: 'Volume List Get', value: 'volumeListGet' }
	],

	default: 'volumeListGet',
	displayOptions,
});
	properties.push(...volumeListGetDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['volumeListGet' ] } }) as INodeProperties[]);
	properties.push(...createVolumePostDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['createVolumePost' ] } }) as INodeProperties[]);
	properties.push(...getDetail_volumeIdDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['getDetail_volumeId' ] } }) as INodeProperties[]);
	properties.push(...updateVolumePutDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['updateVolumePut' ] } }) as INodeProperties[]);
	properties.push(...deleteVolumeDeleteDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['deleteVolumeDelete' ] } }) as INodeProperties[]);
	properties.push(...listCapabilitiesTypesByRegionNameDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['listCapabilitiesTypesByRegionName' ] } }) as INodeProperties[]);
	properties.push(...planCapabilityDetailGetByRegionNameDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['planCapabilityDetailGetByRegionName' ] } }) as INodeProperties[]);
	properties.push(...getMonitoringStatsForAVolumeIdDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['getMonitoringStatsForAVolumeId' ] } }) as INodeProperties[]);
	properties.push(...listBackupReferenceListGetForVolumeIdDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['listBackupReferencesForAVolumeId' ] } }) as INodeProperties[]);
	properties.push(...backupListGetByRegionNameDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['backupListGetByRegionName' ] } }) as INodeProperties[]);
	properties.push(...createFromVolumeOrSnapshotIdPostBackupDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['createBackupFromVolumeOrSnapshotIdPost' ] } }) as INodeProperties[]);
	properties.push(...getDetail_backupByIdDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['getDetail_backupById' ] } }) as INodeProperties[]);
	properties.push(...suspendResumeUpdateBackupPutDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['suspendResumeUpdateBackupPut' ] } }) as INodeProperties[]);
	properties.push(...deleteBackupDeleteDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['deleteBackupDelete' ] } }) as INodeProperties[]);
	properties.push(...setRetentionAgeInDaysForABackupPostDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['setRetentionAgeInDaysForABackupPost' ] } }) as INodeProperties[]);
	properties.push(...snapshotListGetByRegionNameDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['snapshotListGetByRegionName' ] } }) as INodeProperties[]);
	properties.push(...createFromVolumeIdPostSnapshotDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['createSnapshotFromVolumeIdPost' ] } }) as INodeProperties[]);
	properties.push(...getDetail_snapshotByIdDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['getDetail_snapshotById' ] } }) as INodeProperties[]);
	properties.push(...suspendResumeUpdateSnapshotPutDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['suspendResumeUpdateSnapshotPut' ] } }) as INodeProperties[]);
	properties.push(...deleteSnapshotDeleteDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['deleteSnapshotDelete' ] } }) as INodeProperties[]);
	properties.push(...volumeCapabilityDetailGetByRegionNameForAProjectDescription({ ...displayOptions, show: { publicCloudBlockStorageOperation: ['volumeCapabilityDetailGetByRegionNameForAProject' ] } }) as INodeProperties[]);

	return properties;
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('publicCloudBlockStorageOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'volumeListGet': return volumeListGetExecute.call(this);
		case 'createVolumePost': return createVolumePostExecute.call(this);
		case 'getDetail_volumeId': return getDetail_volumeIdExecute.call(this);
		case 'updateVolumePut': return updateVolumePutExecute.call(this);
		case 'deleteVolumeDelete': return deleteVolumeDeleteExecute.call(this);
		case 'listCapabilitiesTypesByRegionName': return listCapabilitiesTypesByRegionNameExecute.call(this);
		case 'planCapabilityDetailGetByRegionName': return planCapabilityDetailGetByRegionNameExecute.call(this);
		case 'getMonitoringStatsForAVolumeId': return getMonitoringStatsForAVolumeIdExecute.call(this);
		case 'listBackupReferencesForAVolumeId': return listBackupReferenceListGetForVolumeIdExecute.call(this);
		case 'backupListGetByRegionName': return backupListGetByRegionNameExecute.call(this);
		case 'createBackupFromVolumeOrSnapshotIdPost': return createFromVolumeOrSnapshotIdPostBackupExecute.call(this);
		case 'getDetail_backupById': return getDetail_backupByIdExecute.call(this);
		case 'suspendResumeUpdateBackupPut': return suspendResumeUpdateBackupPutExecute.call(this);
		case 'deleteBackupDelete': return deleteBackupDeleteExecute.call(this);
		case 'setRetentionAgeInDaysForABackupPost': return setRetentionAgeInDaysForABackupPostExecute.call(this);
		case 'snapshotListGetByRegionName': return snapshotListGetByRegionNameExecute.call(this);
		case 'createSnapshotFromVolumeIdPost': return createFromVolumeIdPostSnapshotExecute.call(this);
		case 'getDetail_snapshotById': return getDetail_snapshotByIdExecute.call(this);
		case 'suspendResumeUpdateSnapshotPut': return suspendResumeUpdateSnapshotPutExecute.call(this);
		case 'deleteSnapshotDelete': return deleteSnapshotDeleteExecute.call(this);
		case 'volumeCapabilityDetailGetByRegionNameForAProject': return volumeCapabilityDetailGetByRegionNameForAProjectExecute.call(this);
	default:
		throw new Error(`Unsupported operation "${operation}" for resource "publicCloudBlockStorage"`);
	}
}
