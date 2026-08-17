import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionAbortSnapshotPost,
	execute as executeAbortSnapshotPost,
} from './abortSnapshotPost.operation';
import {
	description as descriptionAutomatedBackupList,
	execute as executeAutomatedBackupList,
} from './automatedBackupList.operation';
import {
	description as descriptionAutomatedBackupReschedulePost,
	execute as executeAutomatedBackupReschedulePost,
} from './automatedBackupReschedulePost.operation';
import {
	description as descriptionAutomatedBackupRestore,
	execute as executeAutomatedBackupRestore,
} from './automatedBackupRestoreCreate.operation';
import {
	description as descriptionAutomatedBackupSetPost,
	execute as executeAutomatedBackupSetPost,
} from './automatedBackupSetPost.operation';
import {
	description as descriptionAvailableUpgradeList,
	execute as executeAvailableUpgradeList,
} from './availableUpgradeList.operation';
import {
	description as descriptionBackupFtpAccessPost,
	execute as executeBackupFtpAccessPost,
} from './backupFtpAccessPostVps.operation';
import {
	description as descriptionBackupFtpList,
	execute as executeBackupFtpList,
} from './backupFtpList.operation';
import {
	description as descriptionBackupRestoreList,
	execute as executeBackupRestoreList,
} from './backupRestoreListGet.operation';
import {
	description as descriptionChangeContact,
	execute as executeChangeContact,
} from './changeContactCreateVps.operation';
import {
	description as descriptionConfirmTermination,
	execute as executeConfirmTermination,
} from './confirmTerminationCreateVps.operation';
import {
	description as descriptionDatacenterAvailabilityRawGet,
	execute as executeDatacenterAvailabilityRawGet,
} from './datacenterAvailabilityRawGet.operation';
import {
	description as descriptionDatacenterList,
	execute as executeDatacenterList,
} from './datacenterList.operation';
import {
	description as descriptionDiskCreatePost,
	execute as executeDiskCreatePost,
} from './diskCreatePost.operation';
import {
	description as descriptionDiskDetailGet,
	execute as executeDiskDetailGet,
} from './diskGet.operation';
import {
	description as descriptionDiskList,
	execute as executeDiskList,
} from './diskList.operation';
import {
	description as descriptionDiskMonitoringStatsGet,
	execute as executeDiskMonitoringStatsGet,
} from './diskMonitoringStatsGet.operation';
import {
	description as descriptionDiskUpdatePut,
	execute as executeDiskUpdatePut,
} from './diskUpdatePut.operation';
import {
	description as descriptionDistributionGet,
	execute as executeDistributionGet,
} from './distributionGet.operation';
import {
	description as descriptionDistributionList,
	execute as executeDistributionList,
} from './distributionList.operation';
import {
	description as descriptionDistributionUpdatePut,
	execute as executeDistributionUpdatePut,
} from './distributionUpdatePut.operation';
import {
	description as descriptionGet,
	execute as executeGet,
} from './get.operation';
import {
	description as descriptionImageGet,
	execute as executeImageGet,
} from './imageGet.operation';
import {
	description as descriptionImageList,
	execute as executeImageList,
} from './imageList.operation';
import {
	description as descriptionIpAdd,
	execute as executeIpAdd,
} from './ipAdd.operation';
import {
	description as descriptionIpCountryAvailableGet,
	execute as executeIpCountryAvailableGet,
} from './ipCountryAvailableGet.operation';
import {
	description as descriptionIpGeolocationGet,
	execute as executeIpGeolocationGet,
} from './ipGeolocationGet.operation';
import {
	description as descriptionIpGet,
	execute as executeIpGet,
} from './ipGet.operation';
import {
	description as descriptionIpList,
	execute as executeIpList,
} from './ipList.operation';
import {
	description as descriptionIpReleaseDelete,
	execute as executeIpReleaseDelete,
} from './ipReleaseDelete.operation';
import {
	description as descriptionList,
	execute as executeList,
} from './list.operation';
import {
	description as descriptionMigrationMigrationIdGet,
	execute as executeMigrationMigrationIdGet,
} from './migrationMigrationIdGet.operation';
import {
	description as descriptionMigrationMigrationIdStepGet,
	execute as executeMigrationMigrationIdStepGet,
} from './migrationMigrationIdStepGet.operation';
import {
	description as descriptionModelList,
	execute as executeModelList,
} from './modelList.operation';
import {
	description as descriptionNetbootConfigGet,
	execute as executeNetbootConfigGet,
} from './netbootConfigGet.operation';
import {
	description as descriptionNetbootCreatePost,
	execute as executeNetbootCreatePost,
} from './netbootCreatePost.operation';
import {
	description as descriptionNetbootOrderGet,
	execute as executeNetbootOrderGet,
} from './netbootOrderGet.operation';
import {
	description as descriptionNetbootTemplateDetailsGet,
	execute as executeNetbootTemplateDetailsGet,
} from './netbootTemplateDetailsGet.operation';
import {
	description as descriptionOptionDetailGet,
	execute as executeOptionDetailGet,
} from './optionDetailGet.operation';
import {
	description as descriptionOptionList,
	execute as executeOptionList,
} from './optionList.operation';
import {
	description as descriptionPowerOffGet,
	execute as executePowerOffGet,
} from './powerOffGet.operation';
import {
	description as descriptionPowerRebootDelete,
	execute as executePowerRebootDelete,
} from './powerRebootDelete.operation';
import {
	description as descriptionPowerStartPost,
	execute as executePowerStartPost,
} from './powerStartPost.operation';
import {
	description as descriptionPowerStopDelete,
	execute as executePowerStopDelete,
} from './powerStopDelete.operation';
import {
	description as descriptionRebootHardGet,
	execute as executeRebootHardGet,
} from './rebootHardGet.operation';
import {
	description as descriptionRestorePointListGet,
	execute as executeRestorePointListGet,
} from './restorePointListGet.operation';
import {
	description as descriptionSecondaryDnsAttachPut,
	execute as executeSecondaryDnsAttachPut,
} from './secondaryDnsAttachPut.operation';
import {
	description as descriptionSecondaryDnsDomainListDomains,
	execute as executeSecondaryDnsDomainListDomains,
} from './secondaryDnsDomainListDomains.operation';
import {
	description as descriptionSecondaryDnsServerList,
	execute as executeSecondaryDnsServerList,
} from './secondaryDnsServerList.operation';
import {
	description as descriptionServiceInformationGet,
	execute as executeServiceInformationGet,
} from './serviceInformationGet.operation';
import {
	description as descriptionServiceSecretGet,
	execute as executeServiceSecretGet,
} from './serviceSecretGet.operation';
import {
	description as descriptionSnapshotCreatePost,
	execute as executeSnapshotCreatePost,
} from './snapshotCreatePost.operation';
import {
	description as descriptionGetSnapshotImage,
	execute as executeGetSnapshotImage,
} from './snapshotGetImageGet.operation';
import {
	description as descriptionSnapshotListSnapshotsForVps,
	execute as executeSnapshotListSnapshotsForVps,
} from './snapshotListSnapshotsForVps.operation';
import {
	description as descriptionSnapshotRevertPut,
	execute as executeSnapshotRevertPut,
} from './snapshotRevertPut.operation';
import {
	description as descriptionSshKeyListGet,
	execute as executeSshKeyListGet,
} from './sshKeyListGet.operation';
import {
	description as descriptionStatusTaskIdGet,
	execute as executeStatusTaskIdGet,
} from './statusTaskIdGet.operation';
import {
	description as descriptionTemplateApplyPost,
	execute as executeTemplateApplyPost,
} from './templateApplyPost.operation';
import {
	description as descriptionTemplateGet,
	execute as executeTemplateGet,
} from './templateGet.operation';
import {
	description as descriptionVpsUpdate,
	execute as executeVpsUpdate,
} from './vpsUpdate.operation';

const { description, execute } = createOperationDispatcher(
	'vpsOperation',
	'vps',
	[
	{
		name: 'Abort Snapshot',
		value: 'abortSnapshot',
		action: 'Abort a snapshot creation for the VPS',
		execute: executeAbortSnapshotPost,
		description: descriptionAbortSnapshotPost,
	},
	{
		name: 'Add Backup FTP Access',
		value: 'backupFtpAccessPost',
		action: 'Add an IP access rule to the VPS backup FTP',
		execute: executeBackupFtpAccessPost,
		description: descriptionBackupFtpAccessPost,
	},
	{
		name: 'Add IP',
		value: 'ipAdd',
		action: 'Add a failover IP to the VPS',
		execute: executeIpAdd,
		description: descriptionIpAdd,
	},
	{
		name: 'Apply Netboot Template',
		value: 'templateApplyPost',
		action: 'Apply netboot template to the VPS',
		execute: executeTemplateApplyPost,
		description: descriptionTemplateApplyPost,
	},
	{
		name: 'Attach Secondary DNS',
		value: 'attachSecondaryDns',
		action: 'Attach a secondary DNS to a VPS',
		execute: executeSecondaryDnsAttachPut,
		description: descriptionSecondaryDnsAttachPut,
	},
	{
		name: 'Change Contact',
		value: 'changeContact',
		action: 'Launch a contact change for the VPS service',
		execute: executeChangeContact,
		description: descriptionChangeContact,
	},
	{
		name: 'Check Power Off Status',
		value: 'powerOffGet',
		action: 'Check power off status of a VPS',
		execute: executePowerOffGet,
		description: descriptionPowerOffGet,
	},
	{
		name: 'Check Reboot Status',
		value: 'rebootHardGet',
		action: 'Check reboot status of a VPS',
		execute: executeRebootHardGet,
		description: descriptionRebootHardGet,
	},
	{
		name: 'Confirm Termination',
		value: 'confirmTermination',
		action: 'Confirm termination of the VPS service (irreversible)',
		execute: executeConfirmTermination,
		description: descriptionConfirmTermination,
	},
	{
		name: 'Create Disk',
		value: 'createDiskPost',
		action: 'Create a new disk for the VPS',
		execute: executeDiskCreatePost,
		description: descriptionDiskCreatePost,
	},
	{
		name: 'Create Netboot Order Config',
		value: 'netbootCreatePost',
		action: 'Create a netboot order configuration for the VPS',
		execute: executeNetbootCreatePost,
		description: descriptionNetbootCreatePost,
	},
	{
		name: 'Create Snapshot',
		value: 'snapshotCreatePost',
		action: 'Create a new snapshot for the VPS',
		execute: executeSnapshotCreatePost,
		description: descriptionSnapshotCreatePost,
	},
	{
		name: 'Get',
		value: 'get',
		action: 'Get VPS service details',
		execute: executeGet,
		description: descriptionGet,
		default: true,
	},
	{
		name: 'Get Available IP Countries',
		value: 'ipCountryAvailableGet',
		action: 'List available IP countries per region',
		execute: executeIpCountryAvailableGet,
		description: descriptionIpCountryAvailableGet,
	},
	{
		name: 'Get Datacenter Availability',
		value: 'datacenterAvailabilityRawGet',
		action: 'Check raw datacenter availability for a VPS',
		execute: executeDatacenterAvailabilityRawGet,
		description: descriptionDatacenterAvailabilityRawGet,
	},
	{
		name: 'Get Disk Detail',
		value: 'diskDetailGet',
		action: 'Get detail of a specific VPS disk',
		execute: executeDiskDetailGet,
		description: descriptionDiskDetailGet,
	},
	{
		name: 'Get Disk Monitoring Stats',
		value: 'diskMonitoringStatsGet',
		action: 'Get monitoring stats for a disk',
		execute: executeDiskMonitoringStatsGet,
		description: descriptionDiskMonitoringStatsGet,
	},
	{
		name: 'Get Distribution',
		value: 'distributionGet',
		action: 'Get distribution details',
		execute: executeDistributionGet,
		description: descriptionDistributionGet,
	},
	{
		name: 'Get Image',
		value: 'imageGet',
		action: 'Get image details',
		execute: executeImageGet,
		description: descriptionImageGet,
	},
	{
		name: 'Get IP',
		value: 'ipGet',
		action: 'Get IP address details',
		execute: executeIpGet,
		description: descriptionIpGet,
	},
	{
		name: 'Get IP Geolocation',
		value: 'ipGeolocationGet',
		action: 'Get IP geolocation info',
		execute: executeIpGeolocationGet,
		description: descriptionIpGeolocationGet,
	},
	{
		name: 'Get Kernel Configs',
		value: 'netbootConfigGet',
		action: 'Get kernel/netboot config for a VPS',
		execute: executeNetbootConfigGet,
		description: descriptionNetbootConfigGet,
	},
	{
		name: 'Get Migration',
		value: 'migrationMigrationIdGet',
		action: 'Get migration details by ID',
		execute: executeMigrationMigrationIdGet,
		description: descriptionMigrationMigrationIdGet,
	},
	{
		name: 'Get Migration Step',
		value: 'migrationMigrationIdStepGet',
		action: 'Get migration step details',
		execute: executeMigrationMigrationIdStepGet,
		description: descriptionMigrationMigrationIdStepGet,
	},
	{
		name: 'Get Netboot Order Config',
		value: 'netbootOrderGet',
		action: 'Get netboot order configuration',
		execute: executeNetbootOrderGet,
		description: descriptionNetbootOrderGet,
	},
	{
		name: 'Get Netboot Template Details',
		value: 'netbootTemplateDetailsGet',
		action: 'Get netboot template details',
		execute: executeNetbootTemplateDetailsGet,
		description: descriptionNetbootTemplateDetailsGet,
	},
	{
		name: 'Get Option Details',
		value: 'optionDetailGet',
		action: 'Get option type details',
		execute: executeOptionDetailGet,
		description: descriptionOptionDetailGet,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInformationGet',
		action: 'Get service information for a VPS',
		execute: executeServiceInformationGet,
		description: descriptionServiceInformationGet,
	},
	{
		name: 'Get Service Secret Key',
		value: 'serviceSecretGet',
		action: 'Get authentication secret key for a VPS',
		execute: executeServiceSecretGet,
		description: descriptionServiceSecretGet,
	},
	{
		name: 'Get Snapshot Image',
		value: 'getSnapshotImage',
		action: 'Get image of a snapshot',
		execute: executeGetSnapshotImage,
		description: descriptionGetSnapshotImage,
	},
	{
		name: 'Get Task Status',
		value: 'statusTaskIdGet',
		action: 'Check status of a task by ID',
		execute: executeStatusTaskIdGet,
		description: descriptionStatusTaskIdGet,
	},
	{
		name: 'Get Template Details',
		value: 'templateGet',
		action: 'Get template details',
		execute: executeTemplateGet,
		description: descriptionTemplateGet,
	},
	{
		name: 'List Automated Backups',
		value: 'automatedBackupList',
		action: 'List automated backups for a VPS',
		execute: executeAutomatedBackupList,
		description: descriptionAutomatedBackupList,
	},
	{
		name: 'List Available Upgrades',
		value: 'availableUpgradeList',
		action: 'Get available upgrades for a VPS',
		execute: executeAvailableUpgradeList,
		description: descriptionAvailableUpgradeList,
	},
	{
		name: 'List Backup FTP Configs',
		value: 'backupFtpList',
		action: 'List backup FTP configurations',
		execute: executeBackupFtpList,
		description: descriptionBackupFtpList,
	},
	{
		name: 'List Backup Restores',
		value: 'backupRestoreList',
		action: 'List attached backups available for restore',
		execute: executeBackupRestoreList,
		description: descriptionBackupRestoreList,
	},
	{
		name: 'List Datacenters',
		value: 'datacenterList',
		action: 'Get available datacenters for a VPS',
		execute: executeDatacenterList,
		description: descriptionDatacenterList,
	},
	{
		name: 'List Disks',
		value: 'diskList',
		action: 'List disks attached to a VPS',
		execute: executeDiskList,
		description: descriptionDiskList,
	},
	{
		name: 'List Distributions',
		value: 'distributionList',
		action: 'List available distributions for a VPS',
		execute: executeDistributionList,
		description: descriptionDistributionList,
	},
	{
		name: 'List Images',
		value: 'imageList',
		action: 'List available images for a VPS',
		execute: executeImageList,
		description: descriptionImageList,
	},
	{
		name: 'List IPs',
		value: 'ipList',
		action: 'List IPs attached to a VPS',
		execute: executeIpList,
		description: descriptionIpList,
	},
	{
		name: 'List Models',
		value: 'modelList',
		action: 'List available VPS models',
		execute: executeModelList,
		description: descriptionModelList,
	},
	{
		name: 'List Options',
		value: 'optionList',
		action: 'List available options for a VPS',
		execute: executeOptionList,
		description: descriptionOptionList,
	},
	{
		name: 'List Restore Points',
		value: 'restorePointListGet',
		action: 'List restore points for a backup',
		execute: executeRestorePointListGet,
		description: descriptionRestorePointListGet,
	},
	{
		name: 'List Secondary DNS Domains',
		value: 'secondaryDnsDomainListDomains',
		action: 'List secondary DNS domains',
		execute: executeSecondaryDnsDomainListDomains,
		description: descriptionSecondaryDnsDomainListDomains,
	},
	{
		name: 'List Secondary DNS Servers',
		value: 'secondaryDnsServerList',
		action: 'List secondary DNS servers',
		execute: executeSecondaryDnsServerList,
		description: descriptionSecondaryDnsServerList,
	},
	{
		name: 'List Snapshots',
		value: 'snapshotListSnapshotsForVps',
		action: 'List snapshots for a VPS',
		execute: executeSnapshotListSnapshotsForVps,
		description: descriptionSnapshotListSnapshotsForVps,
	},
	{
		name: 'List SSH Keys',
		value: 'listSshKeys',
		action: 'List SSH keys for a VPS',
		execute: executeSshKeyListGet,
		description: descriptionSshKeyListGet,
	},
	{
		name: 'List VPS Services',
		value: 'list',
		action: 'List all VPS services',
		execute: executeList,
		description: descriptionList,
	},
	{
		name: 'Power Off VPS',
		value: 'powerStopDelete',
		action: 'Request shutdown for the VPS',
		execute: executePowerStopDelete,
		description: descriptionPowerStopDelete,
	},
	{
		name: 'Power On VPS',
		value: 'powerStartPost',
		action: 'Request power on for the VPS',
		execute: executePowerStartPost,
		description: descriptionPowerStartPost,
	},
	{
		name: 'Reboot VPS',
		value: 'powerRebootDelete',
		action: 'Request hard reboot for the VPS',
		execute: executePowerRebootDelete,
		description: descriptionPowerRebootDelete,
	},
	{
		name: 'Release IP Address',
		value: 'releaseIpDelete',
		action: 'Release an IP address from the VPS',
		execute: executeIpReleaseDelete,
		description: descriptionIpReleaseDelete,
	},
	{
		name: 'Reschedule Automated Backup',
		value: 'automatedBackupReschedulePost',
		action: 'Reschedule an automated backup for a VPS',
		execute: executeAutomatedBackupReschedulePost,
		description: descriptionAutomatedBackupReschedulePost,
	},
	{
		name: 'Restore Automated Backup',
		value: 'automatedBackupRestore',
		action: 'Restore the VPS from an automated backup (irreversible)',
		execute: executeAutomatedBackupRestore,
		description: descriptionAutomatedBackupRestore,
	},
	{
		name: 'Revert Snapshot',
		value: 'revertSnapshot',
		action: 'Revert the VPS to a specific snapshot',
		execute: executeSnapshotRevertPut,
		description: descriptionSnapshotRevertPut,
	},
	{
		name: 'Set Automated Backup Restore Plan',
		value: 'automatedBackupSetPost',
		action: 'Set a backup restore plan for a VPS',
		execute: executeAutomatedBackupSetPost,
		description: descriptionAutomatedBackupSetPost,
	},
	{
		name: 'Update Disk',
		value: 'updateDiskPut',
		action: 'Update a specific VPS disk (resize or rename)',
		execute: executeDiskUpdatePut,
		description: descriptionDiskUpdatePut,
	},
	{
		name: 'Update Distribution',
		value: 'distributionUpdatePut',
		action: 'Update the distribution of the VPS',
		execute: executeDistributionUpdatePut,
		description: descriptionDistributionUpdatePut,
	},
	{
		name: 'Update VPS',
		value: 'vpsUpdate',
		action: 'Update VPS service properties (e.g. name)',
		execute: executeVpsUpdate,
		description: descriptionVpsUpdate,
	},
	],
);

export { description, execute };
