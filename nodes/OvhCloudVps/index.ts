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
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vpsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Abort Snapshot', value: 'abortSnapshot' },
				{
					name: 'Attach Secondary DNS',
					value: 'attachSecondaryDns',
					action: 'Attach a secondary DNS to a VPS',
				},
				{
					name: 'Automated Backup List',
					value: 'automatedBackupList',
					action: 'List automated backups for a VPS',
				},
				{
					name: 'Automated Backup Reschedule',
					value: 'automatedBackupReschedulePost',
					action: 'Reschedule an automated backup for a VPS',
				},
				{
					name: 'Automated Backup Restore Plan Set',
					value: 'automatedBackupSetPost',
					action: 'Set a backup restore plan for a VPS',
				},
				{
					name: 'Available Upgrade List',
					value: 'availableUpgradeList',
					action: 'Get available upgrades for a VPS',
				},
				{
					name: 'Backup FTP Configs',
					value: 'backupFtpList',
					action: 'List backup FTP configurations',
				},
				{ name: 'Create Disk', value: 'createDiskPost' },
				{
					name: 'Datacenter Availability Raw Get',
					value: 'datacenterAvailabilityRawGet',
					action: 'Check raw datacenter availability for a VPS',
				},
				{
					name: 'Datacenter List',
					value: 'datacenterList',
					action: 'Get available datacenters for a VPS',
				},
				{ name: 'Disk List', value: 'diskList', action: 'List disks attached to a VPS' },
				{
					name: 'Disk Monitoring Stats Get',
					value: 'diskMonitoringStatsGet',
					action: 'Get monitoring stats for a disk',
				},
				{ name: 'Distribution Get', value: 'distributionGet', action: 'Get distribution details' },
				{
					name: 'Distribution List',
					value: 'distributionList',
					action: 'List available distributions for a VPS',
				},
				{ name: 'Distribution Update', value: 'distributionUpdatePut' },
				{ name: 'Get', value: 'get', action: 'Get VPS service details' },
				{
					name: 'Get Disk Detail',
					value: 'diskDetailGet',
					action: 'Get detail of a specific VPS disk',
				},
				{
					name: 'Get Snapshot Image',
					value: 'getSnapshotImage',
					action: 'Get image of a snapshot',
				},
				{ name: 'Image Get', value: 'imageGet', action: 'Get image details' },
				{ name: 'Image List', value: 'imageList', action: 'List available images for a VPS' },
				{
					name: 'IP Country Available',
					value: 'ipCountryAvailableGet',
					action: 'List available IP countries per region',
				},
				{ name: 'IP Geolocation', value: 'ipGeolocationGet', action: 'Get IP geolocation info' },
				{ name: 'IP Get', value: 'ipGet', action: 'Get IP address details' },
				{ name: 'IP List', value: 'ipList', action: 'List IPs attached to a VPS' },
				{
					name: 'Kernel Configs',
					value: 'netbootConfigGet',
					action: 'Get kernel/netboot config for a VPS',
				},
				{ name: 'List', value: 'list', action: 'List all VPS services' },
				{
					name: 'List SSH Keys',
					value: 'listSshKeys',
					action: 'List SSH keys for a VPS',
				},
				{
					name: 'Migration Migration ID Get',
					value: 'migrationMigrationIdGet',
					action: 'Get migration details by ID',
				},
				{
					name: 'Migration Step Get',
					value: 'migrationMigrationIdStepGet',
					action: 'Get migration step details',
				},
				{ name: 'Model List', value: 'modelList', action: 'List available VPS models' },
				{ name: 'Netboot Create Order Config Post', value: 'netbootCreatePost' },
				{
					name: 'Netboot Order Config',
					value: 'netbootOrderGet',
					action: 'Get netboot order configuration',
				},
				{
					name: 'Netboot Template Details',
					value: 'netbootTemplateDetailsGet',
					action: 'Get netboot template details',
				},
				{ name: 'Option Detail Get', value: 'optionDetailGet', action: 'Get option type details' },
				{ name: 'Option List', value: 'optionList', action: 'List available options for a VPS' },
				{
					name: 'Power Off Status',
					value: 'powerOffGet',
					action: 'Check power off status of a VPS',
				},
				{
					name: 'Power Reboot Delete',
					value: 'powerRebootDelete',
					action: 'Request hard reboot for the VPS',
				},
				{
					name: 'Power Start Post',
					value: 'powerStartPost',
					action: 'Request power on for the VPS',
				},
				{
					name: 'Power Stop Delete',
					value: 'powerStopDelete',
					action: 'Request shutdown for the VPS',
				},
				{ name: 'Reboot Status', value: 'rebootHardGet', action: 'Check reboot status of a VPS' },
				{
					name: 'Release IP Address',
					value: 'releaseIpPut',
					action: 'Release an IP address from the VPS',
				},
				{
					name: 'Restore Point List Get',
					value: 'restorePointListGet',
					action: 'List restore points for a backup',
				},
				{
					name: 'Revert Snapshot',
					value: 'revertSnapshot',
					action: 'Revert the VPS to a specific snapshot',
				},
				{
					name: 'Secondary DNS Domain List',
					value: 'secondaryDnsDomainListDomains',
					action: 'List secondary DNS domains',
				},
				{
					name: 'Secondary DNS Server List',
					value: 'secondaryDnsServerList',
					action: 'List secondary DNS servers',
				},
				{
					name: 'Service Information Get',
					value: 'serviceInformationGet',
					action: 'Get service information for a VPS',
				},
				{
					name: 'Service Secret Key Get',
					value: 'serviceSecretGet',
					action: 'Get authentication secret key for a VPS',
				},
				{
					name: 'Snapshot Create Post',
					value: 'snapshotCreatePost',
					action: 'Create a new snapshot for the VPS',
				},
				{
					name: 'Snapshot List Snapshots For Vps',
					value: 'snapshotListSnapshotsForVps',
					action: 'List snapshots for a VPS',
				},
				{
					name: 'Status Task ID Get',
					value: 'statusTaskIdGet',
					action: 'Check status of a task by ID',
				},
				{
					name: 'Template Apply Netboot Config Post',
					value: 'templateApplyPost',
					action: 'Apply netboot template to the VPS',
				},
				{ name: 'Template Details', value: 'templateGet', action: 'Get template details' },
				{
					name: 'Update Disk Detail Put',
					value: 'updateDiskPut',
					action: 'Update a specific VPS disk (resize or rename)',
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
		...(descriptionList() as INodeProperties[]),
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
			show: { vpsOperation: ['releaseIpPut'] },
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
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vpsOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'availableUpgradeList':
			return executeAvailableUpgradeList.call(this, itemIndex);
		case 'automatedBackupList':
			return executeAutomatedBackupList.call(this, itemIndex);
		case 'backupFtpList':
			return executeBackupFtpList.call(this, itemIndex);
		case 'datacenterList':
			return executeDatacenterList.call(this, itemIndex);
		case 'diskList':
			return executeDiskList.call(this, itemIndex);
		case 'powerRebootDelete':
			return executePowerRebootDelete.call(this, itemIndex);
		case 'powerStartPost':
			return executePowerStartPost.call(this, itemIndex);
		case 'powerStopDelete':
			return executePowerStopDelete.call(this, itemIndex);
		case 'distributionGet':
			return executeDistributionGet.call(this, itemIndex);
		case 'distributionList':
			return executeDistributionList.call(this, itemIndex);
		case 'get':
			return executeGet.call(this, itemIndex);
		case 'imageGet':
			return executeImageGet.call(this, itemIndex);
		case 'imageList':
			return executeImageList.call(this, itemIndex);
		case 'ipGeolocationGet':
			return executeIpGeolocationGet.call(this, itemIndex);
		case 'ipGet':
			return executeIpGet.call(this, itemIndex);
		case 'ipList':
			return executeIpList.call(this, itemIndex);
		case 'netbootConfigGet':
			return executeNetbootConfigGet.call(this, itemIndex);
		case 'list':
			return executeList.call(this);
		case 'listSshKeys':
			return executeSshKeyListGet.call(this, itemIndex);
		case 'migrationMigrationIdGet':
			return executeMigrationMigrationIdGet.call(this, itemIndex);
		case 'migrationMigrationIdStepGet':
			return executeMigrationMigrationIdStepGet.call(this, itemIndex);
		case 'modelList':
			return executeModelList.call(this, itemIndex);
		case 'netbootOrderGet':
			return executeNetbootOrderGet.call(this, itemIndex);
		case 'netbootTemplateDetailsGet':
			return executeNetbootTemplateDetailsGet.call(this, itemIndex);
		case 'optionDetailGet':
			return executeOptionDetailGet.call(this, itemIndex);
		case 'optionList':
			return executeOptionList.call(this, itemIndex);
		case 'powerOffGet':
			return executePowerOffGet.call(this, itemIndex);
		case 'rebootHardGet':
			return executeRebootHardGet.call(this, itemIndex);
		case 'secondaryDnsDomainListDomains':
			return executeSecondaryDnsDomainListDomains.call(this, itemIndex);
		case 'secondaryDnsServerList':
			return executeSecondaryDnsServerList.call(this, itemIndex);
		case 'serviceInformationGet':
			return executeServiceInformationGet.call(this, itemIndex);
		case 'snapshotListSnapshotsForVps':
			return executeSnapshotListSnapshotsForVps.call(this, itemIndex);
		case 'statusTaskIdGet':
			return executeStatusTaskIdGet.call(this, itemIndex);
		case 'templateGet':
			return executeTemplateGet.call(this, itemIndex);
		case 'abortSnapshot':
			return executeAbortSnapshotPost.call(this, itemIndex);
		case 'attachSecondaryDns':
			return executeSecondaryDnsAttachPut.call(this, itemIndex);
		case 'automatedBackupReschedulePost':
			return executeAutomatedBackupReschedulePost.call(this, itemIndex);
		case 'automatedBackupSetPost':
			return executeAutomatedBackupSetPost.call(this, itemIndex);
		case 'datacenterAvailabilityRawGet':
			return executeDatacenterAvailabilityRawGet.call(this, itemIndex);
		case 'createDiskPost':
			return executeDiskCreatePost.call(this, itemIndex);
		case 'diskDetailGet':
			return executeDiskDetailGet.call(this, itemIndex);
		case 'diskMonitoringStatsGet':
			return executeDiskMonitoringStatsGet.call(this, itemIndex);
		case 'updateDiskPut':
			return executeDiskUpdatePut.call(this, itemIndex);
		case 'distributionUpdatePut':
			return executeDistributionUpdatePut.call(this, itemIndex);
		case 'getSnapshotImage':
			return executeGetSnapshotImage.call(this, itemIndex);
		case 'ipCountryAvailableGet':
			return executeIpCountryAvailableGet.call(this, itemIndex);
		case 'releaseIpPut':
			return executeIpReleaseDelete.call(this, itemIndex);
		case 'netbootCreatePost':
			return executeNetbootCreatePost.call(this, itemIndex);
		case 'restorePointListGet':
			return executeRestorePointListGet.call(this, itemIndex);
		case 'serviceSecretGet':
			return executeServiceSecretGet.call(this, itemIndex);
		case 'snapshotCreatePost':
			return executeSnapshotCreatePost.call(this, itemIndex);
		case 'revertSnapshot':
			return executeSnapshotRevertPut.call(this, itemIndex);
		case 'templateApplyPost':
			return executeTemplateApplyPost.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vps"`);
}
