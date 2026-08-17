import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionDedicatedHousingGetGet,
	execute as executeDedicatedHousingGetGet,
} from './DedicatedHousingGet.operation';
import {
	description as descriptionDedicatedHousingGetServicenameGet,
	execute as executeDedicatedHousingGetServicenameGet,
} from './DedicatedHousingGetServicename.operation';
import {
	description as descriptionDedicatedHousingServiceinfosGetGet,
	execute as executeDedicatedHousingServiceinfosGetGet,
} from './DedicatedHousingServiceinfosGet.operation';
import {
	description as descriptionDedicatedHousingServiceinfosUpdatePut,
	execute as executeDedicatedHousingServiceinfosUpdatePut,
} from './DedicatedHousingServiceinfosUpdate.operation';
import {
	description as descriptionDedicatedHousingTaskGetGet,
	execute as executeDedicatedHousingTaskGetGet,
} from './DedicatedHousingTaskGet.operation';
import {
	description as descriptionFeaturesBackupftpAccessCreatePost,
	execute as executeFeaturesBackupftpAccessCreatePost,
} from './FeaturesBackupftpAccessCreate.operation';
import {
	description as descriptionFeaturesBackupftpAccessDeleteDelete,
	execute as executeFeaturesBackupftpAccessDeleteDelete,
} from './FeaturesBackupftpAccessDelete.operation';
import {
	description as descriptionFeaturesBackupftpAccessGetGet,
	execute as executeFeaturesBackupftpAccessGetGet,
} from './FeaturesBackupftpAccessGet.operation';
import {
	description as descriptionFeaturesBackupftpAccessUpdatePut,
	execute as executeFeaturesBackupftpAccessUpdatePut,
} from './FeaturesBackupftpAccessUpdate.operation';
import {
	description as descriptionFeaturesBackupftpAuthorizableblocksGetGet,
	execute as executeFeaturesBackupftpAuthorizableblocksGetGet,
} from './FeaturesBackupftpAuthorizableblocksGet.operation';
import {
	description as descriptionFeaturesBackupftpPasswordCreatePost,
	execute as executeFeaturesBackupftpPasswordCreatePost,
} from './FeaturesBackupftpPasswordCreate.operation';
import {
	description as descriptionHousingFeaturesBackupftpCreatePost,
	execute as executeHousingFeaturesBackupftpCreatePost,
} from './HousingFeaturesBackupftpCreate.operation';
import {
	description as descriptionHousingFeaturesBackupftpDeleteDelete,
	execute as executeHousingFeaturesBackupftpDeleteDelete,
} from './HousingFeaturesBackupftpDelete.operation';
import {
	description as descriptionHousingOrderableApcGetGet,
	execute as executeHousingOrderableApcGetGet,
} from './HousingOrderableApcGet.operation';


const { description, execute } = createOperationDispatcher(
	'dedicatedHousingOperation',
	'dedicatedhousing',
	[
	{
		name: 'Alter This Object Properties',
		value: 'FeaturesBackupftpAccessUpdate',
		action: 'Alter this object properties',
		execute: executeFeaturesBackupftpAccessUpdatePut,
		description: descriptionFeaturesBackupftpAccessUpdatePut,
		show: false,
		default: true,
	},
	{
		name: 'Change Your Backup Ftp Password',
		value: 'FeaturesBackupftpPasswordCreate',
		action: 'Change your Backup FTP password',
		execute: executeFeaturesBackupftpPasswordCreatePost,
		description: descriptionFeaturesBackupftpPasswordCreatePost,
		show: false,
	},
	{
		name: 'Create A New Backup Ftp Acl',
		value: 'FeaturesBackupftpAccessCreate',
		action: 'Create a new Backup FTP ACL',
		execute: executeFeaturesBackupftpAccessCreatePost,
		description: descriptionFeaturesBackupftpAccessCreatePost,
		show: false,
	},
	{
		name: 'Create A New Backup Ftp Space',
		value: 'HousingFeaturesBackupftpCreate',
		action: 'Create a new Backup FTP space',
		execute: executeHousingFeaturesBackupftpCreatePost,
		description: descriptionHousingFeaturesBackupftpCreatePost,
		show: false,
	},
	{
		name: 'Get All Ip Blocks That Can Be Used In The Acl',
		value: 'FeaturesBackupftpAuthorizableblocksGet',
		action: 'Get all IP blocks that can be used in the ACL',
		execute: executeFeaturesBackupftpAuthorizableblocksGetGet,
		description: descriptionFeaturesBackupftpAuthorizableblocksGetGet,
		show: false,
	},
	{
		name: 'Get Service Information',
		value: 'DedicatedHousingServiceinfosGet',
		action: 'Get service information',
		execute: executeDedicatedHousingServiceinfosGetGet,
		description: descriptionDedicatedHousingServiceinfosGetGet,
		show: false,
	},
	{
		name: 'Get This Object Properties',
		value: 'DedicatedHousingGetServicename',
		action: 'Get this object properties',
		execute: executeDedicatedHousingGetServicenameGet,
		description: descriptionDedicatedHousingGetServicenameGet,
		show: false,
	},
	{
		name: 'Is An Apc Orderable For This Housing Bay',
		value: 'HousingOrderableApcGet',
		action: 'Is an APC orderable for this housing bay',
		execute: executeHousingOrderableApcGetGet,
		description: descriptionHousingOrderableApcGetGet,
		show: false,
	},
	{
		name: 'List Available Services',
		value: 'DedicatedHousingGet',
		action: 'List available services',
		execute: executeDedicatedHousingGetGet,
		description: descriptionDedicatedHousingGetGet,
		show: false,
	},
	{
		name: 'List Of Ip Blocks (and Protocols To Allow On These Blocks) Authorized On Your Backup Ftp',
		value: 'FeaturesBackupftpAccessGet',
		action: 'List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP',
		execute: executeFeaturesBackupftpAccessGetGet,
		description: descriptionFeaturesBackupftpAccessGetGet,
		show: false,
	},
	{
		name: 'Revoke This Acl',
		value: 'FeaturesBackupftpAccessDelete',
		action: 'Revoke this ACL',
		execute: executeFeaturesBackupftpAccessDeleteDelete,
		description: descriptionFeaturesBackupftpAccessDeleteDelete,
		show: false,
	},
	{
		name: 'Terminate Your Backup Ftp Service, All Data Will Be Permanently Deleted',
		value: 'HousingFeaturesBackupftpDelete',
		action: 'Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED',
		execute: executeHousingFeaturesBackupftpDeleteDelete,
		description: descriptionHousingFeaturesBackupftpDeleteDelete,
		show: false,
	},
	{
		name: 'Update Service Information',
		value: 'DedicatedHousingServiceinfosUpdate',
		action: 'Update service information',
		execute: executeDedicatedHousingServiceinfosUpdatePut,
		description: descriptionDedicatedHousingServiceinfosUpdatePut,
		show: false,
	},
	{
		name: 'View Task List',
		value: 'DedicatedHousingTaskGet',
		action: 'View task list',
		execute: executeDedicatedHousingTaskGetGet,
		description: descriptionDedicatedHousingTaskGetGet,
		show: false,
	},
	],
);

export { description, execute };
