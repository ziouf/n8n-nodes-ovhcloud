import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	description as projectListGetDescription,
	execute as projectListGetExecute,
} from './project/listGet.operation';
import {
	description as projectDetailGetDescription,
	execute as projectDetailGetExecute,
} from './project/getDetailGet.operation';

import {
	description as rancherServiceListGetDescription,
	execute as rancherServiceListGetExecute,
} from './rancher/serviceListGet.operation';
import {
	description as rancherServiceGetDescription,
	execute as rancherServiceGetExecute,
} from './rancher/serviceGet.operation';
import {
	description as rancherPlanCapabilityListGetDescription,
	execute as rancherPlanCapabilityListGetExecute,
} from './rancher/planCapabilityListGet.operation';
import {
	description as rancherVersionCapabilityListGetDescription,
	execute as rancherVersionCapabilityListGetExecute,
} from './rancher/versionCapabilityListGet.operation';

import {
	description as volumeListGetDescription,
	execute as volumeListGetExecute,
} from './blockstorage/volumeListGet.operation';
import {
	description as volumeGetDescription,
	execute as volumeGetExecute,
} from './blockstorage/volumeGet.operation';
import {
	description as volumeCreatePostDescription,
	execute as volumeCreatePostExecute,
} from './blockstorage/volumeCreatePost.operation';
import {
	description as volumeUpdatePutDescription,
	execute as volumeUpdatePutExecute,
} from './blockstorage/volumeUpdatePut.operation';
import {
	description as volumeDeleteDeleteDescription,
	execute as volumeDeleteDeleteExecute,
} from './blockstorage/volumeDeleteDelete.operation';

import {
	description as backupListGetDescription,
	execute as backupListGetExecute,
} from './blockstorage/backupListGet.operation';
import {
	description as backupGetDescription,
	execute as backupGetExecute,
} from './blockstorage/backupGet.operation';
import {
	description as backupCreatePostDescription,
	execute as backupCreatePostExecute,
} from './blockstorage/backupCreatePost.operation';
import {
	description as backupUpdatePutDescription,
	execute as backupUpdatePutExecute,
} from './blockstorage/backupUpdatePut.operation';
import {
	description as backupDeleteDeleteDescription,
	execute as backupDeleteDeleteExecute,
} from './blockstorage/backupDeleteDelete.operation';

import {
	description as snapshotListGetDescription,
	execute as snapshotListGetExecute,
} from './blockstorage/snapshotListGet.operation';
import {
	description as snapshotGetDescription,
	execute as snapshotGetExecute,
} from './blockstorage/snapshotGet.operation';
import {
	description as snapshotCreatePostDescription,
	execute as snapshotCreatePostExecute,
} from './blockstorage/snapshotCreatePost.operation';
import {
	description as snapshotUpdatePutDescription,
	execute as snapshotUpdatePutExecute,
} from './blockstorage/snapshotUpdatePut.operation';
import {
	description as snapshotDeleteDeleteDescription,
	execute as snapshotDeleteDeleteExecute,
} from './blockstorage/snapshotDeleteDelete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Operation',
		name: 'publicCloudOperation',
		type: 'options',
		noDataExpression: true,
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Create Backup',
				value: 'createBackupPost',
				action: 'Create a new block storage backup',
			},
			{
				name: 'Create Snapshot',
				value: 'createSnapshotPost',
				action: 'Create a new block storage snapshot',
			},
			{
				name: 'Create Volume',
				value: 'createVolumePost',
				action: 'Create a new block storage volume',
			},
			{ name: 'Delete Backup', value: 'deleteBackupDelete', action: 'Delete a specific backup' },
			{
				name: 'Delete Snapshot',
				value: 'deleteSnapshotDelete',
				action: 'Delete a specific snapshot',
			},
			{ name: 'Delete Volume', value: 'deleteVolumeDelete', action: 'Delete a specific volume' },
			{
				name: 'Get Backup Details',
				value: 'getBackupDetail',
				action: 'Get details of a specific backup',
			},
			{
				name: 'Get Project Details',
				value: 'getProjectDetail',
				action: 'Get details of a specific Public Cloud project',
			},
			{
				name: 'Get Rancher Service',
				value: 'getRancherService',
				action: 'Get details of a specific Rancher service',
			},
			{
				name: 'Get Snapshot Details',
				value: 'getSnapshotDetail',
				action: 'Get details of a specific snapshot',
			},
			{
				name: 'Get Volume Details',
				value: 'getVolumeDetail',
				action: 'Get details of a specific volume',
			},
			{
				name: 'List Backups',
				value: 'backupListGet',
				action: 'List block storage backups in a project',
			},
			{ name: 'List Projects', value: 'projectListGet', action: 'List all Public Cloud projects' },
			{
				name: 'List Plan Capabilities',
				value: 'rancherPlanCapabilityListGet',
				action: 'List available plan capabilities for a Rancher service',
			},
			{
				name: 'List Rancher Services',
				value: 'rancherServiceListGet',
				action: 'List Rancher services for a project',
			},
			{
				name: 'List Snapshots',
				value: 'snapshotListGet',
				action: 'List block storage snapshots in a project',
			},
			{
				name: 'List Version Capabilities',
				value: 'rancherVersionCapabilityListGet',
				action: 'List available version capabilities for a Rancher service',
			},
			{
				name: 'List Volumes',
				value: 'volumeListGet',
				action: 'List block storage volumes in a project',
			},
			{ name: 'Update Backup', value: 'updateBackupPut', action: 'Update an existing backup' },
			{
				name: 'Update Snapshot',
				value: 'updateSnapshotPut',
				action: 'Update an existing snapshot',
			},
			{ name: 'Update Volume', value: 'updateVolumePut', action: 'Update an existing volume' },
		],
		default: 'projectListGet',
		displayOptions,
	});

	properties.push(...projectListGetDescription());

	properties.push(
		...(backupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['backupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['createBackupPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['createSnapshotPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['createVolumePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['deleteBackupDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['deleteSnapshotDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['deleteVolumeDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getBackupDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(projectDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getProjectDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherServiceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getRancherService'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getSnapshotDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getVolumeDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherPlanCapabilityListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherPlanCapabilityListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherServiceListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherServiceListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherVersionCapabilityListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherVersionCapabilityListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['snapshotListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['updateBackupPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['updateSnapshotPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['updateVolumePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['volumeListGet'] },
		}) as INodeProperties[]),
	);

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('publicCloudOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'projectListGet':
			return projectListGetExecute.call(this);
		case 'backupListGet':
			return backupListGetExecute.call(this);
		case 'createBackupPost':
			return backupCreatePostExecute.call(this);
		case 'createSnapshotPost':
			return snapshotCreatePostExecute.call(this);
		case 'createVolumePost':
			return volumeCreatePostExecute.call(this);
		case 'deleteBackupDelete':
			return backupDeleteDeleteExecute.call(this);
		case 'deleteSnapshotDelete':
			return snapshotDeleteDeleteExecute.call(this);
		case 'deleteVolumeDelete':
			return volumeDeleteDeleteExecute.call(this);
		case 'getBackupDetail':
			return backupGetExecute.call(this);
		case 'getProjectDetail':
			return projectDetailGetExecute.call(this);
		case 'getRancherService':
			return rancherServiceGetExecute.call(this);
		case 'getSnapshotDetail':
			return snapshotGetExecute.call(this);
		case 'getVolumeDetail':
			return volumeGetExecute.call(this);
		case 'rancherPlanCapabilityListGet':
			return rancherPlanCapabilityListGetExecute.call(this);
		case 'rancherServiceListGet':
			return rancherServiceListGetExecute.call(this);
		case 'rancherVersionCapabilityListGet':
			return rancherVersionCapabilityListGetExecute.call(this);
		case 'snapshotListGet':
			return snapshotListGetExecute.call(this);
		case 'updateBackupPut':
			return backupUpdatePutExecute.call(this);
		case 'updateSnapshotPut':
			return snapshotUpdatePutExecute.call(this);
		case 'updateVolumePut':
			return volumeUpdatePutExecute.call(this);
		case 'volumeListGet':
			return volumeListGetExecute.call(this);

		default:
			throw new Error(`Unsupported operation "${operation}" for resource "publicCloud"`);
	}
}
