import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeDedicatedCephTerminateCreatePost,
	description as descriptionDedicatedCephTerminateCreatePost,
} from './DedicatedCephTerminateCreate.operation';

import {
	execute as executeCephUserPoolDeleteDelete,
	description as descriptionCephUserPoolDeleteDelete,
} from './CephUserPoolDelete.operation';

import {
	execute as executeDedicatedCephConfirmterminationCreatePost,
	description as descriptionDedicatedCephConfirmterminationCreatePost,
} from './DedicatedCephConfirmterminationCreate.operation';

import {
	execute as executeDedicatedCephPoolCreatePost,
	description as descriptionDedicatedCephPoolCreatePost,
} from './DedicatedCephPoolCreate.operation';

import {
	execute as executeDedicatedCephUserCreatePost,
	description as descriptionDedicatedCephUserCreatePost,
} from './DedicatedCephUserCreate.operation';

import {
	execute as executeCephUserPoolCreatePost,
	description as descriptionCephUserPoolCreatePost,
} from './CephUserPoolCreate.operation';

import {
	execute as executeDedicatedCephAclCreatePost,
	description as descriptionDedicatedCephAclCreatePost,
} from './DedicatedCephAclCreate.operation';

import {
	execute as executeCephOsdBlocklistDeleteDelete,
	description as descriptionCephOsdBlocklistDeleteDelete,
} from './CephOsdBlocklistDelete.operation';

import {
	execute as executeDedicatedCephPoolDeleteDelete,
	description as descriptionDedicatedCephPoolDeleteDelete,
} from './DedicatedCephPoolDelete.operation';

import {
	execute as executeDedicatedCephUserDeleteDelete,
	description as descriptionDedicatedCephUserDeleteDelete,
} from './DedicatedCephUserDelete.operation';

import {
	execute as executeDedicatedCephAclDeleteDelete,
	description as descriptionDedicatedCephAclDeleteDelete,
} from './DedicatedCephAclDelete.operation';

import {
	execute as executeCephCephfsDisableCreatePost,
	description as descriptionCephCephfsDisableCreatePost,
} from './CephCephfsDisableCreate.operation';

import {
	execute as executeCephCephfsEnableCreatePost,
	description as descriptionCephCephfsEnableCreatePost,
} from './CephCephfsEnableCreate.operation';

import {
	execute as executeDedicatedCephCephfsGetFsnameGet,
	description as descriptionDedicatedCephCephfsGetFsnameGet,
} from './DedicatedCephCephfsGetFsname.operation';

import {
	execute as executeDedicatedCephGetServicenameGet,
	description as descriptionDedicatedCephGetServicenameGet,
} from './DedicatedCephGetServicename.operation';

import {
	execute as executeDedicatedCephHealthGetGet,
	description as descriptionDedicatedCephHealthGetGet,
} from './DedicatedCephHealthGet.operation';

import {
	execute as executeDedicatedCephUserGetUsernameGet,
	description as descriptionDedicatedCephUserGetUsernameGet,
} from './DedicatedCephUserGetUsername.operation';

import {
	execute as executeDedicatedCephPoolGetPoolnameGet,
	description as descriptionDedicatedCephPoolGetPoolnameGet,
} from './DedicatedCephPoolGetPoolname.operation';

import {
	execute as executeDedicatedCephAclGetAclidGet,
	description as descriptionDedicatedCephAclGetAclidGet,
} from './DedicatedCephAclGetAclid.operation';

import {
	execute as executeDedicatedCephAclGetGet,
	description as descriptionDedicatedCephAclGetGet,
} from './DedicatedCephAclGet.operation';

import {
	execute as executeDedicatedCephPoolGetGet,
	description as descriptionDedicatedCephPoolGetGet,
} from './DedicatedCephPoolGet.operation';

import {
	execute as executeDedicatedCephUserGetGet,
	description as descriptionDedicatedCephUserGetGet,
} from './DedicatedCephUserGet.operation';

import {
	execute as executeDedicatedCephServiceinfosGetGet,
	description as descriptionDedicatedCephServiceinfosGetGet,
} from './DedicatedCephServiceinfosGet.operation';

import {
	execute as executeDedicatedCephTaskGetTaskidGet,
	description as descriptionDedicatedCephTaskGetTaskidGet,
} from './DedicatedCephTaskGetTaskid.operation';

import {
	execute as executeDedicatedCephChangecontactCreatePost,
	description as descriptionDedicatedCephChangecontactCreatePost,
} from './DedicatedCephChangecontactCreate.operation';

import {
	execute as executeDedicatedCephGetGet,
	description as descriptionDedicatedCephGetGet,
} from './DedicatedCephGet.operation';

import {
	execute as executeDedicatedCephCephfsGetGet,
	description as descriptionDedicatedCephCephfsGetGet,
} from './DedicatedCephCephfsGet.operation';

import {
	execute as executeDedicatedCephTaskGetGet,
	description as descriptionDedicatedCephTaskGetGet,
} from './DedicatedCephTaskGet.operation';

import {
	execute as executeCephUserPoolGetGet,
	description as descriptionCephUserPoolGetGet,
} from './CephUserPoolGet.operation';

import {
	execute as executeCephPoolAllowdeletionUpdatePut,
	description as descriptionCephPoolAllowdeletionUpdatePut,
} from './CephPoolAllowdeletionUpdate.operation';

import {
	execute as executeDedicatedCephCephfsDeleteDelete,
	description as descriptionDedicatedCephCephfsDeleteDelete,
} from './DedicatedCephCephfsDelete.operation';

import {
	execute as executeCephOsdBlocklistGetGet,
	description as descriptionCephOsdBlocklistGetGet,
} from './CephOsdBlocklistGet.operation';

import {
	execute as executeDedicatedCephUpdatePut,
	description as descriptionDedicatedCephUpdatePut,
} from './DedicatedCephUpdate.operation';

import {
	execute as executeDedicatedCephServiceinfosUpdatePut,
	description as descriptionDedicatedCephServiceinfosUpdatePut,
} from './DedicatedCephServiceinfosUpdate.operation';

import {
	execute as executeCephUserPoolUpdatePut,
	description as descriptionCephUserPoolUpdatePut,
} from './CephUserPoolUpdate.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedCephOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Ask For The Termination Of Your Service',
					value: 'DedicatedCephTerminateCreate',
					action: 'Ask for the termination of your service',
				},
				{
					name: 'Clear User-Pool Permission For Single Pool',
					value: 'CephUserPoolDelete',
					action: 'Clear user-pool permission for single pool',
				},
				{
					name: 'Confirm Service Termination',
					value: 'DedicatedCephConfirmterminationCreate',
					action: 'Confirm service termination',
				},
				{
					name: 'Create A New Ceph Pool',
					value: 'DedicatedCephPoolCreate',
					action: 'Create a new ceph pool',
				},
				{
					name: 'Create A New Ceph User',
					value: 'DedicatedCephUserCreate',
					action: 'Create a new ceph user',
				},
				{
					name: 'Create New User-Pool Permissions. All Old Permissions Will Be Cleared',
					value: 'CephUserPoolCreate',
					action: 'Create new user-pool permissions. All old permissions will be cleared',
				},
				{
					name: 'Create One Or More New Ip Acls',
					value: 'DedicatedCephAclCreate',
					action: 'Create one or more new IP ACLs',
				},
				{
					name: 'Delete A Ceph Osd Blocklist Entry. Dangerous',
					value: 'CephOsdBlocklistDelete',
					action: 'Delete a Ceph OSD blocklist entry. DANGEROUS',
				},
				{
					name: 'Delete A Single Ceph Pool',
					value: 'DedicatedCephPoolDelete',
					action: 'Delete a single ceph pool',
				},
				{
					name: 'Delete An Existing Single Ceph User',
					value: 'DedicatedCephUserDelete',
					action: 'Delete an existing single ceph user',
				},
				{
					name: 'Delete Single Ip Acl',
					value: 'DedicatedCephAclDelete',
					action: 'Delete single IP ACL',
				},
				{
					name: 'Disable Cephfs Filesystem',
					value: 'CephCephfsDisableCreate',
					action: 'Disable CephFS filesystem',
				},
				{
					name: 'Enable Cephfs Filesystem',
					value: 'CephCephfsEnableCreate',
					action: 'Enable CephFS filesystem',
				},
				{
					name: 'Get Cephfs Filesystem Information',
					value: 'DedicatedCephCephfsGetFsname',
					action: 'Get CephFS filesystem information',
				},
				{
					name: 'Get Cluster Details',
					value: 'DedicatedCephGetServicename',
					action: 'Get cluster details',
				},
				{
					name: 'Get Cluster Health',
					value: 'DedicatedCephHealthGet',
					action: 'Get cluster health',
				},
				{
					name: 'Get Details About A Ceph User',
					value: 'DedicatedCephUserGetUsername',
					action: 'Get details about a ceph user',
				},
				{
					name: 'Get Details About An Existing Ceph Pool',
					value: 'DedicatedCephPoolGetPoolname',
					action: 'Get details about an existing ceph pool',
				},
				{
					name: 'Get Details About Ip Acl',
					value: 'DedicatedCephAclGetAclid',
					action: 'Get details about IP ACL',
				},
				{
					name: 'Get List Of All Ip Acls In A Cluster',
					value: 'DedicatedCephAclGet',
					action: 'Get list of all IP ACLs in a cluster',
				},
				{
					name: 'Get List Of All Pools In A Cluster',
					value: 'DedicatedCephPoolGet',
					action: 'Get list of all pools in a cluster',
				},
				{
					name: 'Get List Of All Users In A Cluster',
					value: 'DedicatedCephUserGet',
					action: 'Get list of all users in a cluster',
				},
				{
					name: 'Get Service Information',
					value: 'DedicatedCephServiceinfosGet',
					action: 'Get service information',
				},
				{
					name: 'Get Task Details',
					value: 'DedicatedCephTaskGetTaskid',
					action: 'Get task details',
				},
				{
					name: 'Launch A Contact Change Procedure',
					value: 'DedicatedCephChangecontactCreate',
					action: 'Launch a contact change procedure',
				},
				{
					name: 'List Available Services',
					value: 'DedicatedCephGet',
					action: 'List available services',
				},
				{
					name: 'List Cephfs Filesystems',
					value: 'DedicatedCephCephfsGet',
					action: 'List CephFS filesystems',
				},
				{
					name: 'List Tasks In Progress',
					value: 'DedicatedCephTaskGet',
					action: 'List tasks in progress',
				},
				{
					name: 'List User-Pool Permissions',
					value: 'CephUserPoolGet',
					action: 'List user-pool permissions',
				},
				{
					name: 'Open 5 Minutes Window For Deleting Single Ceph Pool',
					value: 'CephPoolAllowdeletionUpdate',
					action: 'Open 5 minutes window for deleting single ceph pool',
				},
				{
					name: 'Purge Cephfs Filesystem',
					value: 'DedicatedCephCephfsDelete',
					action: 'Purge CephFS filesystem',
				},
				{
					name: 'Retrieve Ceph Osd Blocklist',
					value: 'CephOsdBlocklistGet',
					action: 'Retrieve Ceph OSD blocklist',
				},
				{
					name: 'Update Cluster Details',
					value: 'DedicatedCephUpdate',
					action: 'Update cluster details',
				},
				{
					name: 'Update Service Information',
					value: 'DedicatedCephServiceinfosUpdate',
					action: 'Update service information',
				},
				{
					name: 'Update User-Pool Permission For Single Pool',
					value: 'CephUserPoolUpdate',
					action: 'Update user-pool permission for single pool',
				},
			],
			default: 'DedicatedCephTerminateCreate',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...descriptionDedicatedCephTerminateCreatePost({}),
		...descriptionCephUserPoolDeleteDelete(),
		...descriptionDedicatedCephConfirmterminationCreatePost(),
		...descriptionDedicatedCephPoolCreatePost(),
		...descriptionDedicatedCephUserCreatePost(),
		...descriptionCephUserPoolCreatePost(),
		...descriptionDedicatedCephAclCreatePost(),
		...descriptionCephOsdBlocklistDeleteDelete(),
		...descriptionDedicatedCephPoolDeleteDelete(),
		...descriptionDedicatedCephUserDeleteDelete(),
		...descriptionDedicatedCephAclDeleteDelete(),
		...descriptionCephCephfsDisableCreatePost(),
		...descriptionCephCephfsEnableCreatePost(),
		...descriptionDedicatedCephCephfsGetFsnameGet(),
		...descriptionDedicatedCephGetServicenameGet(),
		...descriptionDedicatedCephHealthGetGet(),
		...descriptionDedicatedCephUserGetUsernameGet(),
		...descriptionDedicatedCephPoolGetPoolnameGet(),
		...descriptionDedicatedCephAclGetAclidGet(),
		...descriptionDedicatedCephAclGetGet(),
		...descriptionDedicatedCephPoolGetGet(),
		...descriptionDedicatedCephUserGetGet(),
		...descriptionDedicatedCephServiceinfosGetGet(),
		...descriptionDedicatedCephTaskGetTaskidGet(),
		...descriptionDedicatedCephChangecontactCreatePost(),
		...descriptionDedicatedCephGetGet(),
		...descriptionDedicatedCephCephfsGetGet(),
		...descriptionDedicatedCephTaskGetGet(),
		...descriptionCephUserPoolGetGet(),
		...descriptionCephPoolAllowdeletionUpdatePut(),
		...descriptionDedicatedCephCephfsDeleteDelete(),
		...descriptionCephOsdBlocklistGetGet(),
		...descriptionDedicatedCephUpdatePut(),
		...descriptionDedicatedCephServiceinfosUpdatePut(),
		...descriptionCephUserPoolUpdatePut(),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedCephOperation', itemIndex ?? 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'DedicatedCephTerminateCreate':
			return executeDedicatedCephTerminateCreatePost.call(this, itemIndex ?? 0);
		case 'CephUserPoolDelete':
			return executeCephUserPoolDeleteDelete.call(this, itemIndex ?? 0);
		case 'DedicatedCephConfirmterminationCreate':
			return executeDedicatedCephConfirmterminationCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedCephPoolCreate':
			return executeDedicatedCephPoolCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedCephUserCreate':
			return executeDedicatedCephUserCreatePost.call(this, itemIndex ?? 0);
		case 'CephUserPoolCreate':
			return executeCephUserPoolCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedCephAclCreate':
			return executeDedicatedCephAclCreatePost.call(this, itemIndex ?? 0);
		case 'CephOsdBlocklistDelete':
			return executeCephOsdBlocklistDeleteDelete.call(this, itemIndex ?? 0);
		case 'DedicatedCephPoolDelete':
			return executeDedicatedCephPoolDeleteDelete.call(this, itemIndex ?? 0);
		case 'DedicatedCephUserDelete':
			return executeDedicatedCephUserDeleteDelete.call(this, itemIndex ?? 0);
		case 'DedicatedCephAclDelete':
			return executeDedicatedCephAclDeleteDelete.call(this, itemIndex ?? 0);
		case 'CephCephfsDisableCreate':
			return executeCephCephfsDisableCreatePost.call(this, itemIndex ?? 0);
		case 'CephCephfsEnableCreate':
			return executeCephCephfsEnableCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedCephCephfsGetFsname':
			return executeDedicatedCephCephfsGetFsnameGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephGetServicename':
			return executeDedicatedCephGetServicenameGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephHealthGet':
			return executeDedicatedCephHealthGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephUserGetUsername':
			return executeDedicatedCephUserGetUsernameGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephPoolGetPoolname':
			return executeDedicatedCephPoolGetPoolnameGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephAclGetAclid':
			return executeDedicatedCephAclGetAclidGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephAclGet':
			return executeDedicatedCephAclGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephPoolGet':
			return executeDedicatedCephPoolGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephUserGet':
			return executeDedicatedCephUserGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephServiceinfosGet':
			return executeDedicatedCephServiceinfosGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephTaskGetTaskid':
			return executeDedicatedCephTaskGetTaskidGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephChangecontactCreate':
			return executeDedicatedCephChangecontactCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedCephGet':
			return executeDedicatedCephGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephCephfsGet':
			return executeDedicatedCephCephfsGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephTaskGet':
			return executeDedicatedCephTaskGetGet.call(this, itemIndex ?? 0);
		case 'CephUserPoolGet':
			return executeCephUserPoolGetGet.call(this, itemIndex ?? 0);
		case 'CephPoolAllowdeletionUpdate':
			return executeCephPoolAllowdeletionUpdatePut.call(this, itemIndex ?? 0);
		case 'DedicatedCephCephfsDelete':
			return executeDedicatedCephCephfsDeleteDelete.call(this, itemIndex ?? 0);
		case 'CephOsdBlocklistGet':
			return executeCephOsdBlocklistGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedCephUpdate':
			return executeDedicatedCephUpdatePut.call(this, itemIndex ?? 0);
		case 'DedicatedCephServiceinfosUpdate':
			return executeDedicatedCephServiceinfosUpdatePut.call(this, itemIndex ?? 0);
		case 'CephUserPoolUpdate':
			return executeCephUserPoolUpdatePut.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "/dedicated/ceph"`);
}
