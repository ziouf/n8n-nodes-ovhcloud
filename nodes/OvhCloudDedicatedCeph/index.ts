import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionCephCephfsDisableCreatePost,
	execute as executeCephCephfsDisableCreatePost,
} from './CephCephfsDisableCreate.operation';
import {
	description as descriptionCephCephfsEnableCreatePost,
	execute as executeCephCephfsEnableCreatePost,
} from './CephCephfsEnableCreate.operation';
import {
	description as descriptionCephOsdBlocklistDeleteDelete,
	execute as executeCephOsdBlocklistDeleteDelete,
} from './CephOsdBlocklistDelete.operation';
import {
	description as descriptionCephOsdBlocklistGetGet,
	execute as executeCephOsdBlocklistGetGet,
} from './CephOsdBlocklistGet.operation';
import {
	description as descriptionCephPoolAllowdeletionUpdatePut,
	execute as executeCephPoolAllowdeletionUpdatePut,
} from './CephPoolAllowdeletionUpdate.operation';
import {
	description as descriptionCephUserPoolCreatePost,
	execute as executeCephUserPoolCreatePost,
} from './CephUserPoolCreate.operation';
import {
	description as descriptionCephUserPoolDeleteDelete,
	execute as executeCephUserPoolDeleteDelete,
} from './CephUserPoolDelete.operation';
import {
	description as descriptionCephUserPoolGetGet,
	execute as executeCephUserPoolGetGet,
} from './CephUserPoolGet.operation';
import {
	description as descriptionCephUserPoolUpdatePut,
	execute as executeCephUserPoolUpdatePut,
} from './CephUserPoolUpdate.operation';
import {
	description as descriptionDedicatedCephAclCreatePost,
	execute as executeDedicatedCephAclCreatePost,
} from './DedicatedCephAclCreate.operation';
import {
	description as descriptionDedicatedCephAclDeleteDelete,
	execute as executeDedicatedCephAclDeleteDelete,
} from './DedicatedCephAclDelete.operation';
import {
	description as descriptionDedicatedCephAclGetGet,
	execute as executeDedicatedCephAclGetGet,
} from './DedicatedCephAclGet.operation';
import {
	description as descriptionDedicatedCephAclGetAclidGet,
	execute as executeDedicatedCephAclGetAclidGet,
} from './DedicatedCephAclGetAclid.operation';
import {
	description as descriptionDedicatedCephCephfsDeleteDelete,
	execute as executeDedicatedCephCephfsDeleteDelete,
} from './DedicatedCephCephfsDelete.operation';
import {
	description as descriptionDedicatedCephCephfsGetGet,
	execute as executeDedicatedCephCephfsGetGet,
} from './DedicatedCephCephfsGet.operation';
import {
	description as descriptionDedicatedCephCephfsGetFsnameGet,
	execute as executeDedicatedCephCephfsGetFsnameGet,
} from './DedicatedCephCephfsGetFsname.operation';
import {
	description as descriptionDedicatedCephChangecontactCreatePost,
	execute as executeDedicatedCephChangecontactCreatePost,
} from './DedicatedCephChangecontactCreate.operation';
import {
	description as descriptionDedicatedCephConfirmterminationCreatePost,
	execute as executeDedicatedCephConfirmterminationCreatePost,
} from './DedicatedCephConfirmterminationCreate.operation';
import {
	description as descriptionDedicatedCephGetGet,
	execute as executeDedicatedCephGetGet,
} from './DedicatedCephGet.operation';
import {
	description as descriptionDedicatedCephGetServicenameGet,
	execute as executeDedicatedCephGetServicenameGet,
} from './DedicatedCephGetServicename.operation';
import {
	description as descriptionDedicatedCephHealthGetGet,
	execute as executeDedicatedCephHealthGetGet,
} from './DedicatedCephHealthGet.operation';
import {
	description as descriptionDedicatedCephPoolCreatePost,
	execute as executeDedicatedCephPoolCreatePost,
} from './DedicatedCephPoolCreate.operation';
import {
	description as descriptionDedicatedCephPoolDeleteDelete,
	execute as executeDedicatedCephPoolDeleteDelete,
} from './DedicatedCephPoolDelete.operation';
import {
	description as descriptionDedicatedCephPoolGetGet,
	execute as executeDedicatedCephPoolGetGet,
} from './DedicatedCephPoolGet.operation';
import {
	description as descriptionDedicatedCephPoolGetPoolnameGet,
	execute as executeDedicatedCephPoolGetPoolnameGet,
} from './DedicatedCephPoolGetPoolname.operation';
import {
	description as descriptionDedicatedCephServiceinfosGetGet,
	execute as executeDedicatedCephServiceinfosGetGet,
} from './DedicatedCephServiceinfosGet.operation';
import {
	description as descriptionDedicatedCephServiceinfosUpdatePut,
	execute as executeDedicatedCephServiceinfosUpdatePut,
} from './DedicatedCephServiceinfosUpdate.operation';
import {
	description as descriptionDedicatedCephTaskGetGet,
	execute as executeDedicatedCephTaskGetGet,
} from './DedicatedCephTaskGet.operation';
import {
	description as descriptionDedicatedCephTaskGetTaskidGet,
	execute as executeDedicatedCephTaskGetTaskidGet,
} from './DedicatedCephTaskGetTaskid.operation';
import {
	description as descriptionDedicatedCephTerminateCreatePost,
	execute as executeDedicatedCephTerminateCreatePost,
} from './DedicatedCephTerminateCreate.operation';
import {
	description as descriptionDedicatedCephUpdatePut,
	execute as executeDedicatedCephUpdatePut,
} from './DedicatedCephUpdate.operation';
import {
	description as descriptionDedicatedCephUserCreatePost,
	execute as executeDedicatedCephUserCreatePost,
} from './DedicatedCephUserCreate.operation';
import {
	description as descriptionDedicatedCephUserDeleteDelete,
	execute as executeDedicatedCephUserDeleteDelete,
} from './DedicatedCephUserDelete.operation';
import {
	description as descriptionDedicatedCephUserGetGet,
	execute as executeDedicatedCephUserGetGet,
} from './DedicatedCephUserGet.operation';
import {
	description as descriptionDedicatedCephUserGetUsernameGet,
	execute as executeDedicatedCephUserGetUsernameGet,
} from './DedicatedCephUserGetUsername.operation';


const { description, execute } = createOperationDispatcher(
	'dedicatedCephOperation',
	'dedicatedceph',
	[
	{
		name: 'Ask For The Termination Of Your Service',
		value: 'DedicatedCephTerminateCreate',
		action: 'Ask for the termination of your service',
		execute: executeDedicatedCephTerminateCreatePost,
		description: descriptionDedicatedCephTerminateCreatePost,
		show: false,
		default: true,
	},
	{
		name: 'Clear User-Pool Permission For Single Pool',
		value: 'CephUserPoolDelete',
		action: 'Clear user-pool permission for single pool',
		execute: executeCephUserPoolDeleteDelete,
		description: descriptionCephUserPoolDeleteDelete,
		show: false,
	},
	{
		name: 'Confirm Service Termination',
		value: 'DedicatedCephConfirmterminationCreate',
		action: 'Confirm service termination',
		execute: executeDedicatedCephConfirmterminationCreatePost,
		description: descriptionDedicatedCephConfirmterminationCreatePost,
		show: false,
	},
	{
		name: 'Create A New Ceph Pool',
		value: 'DedicatedCephPoolCreate',
		action: 'Create a new ceph pool',
		execute: executeDedicatedCephPoolCreatePost,
		description: descriptionDedicatedCephPoolCreatePost,
		show: false,
	},
	{
		name: 'Create A New Ceph User',
		value: 'DedicatedCephUserCreate',
		action: 'Create a new ceph user',
		execute: executeDedicatedCephUserCreatePost,
		description: descriptionDedicatedCephUserCreatePost,
		show: false,
	},
	{
		name: 'Create New User-Pool Permissions. All Old Permissions Will Be Cleared',
		value: 'CephUserPoolCreate',
		action: 'Create new user-pool permissions. All old permissions will be cleared',
		execute: executeCephUserPoolCreatePost,
		description: descriptionCephUserPoolCreatePost,
		show: false,
	},
	{
		name: 'Create One Or More New Ip Acls',
		value: 'DedicatedCephAclCreate',
		action: 'Create one or more new IP ACLs',
		execute: executeDedicatedCephAclCreatePost,
		description: descriptionDedicatedCephAclCreatePost,
		show: false,
	},
	{
		name: 'Delete A Ceph Osd Blocklist Entry. Dangerous',
		value: 'CephOsdBlocklistDelete',
		action: 'Delete a Ceph OSD blocklist entry. DANGEROUS',
		execute: executeCephOsdBlocklistDeleteDelete,
		description: descriptionCephOsdBlocklistDeleteDelete,
		show: false,
	},
	{
		name: 'Delete A Single Ceph Pool',
		value: 'DedicatedCephPoolDelete',
		action: 'Delete a single ceph pool',
		execute: executeDedicatedCephPoolDeleteDelete,
		description: descriptionDedicatedCephPoolDeleteDelete,
		show: false,
	},
	{
		name: 'Delete An Existing Single Ceph User',
		value: 'DedicatedCephUserDelete',
		action: 'Delete an existing single ceph user',
		execute: executeDedicatedCephUserDeleteDelete,
		description: descriptionDedicatedCephUserDeleteDelete,
		show: false,
	},
	{
		name: 'Delete Single Ip Acl',
		value: 'DedicatedCephAclDelete',
		action: 'Delete single IP ACL',
		execute: executeDedicatedCephAclDeleteDelete,
		description: descriptionDedicatedCephAclDeleteDelete,
		show: false,
	},
	{
		name: 'Disable Cephfs Filesystem',
		value: 'CephCephfsDisableCreate',
		action: 'Disable CephFS filesystem',
		execute: executeCephCephfsDisableCreatePost,
		description: descriptionCephCephfsDisableCreatePost,
		show: false,
	},
	{
		name: 'Enable Cephfs Filesystem',
		value: 'CephCephfsEnableCreate',
		action: 'Enable CephFS filesystem',
		execute: executeCephCephfsEnableCreatePost,
		description: descriptionCephCephfsEnableCreatePost,
		show: false,
	},
	{
		name: 'Get Cephfs Filesystem Information',
		value: 'DedicatedCephCephfsGetFsname',
		action: 'Get CephFS filesystem information',
		execute: executeDedicatedCephCephfsGetFsnameGet,
		description: descriptionDedicatedCephCephfsGetFsnameGet,
		show: false,
	},
	{
		name: 'Get Cluster Details',
		value: 'DedicatedCephGetServicename',
		action: 'Get cluster details',
		execute: executeDedicatedCephGetServicenameGet,
		description: descriptionDedicatedCephGetServicenameGet,
		show: false,
	},
	{
		name: 'Get Cluster Health',
		value: 'DedicatedCephHealthGet',
		action: 'Get cluster health',
		execute: executeDedicatedCephHealthGetGet,
		description: descriptionDedicatedCephHealthGetGet,
		show: false,
	},
	{
		name: 'Get Details About A Ceph User',
		value: 'DedicatedCephUserGetUsername',
		action: 'Get details about a ceph user',
		execute: executeDedicatedCephUserGetUsernameGet,
		description: descriptionDedicatedCephUserGetUsernameGet,
		show: false,
	},
	{
		name: 'Get Details About An Existing Ceph Pool',
		value: 'DedicatedCephPoolGetPoolname',
		action: 'Get details about an existing ceph pool',
		execute: executeDedicatedCephPoolGetPoolnameGet,
		description: descriptionDedicatedCephPoolGetPoolnameGet,
		show: false,
	},
	{
		name: 'Get Details About Ip Acl',
		value: 'DedicatedCephAclGetAclid',
		action: 'Get details about IP ACL',
		execute: executeDedicatedCephAclGetAclidGet,
		description: descriptionDedicatedCephAclGetAclidGet,
		show: false,
	},
	{
		name: 'Get List Of All Ip Acls In A Cluster',
		value: 'DedicatedCephAclGet',
		action: 'Get list of all IP ACLs in a cluster',
		execute: executeDedicatedCephAclGetGet,
		description: descriptionDedicatedCephAclGetGet,
		show: false,
	},
	{
		name: 'Get List Of All Pools In A Cluster',
		value: 'DedicatedCephPoolGet',
		action: 'Get list of all pools in a cluster',
		execute: executeDedicatedCephPoolGetGet,
		description: descriptionDedicatedCephPoolGetGet,
		show: false,
	},
	{
		name: 'Get List Of All Users In A Cluster',
		value: 'DedicatedCephUserGet',
		action: 'Get list of all users in a cluster',
		execute: executeDedicatedCephUserGetGet,
		description: descriptionDedicatedCephUserGetGet,
		show: false,
	},
	{
		name: 'Get Service Information',
		value: 'DedicatedCephServiceinfosGet',
		action: 'Get service information',
		execute: executeDedicatedCephServiceinfosGetGet,
		description: descriptionDedicatedCephServiceinfosGetGet,
		show: false,
	},
	{
		name: 'Get Task Details',
		value: 'DedicatedCephTaskGetTaskid',
		action: 'Get task details',
		execute: executeDedicatedCephTaskGetTaskidGet,
		description: descriptionDedicatedCephTaskGetTaskidGet,
		show: false,
	},
	{
		name: 'Launch A Contact Change Procedure',
		value: 'DedicatedCephChangecontactCreate',
		action: 'Launch a contact change procedure',
		execute: executeDedicatedCephChangecontactCreatePost,
		description: descriptionDedicatedCephChangecontactCreatePost,
		show: false,
	},
	{
		name: 'List Available Services',
		value: 'DedicatedCephGet',
		action: 'List available services',
		execute: executeDedicatedCephGetGet,
		description: descriptionDedicatedCephGetGet,
		show: false,
	},
	{
		name: 'List Cephfs Filesystems',
		value: 'DedicatedCephCephfsGet',
		action: 'List CephFS filesystems',
		execute: executeDedicatedCephCephfsGetGet,
		description: descriptionDedicatedCephCephfsGetGet,
		show: false,
	},
	{
		name: 'List Tasks In Progress',
		value: 'DedicatedCephTaskGet',
		action: 'List tasks in progress',
		execute: executeDedicatedCephTaskGetGet,
		description: descriptionDedicatedCephTaskGetGet,
		show: false,
	},
	{
		name: 'List User-Pool Permissions',
		value: 'CephUserPoolGet',
		action: 'List user-pool permissions',
		execute: executeCephUserPoolGetGet,
		description: descriptionCephUserPoolGetGet,
		show: false,
	},
	{
		name: 'Open 5 Minutes Window For Deleting Single Ceph Pool',
		value: 'CephPoolAllowdeletionUpdate',
		action: 'Open 5 minutes window for deleting single ceph pool',
		execute: executeCephPoolAllowdeletionUpdatePut,
		description: descriptionCephPoolAllowdeletionUpdatePut,
		show: false,
	},
	{
		name: 'Purge Cephfs Filesystem',
		value: 'DedicatedCephCephfsDelete',
		action: 'Purge CephFS filesystem',
		execute: executeDedicatedCephCephfsDeleteDelete,
		description: descriptionDedicatedCephCephfsDeleteDelete,
		show: false,
	},
	{
		name: 'Retrieve Ceph Osd Blocklist',
		value: 'CephOsdBlocklistGet',
		action: 'Retrieve Ceph OSD blocklist',
		execute: executeCephOsdBlocklistGetGet,
		description: descriptionCephOsdBlocklistGetGet,
		show: false,
	},
	{
		name: 'Update Cluster Details',
		value: 'DedicatedCephUpdate',
		action: 'Update cluster details',
		execute: executeDedicatedCephUpdatePut,
		description: descriptionDedicatedCephUpdatePut,
		show: false,
	},
	{
		name: 'Update Service Information',
		value: 'DedicatedCephServiceinfosUpdate',
		action: 'Update service information',
		execute: executeDedicatedCephServiceinfosUpdatePut,
		description: descriptionDedicatedCephServiceinfosUpdatePut,
		show: false,
	},
	{
		name: 'Update User-Pool Permission For Single Pool',
		value: 'CephUserPoolUpdate',
		action: 'Update user-pool permission for single pool',
		execute: executeCephUserPoolUpdatePut,
		description: descriptionCephUserPoolUpdatePut,
		show: false,
	},
	],
);

export { description, execute };
