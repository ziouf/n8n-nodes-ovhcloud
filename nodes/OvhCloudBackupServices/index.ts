import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionBackupServicestenantListGet,
	execute as executeBackupServicestenantListGet,
} from './backupServicestenantListGet.operation';
import {
	description as descriptionBackupServicestenantListGet2,
	execute as executeBackupServicestenantListGet2,
} from './backupServicestenantListGet2.operation';
import {
	description as descriptionBackupServicestenantvaultListGet,
	execute as executeBackupServicestenantvaultListGet,
} from './backupServicestenantvaultListGet.operation';
import {
	description as descriptionBackupServicestenantvaultListGet2,
	execute as executeBackupServicestenantvaultListGet2,
} from './backupServicestenantvaultListGet2.operation';
import {
	description as descriptionBackupServicestenantvaultUpdatePut,
	execute as executeBackupServicestenantvaultUpdatePut,
} from './backupServicestenantvaultUpdatePut.operation';
import {
	description as descriptionBackupServicestenantvspcListGet,
	execute as executeBackupServicestenantvspcListGet,
} from './backupServicestenantvspcListGet.operation';
import {
	description as descriptionBackupServicestenantvspcListGet2,
	execute as executeBackupServicestenantvspcListGet2,
} from './backupServicestenantvspcListGet2.operation';
import {
	description as descriptionBackupServicestenantvspcUpdatePut,
	execute as executeBackupServicestenantvspcUpdatePut,
} from './backupServicestenantvspcUpdatePut.operation';
import {
	description as descriptionBackupServicestenantvspcbackupAgentCreatePost,
	execute as executeBackupServicestenantvspcbackupAgentCreatePost,
} from './backupServicestenantvspcbackupAgentCreatePost.operation';
import {
	description as descriptionBackupServicestenantvspcbackupAgentDeleteDelete,
	execute as executeBackupServicestenantvspcbackupAgentDeleteDelete,
} from './backupServicestenantvspcbackupAgentDeleteDelete.operation';
import {
	description as descriptionBackupServicestenantvspcbackupAgentListGet,
	execute as executeBackupServicestenantvspcbackupAgentListGet,
} from './backupServicestenantvspcbackupAgentListGet.operation';
import {
	description as descriptionBackupServicestenantvspcbackupAgentListGet2,
	execute as executeBackupServicestenantvspcbackupAgentListGet2,
} from './backupServicestenantvspcbackupAgentListGet2.operation';
import {
	description as descriptionBackupServicestenantvspcbackupAgentUpdatePut,
	execute as executeBackupServicestenantvspcbackupAgentUpdatePut,
} from './backupServicestenantvspcbackupAgentUpdatePut.operation';
import {
	description as descriptionBackupServicestenantvspcbackupPoliciesListGet,
	execute as executeBackupServicestenantvspcbackupPoliciesListGet,
} from './backupServicestenantvspcbackupPoliciesListGet.operation';
import {
	description as descriptionBackupServicestenantvspcmanagementAgentListGet,
	execute as executeBackupServicestenantvspcmanagementAgentListGet,
} from './backupServicestenantvspcmanagementAgentListGet.operation';

const { description, execute } = createOperationDispatcher(
	'backupServicesOperation',
	'ovhCloudBackupServices',
	[
	{
		name: 'Creates Backup Agent',
		value: 'backupServicestenantvspcbackupAgentCreatePost',
		action: 'Creates backup agent',
		execute: executeBackupServicestenantvspcbackupAgentCreatePost,
		description: descriptionBackupServicestenantvspcbackupAgentCreatePost,
	},
	{
		name: 'Deletes Backup Agent',
		value: 'backupServicestenantvspcbackupAgentDeleteDelete',
		action: 'Deletes backup agent',
		execute: executeBackupServicestenantvspcbackupAgentDeleteDelete,
		description: descriptionBackupServicestenantvspcbackupAgentDeleteDelete,
	},
	{
		name: 'Gets Specific Backup Agent Details',
		value: 'backupServicestenantvspcbackupAgentListGet2',
		action: 'Gets specific backup agent details',
		execute: executeBackupServicestenantvspcbackupAgentListGet2,
		description: descriptionBackupServicestenantvspcbackupAgentListGet2,
	},
	{
		name: 'Lists Backup Agents',
		value: 'backupServicestenantvspcbackupAgentListGet',
		action: 'Lists backup agents',
		execute: executeBackupServicestenantvspcbackupAgentListGet,
		description: descriptionBackupServicestenantvspcbackupAgentListGet,
	},
	{
		name: 'Lists Vaults for Your Tenant',
		value: 'backupServicestenantvaultListGet',
		action: 'Lists vaults for your tenant',
		execute: executeBackupServicestenantvaultListGet,
		description: descriptionBackupServicestenantvaultListGet,
	},
	{
		name: 'Retrieves Details of a Specific VSPC Tenant',
		value: 'backupServicestenantvspcListGet2',
		action: 'Retrieves details of a specific VSPC tenant',
		execute: executeBackupServicestenantvspcListGet2,
		description: descriptionBackupServicestenantvspcListGet2,
	},
	{
		name: 'Retrieves List of VSPC Tenants',
		value: 'backupServicestenantvspcListGet',
		action: 'Retrieves list of VSPC tenants',
		execute: executeBackupServicestenantvspcListGet,
		description: descriptionBackupServicestenantvspcListGet,
	},
	{
		name: 'Retrieves Specific Vault Details',
		value: 'backupServicestenantvaultListGet2',
		action: 'Retrieves specific vault details',
		execute: executeBackupServicestenantvaultListGet2,
		description: descriptionBackupServicestenantvaultListGet2,
	},
	{
		name: 'Retrieves the Backup Tenants You Manage',
		value: 'backupServicestenantListGet',
		action: 'Retrieves the backup tenants you manage',
		execute: executeBackupServicestenantListGet,
		description: descriptionBackupServicestenantListGet,
		default: true,
	},
	{
		name: 'Retrieves the Details of Your Backup Tenant',
		value: 'backupServicestenantListGet2',
		action: 'Retrieves the details of your backup tenant',
		execute: executeBackupServicestenantListGet2,
		description: descriptionBackupServicestenantListGet2,
	},
	{
		name: 'Retrieves the Download Link for the Management Agent',
		value: 'backupServicestenantvspcmanagementAgentListGet',
		action: 'Retrieves the download link for the management agent',
		execute: executeBackupServicestenantvspcmanagementAgentListGet,
		description: descriptionBackupServicestenantvspcmanagementAgentListGet,
	},
	{
		name: 'Retrieves the List of Backup Policies Available in Your VSPC',
		value: 'backupServicestenantvspcbackupPoliciesListGet',
		action: 'Retrieves the list of backup policies available in your VSPC',
		execute: executeBackupServicestenantvspcbackupPoliciesListGet,
		description: descriptionBackupServicestenantvspcbackupPoliciesListGet,
	},
	{
		name: 'Updates Backup Agent',
		value: 'backupServicestenantvspcbackupAgentUpdatePut',
		action: 'Updates backup agent',
		execute: executeBackupServicestenantvspcbackupAgentUpdatePut,
		description: descriptionBackupServicestenantvspcbackupAgentUpdatePut,
	},
	{
		name: 'Updates the Display Name of a VSPC Tenant',
		value: 'backupServicestenantvspcUpdatePut',
		action: 'Updates the display name of a VSPC tenant',
		execute: executeBackupServicestenantvspcUpdatePut,
		description: descriptionBackupServicestenantvspcUpdatePut,
	},
	{
		name: 'Updates Vault Display Name and Cloud Repository',
		value: 'backupServicestenantvaultUpdatePut',
		action: 'Updates vault display name and cloud repository',
		execute: executeBackupServicestenantvaultUpdatePut,
		description: descriptionBackupServicestenantvaultUpdatePut,
	},
	],
);

export { description, execute };
