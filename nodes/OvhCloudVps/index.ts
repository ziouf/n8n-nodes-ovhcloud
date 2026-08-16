import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeList, description as descriptionList } from './list.operation';
import {
	execute as executeDistributionGet,
	description as descriptionDistributionGet,
} from './distributionGet.operation';
import {
	execute as executeDistributionList,
	description as descriptionDistributionList,
} from './distributionList.operation';
import {
	execute as executeImageGet,
	description as descriptionImageGet,
} from './imageGet.operation';
import {
	execute as executeImageList,
	description as descriptionImageList,
} from './imageList.operation';
import {
	execute as executeIpGeolocationGet,
	description as descriptionIpGeolocationGet,
} from './ipGeolocationGet.operation';
import { execute as executeIpGet, description as descriptionIpGet } from './ipGet.operation';
import { execute as executeIpList, description as descriptionIpList } from './ipList.operation';
import {
	execute as executeMigrationMigrationIdGet,
	description as descriptionMigrationMigrationIdGet,
} from './migrationMigrationIdGet.operation';
import {
	execute as executeMigrationMigrationIdStepGet,
	description as descriptionMigrationMigrationIdStepGet,
} from './migrationMigrationIdStepGet.operation';
import {
	execute as executeModelList,
	description as descriptionModelList,
} from './modelList.operation';
import {
	execute as executeNetbootConfigGet,
	description as descriptionNetbootConfigGet,
} from './netbootConfigGet.operation';
import {
	execute as executeNetbootOrderGet,
	description as descriptionNetbootOrderGet,
} from './netbootOrderGet.operation';
import {
	execute as executeNetbootTemplateDetailsGet,
	description as descriptionNetbootTemplateDetailsGet,
} from './netbootTemplateDetailsGet.operation';
import {
	execute as executeOptionDetailGet,
	description as descriptionOptionDetailGet,
} from './optionDetailGet.operation';
import {
	execute as executeOptionList,
	description as descriptionOptionList,
} from './optionList.operation';
import {
	execute as executePowerOffGet,
	description as descriptionPowerOffGet,
} from './powerOffGet.operation';
import {
	execute as executeRebootHardGet,
	description as descriptionRebootHardGet,
} from './rebootHardGet.operation';
import {
	execute as executeSecondaryDnsDomainListDomains,
	description as descriptionSecondaryDnsDomainListDomains,
} from './secondaryDnsDomainListDomains.operation';
import {
	execute as executeSecondaryDnsServerList,
	description as descriptionSecondaryDnsServerList,
} from './secondaryDnsServerList.operation';
import {
	execute as executeSecondaryDnsAttachPut,
	description as descriptionSecondaryDnsAttachPut,
} from './secondaryDnsAttachPut.operation';
import {
	execute as executeServiceInformationGet,
	description as descriptionServiceInformationGet,
} from './serviceInformationGet.operation';
import {
	execute as executeSnapshotListSnapshotsForVps,
	description as descriptionSnapshotListSnapshotsForVps,
} from './snapshotListSnapshotsForVps.operation';
import {
	execute as executeStatusTaskIdGet,
	description as descriptionStatusTaskIdGet,
} from './statusTaskIdGet.operation';
import {
	execute as executeTemplateGet,
	description as descriptionTemplateGet,
} from './templateGet.operation';
import {
	execute as executeDatacenterList,
	description as descriptionDatacenterList,
} from './datacenterList.operation';
import {
	execute as executeDiskList,
	description as descriptionDiskList,
} from './diskList.operation';
import {
	execute as executeAvailableUpgradeList,
	description as descriptionAvailableUpgradeList,
} from './availableUpgradeList.operation';
import {
	execute as executeBackupFtpList,
	description as descriptionBackupFtpList,
} from './backupFtpList.operation';
import {
	execute as executeAutomatedBackupList,
	description as descriptionAutomatedBackupList,
} from './automatedBackupList.operation';

import {
	execute as executeAbortSnapshotPost,
	description as descriptionAbortSnapshotPost,
} from './abortSnapshotPost.operation';
import {
	execute as executeAutomatedBackupReschedulePost,
	description as descriptionAutomatedBackupReschedulePost,
} from './automatedBackupReschedulePost.operation';
import {
	execute as executeAutomatedBackupSetPost,
	description as descriptionAutomatedBackupSetPost,
} from './automatedBackupSetPost.operation';
import {
	execute as executeDatacenterAvailabilityRawGet,
	description as descriptionDatacenterAvailabilityRawGet,
} from './datacenterAvailabilityRawGet.operation';
import {
	execute as executeDiskCreatePost,
	description as descriptionDiskCreatePost,
} from './diskCreatePost.operation';
import {
	execute as executeDiskDetailGet,
	description as descriptionDiskDetailGet,
} from './diskGet.operation';
import {
	execute as executeDiskMonitoringStatsGet,
	description as descriptionDiskMonitoringStatsGet,
} from './diskMonitoringStatsGet.operation';
import {
	execute as executeDiskUpdatePut,
	description as descriptionDiskUpdatePut,
} from './diskUpdatePut.operation';
import {
	execute as executeDistributionUpdatePut,
	description as descriptionDistributionUpdatePut,
} from './distributionUpdatePut.operation';
import {
	execute as executeGetSnapshotImage,
	description as descriptionGetSnapshotImage,
} from './snapshotGetImageGet.operation';
import {
	execute as executeIpCountryAvailableGet,
	description as descriptionIpCountryAvailableGet,
} from './ipCountryAvailableGet.operation';
import {
	execute as executeIpReleaseDelete,
	description as descriptionIpReleaseDelete,
} from './ipReleaseDelete.operation';
import {
	execute as executeNetbootCreatePost,
	description as descriptionNetbootCreatePost,
} from './netbootCreatePost.operation';
import {
	execute as executeRestorePointListGet,
	description as descriptionRestorePointListGet,
} from './restorePointListGet.operation';
import {
	execute as executeServiceSecretGet,
	description as descriptionServiceSecretGet,
} from './serviceSecretGet.operation';
import {
	execute as executeSnapshotCreatePost,
	description as descriptionSnapshotCreatePost,
} from './snapshotCreatePost.operation';
import {
	execute as executeSnapshotRevertPut,
	description as descriptionSnapshotRevertPut,
} from './snapshotRevertPut.operation';
import {
	execute as executeTemplateApplyPost,
	description as descriptionTemplateApplyPost,
} from './templateApplyPost.operation';

import {
	execute as executePowerStartPost,
	description as descriptionPowerStartPost,
} from './powerStartPost.operation';
import {
	execute as executePowerStopDelete,
	description as descriptionPowerStopDelete,
} from './powerStopDelete.operation';
import {
	execute as executePowerRebootDelete,
	description as descriptionPowerRebootDelete,
} from './powerRebootDelete.operation';
import {
	execute as executeSshKeyListGet,
	description as descriptionSshKeyListGet,
} from './sshKeyListGet.operation';

// Operations wired from audit (Phase 2a)
import {
	execute as executeAutomatedBackupRestore,
	description as descriptionAutomatedBackupRestore,
} from './automatedBackupRestoreCreate.operation';
import {
	execute as executeBackupFtpAccessPost,
	description as descriptionBackupFtpAccessPost,
} from './backupFtpAccessPostVps.operation';
import {
	execute as executeBackupRestoreList,
	description as descriptionBackupRestoreList,
} from './backupRestoreListGet.operation';
import {
	execute as executeChangeContact,
	description as descriptionChangeContact,
} from './changeContactCreateVps.operation';
import {
	execute as executeConfirmTermination,
	description as descriptionConfirmTermination,
} from './confirmTerminationCreateVps.operation';
import { execute as executeIpAdd, description as descriptionIpAdd } from './ipAdd.operation';
import {
	execute as executeVpsUpdate,
	description as descriptionVpsUpdate,
} from './vpsUpdate.operation';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vpsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Abort Snapshot', value: 'abortSnapshot', action: 'Abort a snapshot creation for the VPS' },
				{
					name: 'Add Backup FTP Access',
					value: 'backupFtpAccessPost',
					action: 'Add an IP access rule to the VPS backup FTP',
				},
				{ name: 'Add IP', value: 'ipAdd', action: 'Add a failover IP to the VPS' },
				{
					name: 'Apply Netboot Template',
					value: 'templateApplyPost',
					action: 'Apply netboot template to the VPS',
				},
				{
					name: 'Attach Secondary DNS',
					value: 'attachSecondaryDns',
					action: 'Attach a secondary DNS to a VPS',
				},
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Launch a contact change for the VPS service',
				},
				{
					name: 'Check Power Off Status',
					value: 'powerOffGet',
					action: 'Check power off status of a VPS',
				},
				{
					name: 'Check Reboot Status',
					value: 'rebootHardGet',
					action: 'Check reboot status of a VPS',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of the VPS service (irreversible)',
				},
				{ name: 'Create Disk', value: 'createDiskPost', action: 'Create a new disk for the VPS' },
				{ name: 'Create Netboot Order Config', value: 'netbootCreatePost', action: 'Create a netboot order configuration for the VPS' },
				{
					name: 'Create Snapshot',
					value: 'snapshotCreatePost',
					action: 'Create a new snapshot for the VPS',
				},
				{ name: 'Get', value: 'get', action: 'Get VPS service details' },
				{
					name: 'Get Available IP Countries',
					value: 'ipCountryAvailableGet',
					action: 'List available IP countries per region',
				},
				{
					name: 'Get Datacenter Availability',
					value: 'datacenterAvailabilityRawGet',
					action: 'Check raw datacenter availability for a VPS',
				},
				{
					name: 'Get Disk Detail',
					value: 'diskDetailGet',
					action: 'Get detail of a specific VPS disk',
				},
				{
					name: 'Get Disk Monitoring Stats',
					value: 'diskMonitoringStatsGet',
					action: 'Get monitoring stats for a disk',
				},
				{ name: 'Get Distribution', value: 'distributionGet', action: 'Get distribution details' },
				{ name: 'Get Image', value: 'imageGet', action: 'Get image details' },
				{ name: 'Get IP', value: 'ipGet', action: 'Get IP address details' },
				{
					name: 'Get IP Geolocation',
					value: 'ipGeolocationGet',
					action: 'Get IP geolocation info',
				},
				{
					name: 'Get Kernel Configs',
					value: 'netbootConfigGet',
					action: 'Get kernel/netboot config for a VPS',
				},
				{
					name: 'Get Migration',
					value: 'migrationMigrationIdGet',
					action: 'Get migration details by ID',
				},
				{
					name: 'Get Migration Step',
					value: 'migrationMigrationIdStepGet',
					action: 'Get migration step details',
				},
				{
					name: 'Get Netboot Order Config',
					value: 'netbootOrderGet',
					action: 'Get netboot order configuration',
				},
				{
					name: 'Get Netboot Template Details',
					value: 'netbootTemplateDetailsGet',
					action: 'Get netboot template details',
				},
				{ name: 'Get Option Details', value: 'optionDetailGet', action: 'Get option type details' },
				{
					name: 'Get Service Information',
					value: 'serviceInformationGet',
					action: 'Get service information for a VPS',
				},
				{
					name: 'Get Service Secret Key',
					value: 'serviceSecretGet',
					action: 'Get authentication secret key for a VPS',
				},
				{
					name: 'Get Snapshot Image',
					value: 'getSnapshotImage',
					action: 'Get image of a snapshot',
				},
				{
					name: 'Get Task Status',
					value: 'statusTaskIdGet',
					action: 'Check status of a task by ID',
				},
				{ name: 'Get Template Details', value: 'templateGet', action: 'Get template details' },
				{
					name: 'List Automated Backups',
					value: 'automatedBackupList',
					action: 'List automated backups for a VPS',
				},
				{
					name: 'List Available Upgrades',
					value: 'availableUpgradeList',
					action: 'Get available upgrades for a VPS',
				},
				{
					name: 'List Backup FTP Configs',
					value: 'backupFtpList',
					action: 'List backup FTP configurations',
				},
				{
					name: 'List Backup Restores',
					value: 'backupRestoreList',
					action: 'List attached backups available for restore',
				},
				{
					name: 'List Datacenters',
					value: 'datacenterList',
					action: 'Get available datacenters for a VPS',
				},
				{ name: 'List Disks', value: 'diskList', action: 'List disks attached to a VPS' },
				{
					name: 'List Distributions',
					value: 'distributionList',
					action: 'List available distributions for a VPS',
				},
				{ name: 'List Images', value: 'imageList', action: 'List available images for a VPS' },
				{ name: 'List IPs', value: 'ipList', action: 'List IPs attached to a VPS' },
				{ name: 'List Models', value: 'modelList', action: 'List available VPS models' },
				{ name: 'List Options', value: 'optionList', action: 'List available options for a VPS' },
				{
					name: 'List Restore Points',
					value: 'restorePointListGet',
					action: 'List restore points for a backup',
				},
				{
					name: 'List Secondary DNS Domains',
					value: 'secondaryDnsDomainListDomains',
					action: 'List secondary DNS domains',
				},
				{
					name: 'List Secondary DNS Servers',
					value: 'secondaryDnsServerList',
					action: 'List secondary DNS servers',
				},
				{
					name: 'List Snapshots',
					value: 'snapshotListSnapshotsForVps',
					action: 'List snapshots for a VPS',
				},
				{
					name: 'List SSH Keys',
					value: 'listSshKeys',
					action: 'List SSH keys for a VPS',
				},
				{ name: 'List VPS Services', value: 'list', action: 'List all VPS services' },
				{
					name: 'Power Off VPS',
					value: 'powerStopDelete',
					action: 'Request shutdown for the VPS',
				},
				{
					name: 'Power On VPS',
					value: 'powerStartPost',
					action: 'Request power on for the VPS',
				},
				{
					name: 'Reboot VPS',
					value: 'powerRebootDelete',
					action: 'Request hard reboot for the VPS',
				},
				{
					name: 'Release IP Address',
					value: 'releaseIpDelete',
					action: 'Release an IP address from the VPS',
				},
				{
					name: 'Reschedule Automated Backup',
					value: 'automatedBackupReschedulePost',
					action: 'Reschedule an automated backup for a VPS',
				},
				{
					name: 'Restore Automated Backup',
					value: 'automatedBackupRestore',
					action: 'Restore the VPS from an automated backup (irreversible)',
				},
				{
					name: 'Revert Snapshot',
					value: 'revertSnapshot',
					action: 'Revert the VPS to a specific snapshot',
				},
				{
					name: 'Set Automated Backup Restore Plan',
					value: 'automatedBackupSetPost',
					action: 'Set a backup restore plan for a VPS',
				},
				{
					name: 'Update Disk',
					value: 'updateDiskPut',
					action: 'Update a specific VPS disk (resize or rename)',
				},
				{
					name: 'Update Distribution',
					value: 'distributionUpdatePut',
					action: 'Update the distribution of the VPS',
				},
				{
					name: 'Update VPS',
					value: 'vpsUpdate',
					action: 'Update VPS service properties (e.g. name)',
				},
			],
			default: 'get',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionAvailableUpgradeList({
			...displayOptions,
			show: { vpsOperation: ['availableUpgradeList'] },
		}) as INodeProperties[]),
		...(descriptionAutomatedBackupList({
			...displayOptions,
			show: { vpsOperation: ['automatedBackupList'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpList({
			...displayOptions,
			show: { vpsOperation: ['backupFtpList'] },
		}) as INodeProperties[]),
		...(descriptionDatacenterList({
			...displayOptions,
			show: { vpsOperation: ['datacenterList'] },
		}) as INodeProperties[]),
		...(descriptionDiskList({
			...displayOptions,
			show: { vpsOperation: ['diskList'] },
		}) as INodeProperties[]),
		...(descriptionPowerStartPost({
			...displayOptions,
			show: { vpsOperation: ['powerStartPost'] },
		}) as INodeProperties[]),
		...(descriptionPowerStopDelete({
			...displayOptions,
			show: { vpsOperation: ['powerStopDelete'] },
		}) as INodeProperties[]),
		...(descriptionPowerRebootDelete({
			...displayOptions,
			show: { vpsOperation: ['powerRebootDelete'] },
		}) as INodeProperties[]),
		...(descriptionDistributionGet({
			...displayOptions,
			show: { vpsOperation: ['distributionGet'] },
		}) as INodeProperties[]),
		...(descriptionDistributionList({
			...displayOptions,
			show: { vpsOperation: ['distributionList'] },
		}) as INodeProperties[]),
		...(descriptionGet({
			...displayOptions,
			show: { vpsOperation: ['get'] },
		}) as INodeProperties[]),
		...(descriptionImageGet({
			...displayOptions,
			show: { vpsOperation: ['imageGet'] },
		}) as INodeProperties[]),
		...(descriptionImageList({
			...displayOptions,
			show: { vpsOperation: ['imageList'] },
		}) as INodeProperties[]),
		...(descriptionIpGeolocationGet({
			...displayOptions,
			show: { vpsOperation: ['ipGeolocationGet'] },
		}) as INodeProperties[]),
		...(descriptionIpGet({
			...displayOptions,
			show: { vpsOperation: ['ipGet'] },
		}) as INodeProperties[]),
		...(descriptionIpList({
			...displayOptions,
			show: { vpsOperation: ['ipList'] },
		}) as INodeProperties[]),
		...(descriptionNetbootConfigGet({
			...displayOptions,
			show: { vpsOperation: ['netbootConfigGet'] },
		}) as INodeProperties[]),
		...(descriptionList({
			...displayOptions,
			show: { vpsOperation: ['list'] },
		}) as INodeProperties[]),
		...(descriptionSshKeyListGet({
			...displayOptions,
			show: { vpsOperation: ['listSshKeys'] },
		}) as INodeProperties[]),
		...(descriptionMigrationMigrationIdGet({
			...displayOptions,
			show: { vpsOperation: ['migrationMigrationIdGet'] },
		}) as INodeProperties[]),
		...(descriptionMigrationMigrationIdStepGet({
			...displayOptions,
			show: { vpsOperation: ['migrationMigrationIdStepGet'] },
		}) as INodeProperties[]),
		...(descriptionModelList({
			...displayOptions,
			show: { vpsOperation: ['modelList'] },
		}) as INodeProperties[]),
		...(descriptionNetbootOrderGet({
			...displayOptions,
			show: { vpsOperation: ['netbootOrderGet'] },
		}) as INodeProperties[]),
		...(descriptionNetbootTemplateDetailsGet({
			...displayOptions,
			show: { vpsOperation: ['netbootTemplateDetailsGet'] },
		}) as INodeProperties[]),
		...(descriptionOptionDetailGet({
			...displayOptions,
			show: { vpsOperation: ['optionDetailGet'] },
		}) as INodeProperties[]),
		...(descriptionOptionList({
			...displayOptions,
			show: { vpsOperation: ['optionList'] },
		}) as INodeProperties[]),
		...(descriptionPowerOffGet({
			...displayOptions,
			show: { vpsOperation: ['powerOffGet'] },
		}) as INodeProperties[]),
		...(descriptionRebootHardGet({
			...displayOptions,
			show: { vpsOperation: ['rebootHardGet'] },
		}) as INodeProperties[]),
		...(descriptionSecondaryDnsDomainListDomains({
			...displayOptions,
			show: { vpsOperation: ['secondaryDnsDomainListDomains'] },
		}) as INodeProperties[]),
		...(descriptionSecondaryDnsServerList({
			...displayOptions,
			show: { vpsOperation: ['secondaryDnsServerList'] },
		}) as INodeProperties[]),
		...(descriptionServiceInformationGet({
			...displayOptions,
			show: { vpsOperation: ['serviceInformationGet'] },
		}) as INodeProperties[]),
		...(descriptionSnapshotListSnapshotsForVps({
			...displayOptions,
			show: { vpsOperation: ['snapshotListSnapshotsForVps'] },
		}) as INodeProperties[]),
		...(descriptionStatusTaskIdGet({
			...displayOptions,
			show: { vpsOperation: ['statusTaskIdGet'] },
		}) as INodeProperties[]),
		...(descriptionTemplateGet({
			...displayOptions,
			show: { vpsOperation: ['templateGet'] },
		}) as INodeProperties[]),
		...(descriptionAbortSnapshotPost({
			...displayOptions,
			show: { vpsOperation: ['abortSnapshot'] },
		}) as INodeProperties[]),
		...(descriptionSecondaryDnsAttachPut({
			...displayOptions,
			show: { vpsOperation: ['attachSecondaryDns'] },
		}) as INodeProperties[]),
		...(descriptionAutomatedBackupReschedulePost({
			...displayOptions,
			show: { vpsOperation: ['automatedBackupReschedulePost'] },
		}) as INodeProperties[]),
		...(descriptionAutomatedBackupSetPost({
			...displayOptions,
			show: { vpsOperation: ['automatedBackupSetPost'] },
		}) as INodeProperties[]),
		...(descriptionDatacenterAvailabilityRawGet({
			...displayOptions,
			show: { vpsOperation: ['datacenterAvailabilityRawGet'] },
		}) as INodeProperties[]),
		...(descriptionDiskCreatePost({
			...displayOptions,
			show: { vpsOperation: ['createDiskPost'] },
		}) as INodeProperties[]),
		...(descriptionDiskDetailGet({
			...displayOptions,
			show: { vpsOperation: ['diskDetailGet'] },
		}) as INodeProperties[]),
		...(descriptionDiskMonitoringStatsGet({
			...displayOptions,
			show: { vpsOperation: ['diskMonitoringStatsGet'] },
		}) as INodeProperties[]),
		...(descriptionDiskUpdatePut({
			...displayOptions,
			show: { vpsOperation: ['updateDiskPut'] },
		}) as INodeProperties[]),
		...(descriptionDistributionUpdatePut({
			...displayOptions,
			show: { vpsOperation: ['distributionUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionGetSnapshotImage({
			...displayOptions,
			show: { vpsOperation: ['getSnapshotImage'] },
		}) as INodeProperties[]),
		...(descriptionIpCountryAvailableGet({
			...displayOptions,
			show: { vpsOperation: ['ipCountryAvailableGet'] },
		}) as INodeProperties[]),
		...(descriptionIpReleaseDelete({
			...displayOptions,
			show: { vpsOperation: ['releaseIpDelete'] },
		}) as INodeProperties[]),
		...(descriptionNetbootCreatePost({
			...displayOptions,
			show: { vpsOperation: ['netbootCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionRestorePointListGet({
			...displayOptions,
			show: { vpsOperation: ['restorePointListGet'] },
		}) as INodeProperties[]),
		...(descriptionServiceSecretGet({
			...displayOptions,
			show: { vpsOperation: ['serviceSecretGet'] },
		}) as INodeProperties[]),
		...(descriptionSnapshotCreatePost({
			...displayOptions,
			show: { vpsOperation: ['snapshotCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionSnapshotRevertPut({
			...displayOptions,
			show: { vpsOperation: ['revertSnapshot'] },
		}) as INodeProperties[]),
		...(descriptionTemplateApplyPost({
			...displayOptions,
			show: { vpsOperation: ['templateApplyPost'] },
		}) as INodeProperties[]),
		...(descriptionAutomatedBackupRestore({
			...displayOptions,
			show: { vpsOperation: ['automatedBackupRestore'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessPost({
			...displayOptions,
			show: { vpsOperation: ['backupFtpAccessPost'] },
		}) as INodeProperties[]),
		...(descriptionBackupRestoreList({
			...displayOptions,
			show: { vpsOperation: ['backupRestoreList'] },
		}) as INodeProperties[]),
		...(descriptionChangeContact({
			...displayOptions,
			show: { vpsOperation: ['changeContact'] },
		}) as INodeProperties[]),
		...(descriptionConfirmTermination({
			...displayOptions,
			show: { vpsOperation: ['confirmTermination'] },
		}) as INodeProperties[]),
		...(descriptionIpAdd({
			...displayOptions,
			show: { vpsOperation: ['ipAdd'] },
		}) as INodeProperties[]),
		...(descriptionVpsUpdate({
			...displayOptions,
			show: { vpsOperation: ['vpsUpdate'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vpsOperation', itemIndex ?? 0, { extractValue: true });

	switch (operation) {
		case 'availableUpgradeList':
			return executeAvailableUpgradeList.call(this, itemIndex ?? 0);
		case 'automatedBackupList':
			return executeAutomatedBackupList.call(this, itemIndex ?? 0);
		case 'backupFtpList':
			return executeBackupFtpList.call(this, itemIndex ?? 0);
		case 'datacenterList':
			return executeDatacenterList.call(this, itemIndex ?? 0);
		case 'diskList':
			return executeDiskList.call(this, itemIndex ?? 0);
		case 'powerRebootDelete':
			return executePowerRebootDelete.call(this, itemIndex ?? 0);
		case 'powerStartPost':
			return executePowerStartPost.call(this, itemIndex ?? 0);
		case 'powerStopDelete':
			return executePowerStopDelete.call(this, itemIndex ?? 0);
		case 'distributionGet':
			return executeDistributionGet.call(this, itemIndex ?? 0);
		case 'distributionList':
			return executeDistributionList.call(this, itemIndex ?? 0);
		case 'get':
			return executeGet.call(this, itemIndex ?? 0);
		case 'imageGet':
			return executeImageGet.call(this, itemIndex ?? 0);
		case 'imageList':
			return executeImageList.call(this, itemIndex ?? 0);
		case 'ipGeolocationGet':
			return executeIpGeolocationGet.call(this, itemIndex ?? 0);
		case 'ipGet':
			return executeIpGet.call(this, itemIndex ?? 0);
		case 'ipList':
			return executeIpList.call(this, itemIndex ?? 0);
		case 'netbootConfigGet':
			return executeNetbootConfigGet.call(this, itemIndex ?? 0);
		case 'list':
			return executeList.call(this, itemIndex ?? 0);
		case 'listSshKeys':
			return executeSshKeyListGet.call(this, itemIndex ?? 0);
		case 'migrationMigrationIdGet':
			return executeMigrationMigrationIdGet.call(this, itemIndex ?? 0);
		case 'migrationMigrationIdStepGet':
			return executeMigrationMigrationIdStepGet.call(this, itemIndex ?? 0);
		case 'modelList':
			return executeModelList.call(this, itemIndex ?? 0);
		case 'netbootOrderGet':
			return executeNetbootOrderGet.call(this, itemIndex ?? 0);
		case 'netbootTemplateDetailsGet':
			return executeNetbootTemplateDetailsGet.call(this, itemIndex ?? 0);
		case 'optionDetailGet':
			return executeOptionDetailGet.call(this, itemIndex ?? 0);
		case 'optionList':
			return executeOptionList.call(this, itemIndex ?? 0);
		case 'powerOffGet':
			return executePowerOffGet.call(this, itemIndex ?? 0);
		case 'rebootHardGet':
			return executeRebootHardGet.call(this, itemIndex ?? 0);
		case 'secondaryDnsDomainListDomains':
			return executeSecondaryDnsDomainListDomains.call(this, itemIndex ?? 0);
		case 'secondaryDnsServerList':
			return executeSecondaryDnsServerList.call(this, itemIndex ?? 0);
		case 'serviceInformationGet':
			return executeServiceInformationGet.call(this, itemIndex ?? 0);
		case 'snapshotListSnapshotsForVps':
			return executeSnapshotListSnapshotsForVps.call(this, itemIndex ?? 0);
		case 'statusTaskIdGet':
			return executeStatusTaskIdGet.call(this, itemIndex ?? 0);
		case 'templateGet':
			return executeTemplateGet.call(this, itemIndex ?? 0);
		case 'abortSnapshot':
			return executeAbortSnapshotPost.call(this, itemIndex ?? 0);
		case 'attachSecondaryDns':
			return executeSecondaryDnsAttachPut.call(this, itemIndex ?? 0);
		case 'automatedBackupReschedulePost':
			return executeAutomatedBackupReschedulePost.call(this, itemIndex ?? 0);
		case 'automatedBackupSetPost':
			return executeAutomatedBackupSetPost.call(this, itemIndex ?? 0);
		case 'datacenterAvailabilityRawGet':
			return executeDatacenterAvailabilityRawGet.call(this, itemIndex ?? 0);
		case 'createDiskPost':
			return executeDiskCreatePost.call(this, itemIndex ?? 0);
		case 'diskDetailGet':
			return executeDiskDetailGet.call(this, itemIndex ?? 0);
		case 'diskMonitoringStatsGet':
			return executeDiskMonitoringStatsGet.call(this, itemIndex ?? 0);
		case 'updateDiskPut':
			return executeDiskUpdatePut.call(this, itemIndex ?? 0);
		case 'distributionUpdatePut':
			return executeDistributionUpdatePut.call(this, itemIndex ?? 0);
		case 'getSnapshotImage':
			return executeGetSnapshotImage.call(this, itemIndex ?? 0);
		case 'ipCountryAvailableGet':
			return executeIpCountryAvailableGet.call(this, itemIndex ?? 0);
		case 'releaseIpDelete':
			return executeIpReleaseDelete.call(this, itemIndex ?? 0);
		case 'netbootCreatePost':
			return executeNetbootCreatePost.call(this, itemIndex ?? 0);
		case 'restorePointListGet':
			return executeRestorePointListGet.call(this, itemIndex ?? 0);
		case 'serviceSecretGet':
			return executeServiceSecretGet.call(this, itemIndex ?? 0);
		case 'snapshotCreatePost':
			return executeSnapshotCreatePost.call(this, itemIndex ?? 0);
		case 'revertSnapshot':
			return executeSnapshotRevertPut.call(this, itemIndex ?? 0);
		case 'templateApplyPost':
			return executeTemplateApplyPost.call(this, itemIndex ?? 0);
		case 'automatedBackupRestore':
			return executeAutomatedBackupRestore.call(this, itemIndex ?? 0);
		case 'backupFtpAccessPost':
			return executeBackupFtpAccessPost.call(this, itemIndex ?? 0);
		case 'backupRestoreList':
			return executeBackupRestoreList.call(this, itemIndex ?? 0);
		case 'changeContact':
			return executeChangeContact.call(this, itemIndex ?? 0);
		case 'confirmTermination':
			return executeConfirmTermination.call(this, itemIndex ?? 0);
		case 'ipAdd':
			return executeIpAdd.call(this, itemIndex ?? 0);
		case 'vpsUpdate':
			return executeVpsUpdate.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vps"`);
}
