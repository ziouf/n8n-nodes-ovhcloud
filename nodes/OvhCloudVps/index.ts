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

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vpsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Automated Backup List',
					value: 'automatedBackupList',
					action: 'List automated backups for a VPS',
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
				{
					name: 'Datacenter List',
					value: 'datacenterList',
					action: 'Get available datacenters for a VPS',
				},
				{ name: 'Disk List', value: 'diskList', action: 'List disks attached to a VPS' },
				{ name: 'Distribution Get', value: 'distributionGet', action: 'Get distribution details' },
				{
					name: 'Distribution List',
					value: 'distributionList',
					action: 'List available distributions for a VPS',
				},
				{ name: 'Get', value: 'get', action: 'Get VPS service details' },
				{ name: 'Image Get', value: 'imageGet', action: 'Get image details' },
				{ name: 'Image List', value: 'imageList', action: 'List available images for a VPS' },
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
				{ name: 'Reboot Status', value: 'rebootHardGet', action: 'Check reboot status of a VPS' },
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
					name: 'Snapshot List Snapshots For Vps',
					value: 'snapshotListSnapshotsForVps',
					action: 'List snapshots for a VPS',
				},
				{
					name: 'Status Task ID Get',
					value: 'statusTaskIdGet',
					action: 'Check status of a task by ID',
				},
				{ name: 'Template Details', value: 'templateGet', action: 'Get template details' },
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
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vps"`);
}
