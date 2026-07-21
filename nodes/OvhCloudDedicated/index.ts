import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { execute as executeList, description as descriptionList } from './resources/list.operation';
import { execute as executeGet, description as descriptionGet } from './resources/get.operation';
import {
	execute as executeAvailabilityRawGet,
	description as descriptionAvailabilityRawGet,
} from './resources/availabilityRawGet.operation';
import {
	execute as executeDatacenterAvailabilityList,
	description as descriptionDatacenterAvailabilityList,
} from './resources/datacenterAvailabilityList.operation';
import {
	execute as executeBiosSettingsGet,
	description as descriptionBiosSettingsGet,
} from './resources/biosSettingsGet.operation';
import {
	execute as executeBiosSgxGet,
	description as descriptionBiosSgxGet,
} from './resources/biosSgxGet.operation';
import {
	execute as executeBootListGet,
	description as descriptionBootListGet,
} from './resources/bootListGet.operation';
import {
	execute as executeBackupCloudGet,
	description as descriptionBackupCloudGet,
} from './resources/backupCloudGet.operation';
import {
	execute as executeBackupFtpGet,
	description as descriptionBackupFtpGet,
} from './resources/backupFtpGet.operation';
import {
	execute as executeBackupFtpAccessListGet,
	description as descriptionBackupFtpAccessListGet,
} from './resources/backupFtpAccessListGet.operation';
import {
	execute as executeFirewallGet,
	description as descriptionFirewallGet,
} from './resources/firewallGet.operation';
import {
	execute as executeIpmiGet,
	description as descriptionIpmiGet,
} from './resources/ipmiGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedServerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Backup Cloud Get',
					value: 'backupCloudGet',
					action: 'Get cloud backup properties of a dedicated server',
				},
				{
					name: 'Backup FTP Access List',
					value: 'backupFtpAccessListGet',
					action: 'List ACLs for FTP backup access control',
				},
				{
					name: 'Backup FTP Get',
					value: 'backupFtpGet',
					action: 'Get FTP backup properties of a dedicated server',
				},
				{
					name: 'BIOS Settings Get',
					value: 'biosSettingsGet',
					action: 'Get BIOS settings of a dedicated server',
				},
				{
					name: 'BIOS SGX Get',
					value: 'biosSgxGet',
					action: 'Get BIOS SGX parameters of a dedicated server',
				},
				{
					name: 'Boot List',
					value: 'bootListGet',
					action: 'List compatible netboots for a dedicated server',
				},
				{
					name: 'Datacenter Availability List',
					value: 'datacenterAvailabilityList',
					action: 'List available datacenters for a dedicated server',
				},
				{
					name: 'Firewall Get',
					value: 'firewallGet',
					action: 'Get firewall properties of a dedicated server',
				},
				{
					name: 'Get Server Properties',
					value: 'get',
					action: 'Get properties of a dedicated server',
				},
				{
					name: 'IPMI Get',
					value: 'ipmiGet',
					action: 'Get IPMI info of a dedicated server',
				},
				{ name: 'List', value: 'list', action: 'List all dedicated servers' },
				{
					name: 'Raw Availability List',
					value: 'availabilityRawGet',
					action: 'List raw dedicated server availabilities',
				},
			],
			default: 'get',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionList() as INodeProperties[]),
		...(descriptionGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['get'] },
		}) as INodeProperties[]),
		...(descriptionAvailabilityRawGet() as INodeProperties[]),
		...(descriptionDatacenterAvailabilityList({
			...displayOptions,
			show: { dedicatedServerOperation: ['datacenterAvailabilityList'] },
		}) as INodeProperties[]),
		...(descriptionBiosSettingsGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['biosSettingsGet'] },
		}) as INodeProperties[]),
		...(descriptionBiosSgxGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['biosSgxGet'] },
		}) as INodeProperties[]),
		...(descriptionBootListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['bootListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessListGet'] },
		}) as INodeProperties[]),
		...(descriptionFirewallGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['firewallGet'] },
		}) as INodeProperties[]),
		...(descriptionIpmiGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['ipmiGet'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedServerOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return executeList.call(this);
		case 'get':
			return executeGet.call(this, itemIndex);
		case 'availabilityRawGet':
			return executeAvailabilityRawGet.call(this);
		case 'datacenterAvailabilityList':
			return executeDatacenterAvailabilityList.call(this);
		case 'biosSettingsGet':
			return executeBiosSettingsGet.call(this, itemIndex);
		case 'biosSgxGet':
			return executeBiosSgxGet.call(this, itemIndex);
		case 'bootListGet':
			return executeBootListGet.call(this, itemIndex);
		case 'backupCloudGet':
			return executeBackupCloudGet.call(this, itemIndex);
		case 'backupFtpGet':
			return executeBackupFtpGet.call(this, itemIndex);
		case 'backupFtpAccessListGet':
			return executeBackupFtpAccessListGet.call(this, itemIndex);
		case 'firewallGet':
			return executeFirewallGet.call(this, itemIndex);
		case 'ipmiGet':
			return executeIpmiGet.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedServer"`);
}
