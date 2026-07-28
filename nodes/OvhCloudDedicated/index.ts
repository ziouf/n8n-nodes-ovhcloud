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
	execute as executeAuthSecretGet,
	description as descriptionAuthSecretGet,
} from './resources/authSecretGet.operation';
import {
	execute as executeBackupCloudDelete,
	description as descriptionBackupCloudDelete,
} from './resources/backupCloudDelete.operation';
import {
	execute as executeBackupCloudGetByIdGet,
	description as descriptionBackupCloudGetByIdGet,
} from './resources/backupCloudGetByIdGet.operation';
import {
	execute as executeBurstUpdate,
	description as descriptionBurstUpdate,
} from './resources/burstUpdate.operation';
import {
	execute as executeChangeContactCreate,
	description as descriptionChangeContactCreate,
} from './resources/changeContactCreate.operation';
import {
	execute as executeConfirmTerminationCreate,
	description as descriptionConfirmTerminationCreate,
} from './resources/confirmTerminationCreate.operation';
import {
	execute as executeBackupCloudOfferDetailsCreate,
	description as descriptionBackupCloudOfferDetailsCreate,
} from './resources/backupCloudOfferDetailsCreate.operation';
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
	execute as executeBackupFtpPost,
	description as descriptionBackupFtpPost,
} from './resources/backupFtpPost.operation';
import {
	execute as executeBackupFtpGet,
	description as descriptionBackupFtpGet,
} from './resources/backupFtpGet.operation';
import {
	execute as executeBackupFtpDelete,
	description as descriptionBackupFtpDelete,
} from './resources/backupFtpDelete.operation';
import {
	execute as executeBackupFtpAccessListGet,
	description as descriptionBackupFtpAccessListGet,
} from './resources/backupFtpAccessListGet.operation';
import {
	execute as executeBackupFtpAccessPost,
	description as descriptionBackupFtpAccessPost,
} from './resources/backupFtpAccessPost.operation';
import {
	execute as executeBackupFtpAccessDelete,
	description as descriptionBackupFtpAccessDelete,
} from './resources/backupFtpAccessDelete.operation';
import {
	execute as executeBackupFtpAccessEditPut,
	description as descriptionBackupFtpAccessEditPut,
} from './resources/backupFtpAccessEditPut.operation';
import {
	execute as executeBackupFtpPasswordPost,
	description as descriptionBackupFtpPasswordPost,
} from './resources/backupFtpPasswordPost.operation';
import {
	execute as executeBiosSgxConfigurePost,
	description as descriptionBiosSgxConfigurePost,
} from './resources/biosSgxConfigurePost.operation';
import {
	execute as executeFirewallGet,
	description as descriptionFirewallGet,
} from './resources/firewallGet.operation';
import {
	execute as executeFirewallUpdate,
	description as descriptionFirewallUpdate,
} from './resources/firewallUpdate.operation';
import {
	execute as executeIpmiGet,
	description as descriptionIpmiGet,
} from './resources/ipmiGet.operation';
import {
	execute as executeOptionDelete,
	description as descriptionOptionDelete,
} from './resources/optionDelete.operation';
import {
	execute as executeServerUpdate,
	description as descriptionServerUpdate,
} from './resources/serverUpdate.operation';
import {
	execute as executeNetbootOrderPut,
	description as descriptionNetbootOrderPut,
} from './resources/netbootOrderPut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedServerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Auth Secret Get',
					value: 'authSecretGet',
					action: 'Retrieve authentication secret of a dedicated server',
				},
				{
					name: 'Backup Cloud Delete',
					value: 'backupCloudDelete',
					action: 'Deactivate and remove cloud backup from a dedicated server (irreversible)',
				},
				{
					name: 'Backup Cloud Get',
					value: 'backupCloudGet',
					action: 'Get cloud backup properties of a dedicated server',
				},
				{
					name: 'Backup Cloud Offer Details Create',
					value: 'backupCloudOfferDetailsCreate',
					action: 'Activate cloud backup for a dedicated server',
				},
				{
					name: 'Backup FTP Access List',
					value: 'backupFtpAccessListGet',
					action: 'List ACLs for FTP backup access control',
				},
				{
					name: 'Backup FTP Access Post',
					value: 'backupFtpAccessPost',
					action: 'Add IP ACL rule to FTP backup access control of a dedicated server',
				},
				{
					name: 'Backup FTP ACL Delete',
					value: 'backupFtpAccessDelete',
					action: 'Remove an IP block from the backup FTP ACL on a dedicated server',
				},
				{
					name: 'Backup FTP ACL Edit',
					value: 'backupFtpAccessEditPut',
					action:
						'Update protocol access permissions for an IP block in the backup FTP ACL of a dedicated server',
				},
				{
					name: 'Backup FTP Delete',
					value: 'backupFtpDelete',
					action: 'Terminate FTP backup for a dedicated server (irreversible)',
				},
				{
					name: 'Backup FTP Get',
					value: 'backupFtpGet',
					action: 'Get FTP backup properties of a dedicated server',
				},
				{
					name: 'Backup FTP Password Update',
					value: 'backupFtpPasswordPost',
					action: 'Change the password for backup FTP on a dedicated server',
				},
				{
					name: 'Backup FTP Post Create',
					value: 'backupFtpPost',
					action: 'Create FTP backup for a dedicated server (irreversible)',
				},
				{
					name: 'BIOS Settings Get',
					value: 'biosSettingsGet',
					action: 'Get BIOS settings of a dedicated server',
				},
				{
					name: 'BIOS SGX Configure Post',
					value: 'biosSgxConfigurePost',
					action: 'Configure BIOS SGX (PRMRR size and status) on a dedicated server (BETA)',
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
					name: 'Burst Update',
					value: 'burstUpdate',
					action: 'Update over-provisioning configuration of a dedicated server',
				},
				{
					name: 'Change Contact Create',
					value: 'changeContactCreate',
					action: 'Initiate contact change procedure for a dedicated server',
				},
				{
					name: 'Confirm Termination Create',
					value: 'confirmTerminationCreate',
					action: 'Confirm termination of a dedicated server (irreversible)',
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
					name: 'Firewall Update',
					value: 'firewallUpdate',
					action: 'Modify firewall rules of a dedicated server',
				},
				{
					name: 'Get Server Properties',
					value: 'get',
					action: 'Get properties of a dedicated server',
				},
				{ name: 'IPMI Get', value: 'ipmiGet', action: 'Get IPMI info of a dedicated server' },
				{
					name: 'List',
					value: 'list',
					action: 'List all dedicated servers',
				},
				{
					name: 'Netboot Order Update',
					value: 'netbootOrderUpdate',
					action: 'Set netboot order for a dedicated server',
				},
				{
					name: 'Option Delete',
					value: 'optionDelete',
					action: 'Release an option from a dedicated server (irreversible)',
				},
				{
					name: 'Raw Availability List',
					value: 'availabilityRawGet',
					action: 'List raw dedicated server availabilities',
				},
				{
					name: 'Server Update',
					value: 'serverUpdate',
					action: "Modify a dedicated server's name and/or status",
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
		...(descriptionAuthSecretGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['authSecretGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudGetByIdGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudGetByIdGet'] },
		}) as INodeProperties[]),
		...(descriptionBurstUpdate({
			...displayOptions,
			show: { dedicatedServerOperation: ['burstUpdate'] },
		}) as INodeProperties[]),
		...(descriptionChangeContactCreate({
			...displayOptions,
			show: { dedicatedServerOperation: ['changeContactCreate'] },
		}) as INodeProperties[]),
		...(descriptionConfirmTerminationCreate({
			...displayOptions,
			show: { dedicatedServerOperation: ['confirmTerminationCreate'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudOfferDetailsCreate({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudOfferDetailsCreate'] },
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
		...(descriptionBiosSgxConfigurePost({
			...displayOptions,
			show: { dedicatedServerOperation: ['biosSgxConfigurePost'] },
		}) as INodeProperties[]),
		...(descriptionBootListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['bootListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpPost({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpPost'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessPost({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessPost'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessEditPut({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessEditPut'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpPasswordPost({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpPasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionFirewallGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['firewallGet'] },
		}) as INodeProperties[]),
		...(descriptionFirewallUpdate({
			...displayOptions,
			show: { dedicatedServerOperation: ['firewallUpdate'] },
		}) as INodeProperties[]),
		...(descriptionIpmiGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['ipmiGet'] },
		}) as INodeProperties[]),
		...(descriptionOptionDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['optionDelete'] },
		}) as INodeProperties[]),
		...(descriptionServerUpdate({
			...displayOptions,
			show: { dedicatedServerOperation: ['serverUpdate'] },
		}) as INodeProperties[]),
		...(descriptionNetbootOrderPut({
			...displayOptions,
			show: { dedicatedServerOperation: ['netbootOrderUpdate'] },
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
		case 'authSecretGet':
			return executeAuthSecretGet.call(this);
		case 'backupCloudDelete':
			return executeBackupCloudDelete.call(this);
		case 'backupCloudGetByIdGet':
			return executeBackupCloudGetByIdGet.call(this, itemIndex);
		case 'burstUpdate':
			return executeBurstUpdate.call(this);
		case 'changeContactCreate':
			return executeChangeContactCreate.call(this);
		case 'confirmTerminationCreate':
			return executeConfirmTerminationCreate.call(this);
		case 'backupCloudOfferDetailsCreate':
			return executeBackupCloudOfferDetailsCreate.call(this);
		case 'availabilityRawGet':
			return executeAvailabilityRawGet.call(this);
		case 'datacenterAvailabilityList':
			return executeDatacenterAvailabilityList.call(this);
		case 'biosSettingsGet':
			return executeBiosSettingsGet.call(this, itemIndex);
		case 'biosSgxGet':
			return executeBiosSgxGet.call(this, itemIndex);
		case 'biosSgxConfigurePost':
			return executeBiosSgxConfigurePost.call(this);
		case 'bootListGet':
			return executeBootListGet.call(this, itemIndex);
		case 'backupCloudGet':
			return executeBackupCloudGet.call(this, itemIndex);
		case 'backupFtpPost':
			return executeBackupFtpPost.call(this);
		case 'backupFtpDelete':
			return executeBackupFtpDelete.call(this);
		case 'backupFtpGet':
			return executeBackupFtpGet.call(this, itemIndex);
		case 'backupFtpAccessListGet':
			return executeBackupFtpAccessListGet.call(this, itemIndex);
		case 'backupFtpAccessPost':
			return executeBackupFtpAccessPost.call(this);
		case 'backupFtpAccessDelete':
			return executeBackupFtpAccessDelete.call(this);
		case 'backupFtpAccessEditPut':
			return executeBackupFtpAccessEditPut.call(this);
		case 'backupFtpPasswordPost':
			return executeBackupFtpPasswordPost.call(this);
		case 'firewallGet':
			return executeFirewallGet.call(this, itemIndex);
		case 'firewallUpdate':
			return executeFirewallUpdate.call(this);
		case 'ipmiGet':
			return executeIpmiGet.call(this, itemIndex);
		case 'optionDelete':
			return executeOptionDelete.call(this);
		case 'serverUpdate':
			return executeServerUpdate.call(this);
		case 'netbootOrderUpdate':
			return executeNetbootOrderPut.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedServer"`);
}
