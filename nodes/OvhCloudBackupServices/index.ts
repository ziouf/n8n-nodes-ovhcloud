import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeBackupServicestenantListGet,
	description as descriptionBackupServicestenantListGet,
} from './backupServicestenantListGet.operation';
import {
	execute as executeBackupServicestenantListGet2,
	description as descriptionBackupServicestenantListGet2,
} from './backupServicestenantListGet2.operation';
import {
	execute as executeBackupServicestenantvaultListGet,
	description as descriptionBackupServicestenantvaultListGet,
} from './backupServicestenantvaultListGet.operation';
import {
	execute as executeBackupServicestenantvaultListGet2,
	description as descriptionBackupServicestenantvaultListGet2,
} from './backupServicestenantvaultListGet2.operation';
import {
	execute as executeBackupServicestenantvaultUpdatePut,
	description as descriptionBackupServicestenantvaultUpdatePut,
} from './backupServicestenantvaultUpdatePut.operation';
import {
	execute as executeBackupServicestenantvspcListGet,
	description as descriptionBackupServicestenantvspcListGet,
} from './backupServicestenantvspcListGet.operation';
import {
	execute as executeBackupServicestenantvspcListGet2,
	description as descriptionBackupServicestenantvspcListGet2,
} from './backupServicestenantvspcListGet2.operation';
import {
	execute as executeBackupServicestenantvspcUpdatePut,
	description as descriptionBackupServicestenantvspcUpdatePut,
} from './backupServicestenantvspcUpdatePut.operation';
import {
	execute as executeBackupServicestenantvspcbackupAgentListGet,
	description as descriptionBackupServicestenantvspcbackupAgentListGet,
} from './backupServicestenantvspcbackupAgentListGet.operation';
import {
	execute as executeBackupServicestenantvspcbackupAgentCreatePost,
	description as descriptionBackupServicestenantvspcbackupAgentCreatePost,
} from './backupServicestenantvspcbackupAgentCreatePost.operation';
import {
	execute as executeBackupServicestenantvspcbackupAgentDeleteDelete,
	description as descriptionBackupServicestenantvspcbackupAgentDeleteDelete,
} from './backupServicestenantvspcbackupAgentDeleteDelete.operation';
import {
	execute as executeBackupServicestenantvspcbackupAgentListGet2,
	description as descriptionBackupServicestenantvspcbackupAgentListGet2,
} from './backupServicestenantvspcbackupAgentListGet2.operation';
import {
	execute as executeBackupServicestenantvspcbackupAgentUpdatePut,
	description as descriptionBackupServicestenantvspcbackupAgentUpdatePut,
} from './backupServicestenantvspcbackupAgentUpdatePut.operation';
import {
	execute as executeBackupServicestenantvspcbackupPoliciesListGet,
	description as descriptionBackupServicestenantvspcbackupPoliciesListGet,
} from './backupServicestenantvspcbackupPoliciesListGet.operation';
import {
	execute as executeBackupServicestenantvspcmanagementAgentListGet,
	description as descriptionBackupServicestenantvspcmanagementAgentListGet,
} from './backupServicestenantvspcmanagementAgentListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'backupServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Retrieves the Backup Tenants You Manage',
				value: 'backupServicestenantListGet',
				action: 'Retrieves the backup tenants you manage',
			},
			{
				name: 'Retrieves the Details of Your Backup Tenant',
				value: 'backupServicestenantListGet2',
				action: 'Retrieves the details of your backup tenant',
			},
			{
				name: 'Lists Vaults for Your Tenant',
				value: 'backupServicestenantvaultListGet',
				action: 'Lists vaults for your tenant',
			},
			{
				name: 'Retrieves Specific Vault Details',
				value: 'backupServicestenantvaultListGet2',
				action: 'Retrieves specific vault details',
			},
			{
				name: 'Updates Vault Display Name and Cloud Repository',
				value: 'backupServicestenantvaultUpdatePut',
				action: 'Updates vault display name and cloud repository',
			},
			{
				name: 'Retrieves List of VSPC Tenants',
				value: 'backupServicestenantvspcListGet',
				action: 'Retrieves list of VSPC tenants',
			},
			{
				name: 'Retrieves Details of a Specific VSPC Tenant',
				value: 'backupServicestenantvspcListGet2',
				action: 'Retrieves details of a specific VSPC tenant',
			},
			{
				name: 'Updates the Display Name of a VSPC Tenant',
				value: 'backupServicestenantvspcUpdatePut',
				action: 'Updates the display name of a VSPC tenant',
			},
			{
				name: 'Lists Backup Agents',
				value: 'backupServicestenantvspcbackupAgentListGet',
				action: 'Lists backup agents',
			},
			{
				name: 'Creates Backup Agent',
				value: 'backupServicestenantvspcbackupAgentCreatePost',
				action: 'Creates backup agent',
			},
			{
				name: 'Deletes Backup Agent',
				value: 'backupServicestenantvspcbackupAgentDeleteDelete',
				action: 'Deletes backup agent',
			},
			{
				name: 'Gets Specific Backup Agent Details',
				value: 'backupServicestenantvspcbackupAgentListGet2',
				action: 'Gets specific backup agent details',
			},
			{
				name: 'Updates Backup Agent',
				value: 'backupServicestenantvspcbackupAgentUpdatePut',
				action: 'Updates backup agent',
			},
			{
				name: 'Retrieves the List of Backup Policies Available in Your VSPC',
				value: 'backupServicestenantvspcbackupPoliciesListGet',
				action: 'Retrieves the list of backup policies available in your VSPC',
			},
			{
				name: 'Retrieves the Download Link for the Management Agent',
				value: 'backupServicestenantvspcmanagementAgentListGet',
				action: 'Retrieves the download link for the management agent',
			},

			],
			default: 'backupServicestenantListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionBackupServicestenantListGet({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantListGet2({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantListGet2'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvaultListGet({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvaultListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvaultListGet2({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvaultListGet2'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvaultUpdatePut({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvaultUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcListGet({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcListGet2({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcListGet2'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcUpdatePut({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcbackupAgentListGet({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcbackupAgentListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcbackupAgentCreatePost({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcbackupAgentCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcbackupAgentDeleteDelete({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcbackupAgentDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcbackupAgentListGet2({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcbackupAgentListGet2'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcbackupAgentUpdatePut({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcbackupAgentUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcbackupPoliciesListGet({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcbackupPoliciesListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupServicestenantvspcmanagementAgentListGet({
			...displayOptions,
			show: { backupServicesOperation: ['backupServicestenantvspcmanagementAgentListGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('backupServicesOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'backupServicestenantListGet':
			return executeBackupServicestenantListGet.call(this, itemIndex);
		case 'backupServicestenantListGet2':
			return executeBackupServicestenantListGet2.call(this, itemIndex);
		case 'backupServicestenantvaultListGet':
			return executeBackupServicestenantvaultListGet.call(this, itemIndex);
		case 'backupServicestenantvaultListGet2':
			return executeBackupServicestenantvaultListGet2.call(this, itemIndex);
		case 'backupServicestenantvaultUpdatePut':
			return executeBackupServicestenantvaultUpdatePut.call(this, itemIndex);
		case 'backupServicestenantvspcListGet':
			return executeBackupServicestenantvspcListGet.call(this, itemIndex);
		case 'backupServicestenantvspcListGet2':
			return executeBackupServicestenantvspcListGet2.call(this, itemIndex);
		case 'backupServicestenantvspcUpdatePut':
			return executeBackupServicestenantvspcUpdatePut.call(this, itemIndex);
		case 'backupServicestenantvspcbackupAgentListGet':
			return executeBackupServicestenantvspcbackupAgentListGet.call(this, itemIndex);
		case 'backupServicestenantvspcbackupAgentCreatePost':
			return executeBackupServicestenantvspcbackupAgentCreatePost.call(this, itemIndex);
		case 'backupServicestenantvspcbackupAgentDeleteDelete':
			return executeBackupServicestenantvspcbackupAgentDeleteDelete.call(this, itemIndex);
		case 'backupServicestenantvspcbackupAgentListGet2':
			return executeBackupServicestenantvspcbackupAgentListGet2.call(this, itemIndex);
		case 'backupServicestenantvspcbackupAgentUpdatePut':
			return executeBackupServicestenantvspcbackupAgentUpdatePut.call(this, itemIndex);
		case 'backupServicestenantvspcbackupPoliciesListGet':
			return executeBackupServicestenantvspcbackupPoliciesListGet.call(this, itemIndex);
		case 'backupServicestenantvspcmanagementAgentListGet':
			return executeBackupServicestenantvspcmanagementAgentListGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudBackupServices"`);
}
