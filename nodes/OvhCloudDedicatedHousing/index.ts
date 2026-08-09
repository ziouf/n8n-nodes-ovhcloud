import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeFeaturesBackupftpAccessUpdatePut,
	description as descriptionFeaturesBackupftpAccessUpdatePut,
} from './FeaturesBackupftpAccessUpdate.operation';

import {
	execute as executeFeaturesBackupftpPasswordCreatePost,
	description as descriptionFeaturesBackupftpPasswordCreatePost,
} from './FeaturesBackupftpPasswordCreate.operation';

import {
	execute as executeFeaturesBackupftpAccessCreatePost,
	description as descriptionFeaturesBackupftpAccessCreatePost,
} from './FeaturesBackupftpAccessCreate.operation';

import {
	execute as executeHousingFeaturesBackupftpCreatePost,
	description as descriptionHousingFeaturesBackupftpCreatePost,
} from './HousingFeaturesBackupftpCreate.operation';

import {
	execute as executeFeaturesBackupftpAuthorizableblocksGetGet,
	description as descriptionFeaturesBackupftpAuthorizableblocksGetGet,
} from './FeaturesBackupftpAuthorizableblocksGet.operation';

import {
	execute as executeDedicatedHousingServiceinfosGetGet,
	description as descriptionDedicatedHousingServiceinfosGetGet,
} from './DedicatedHousingServiceinfosGet.operation';

import {
	execute as executeDedicatedHousingGetServicenameGet,
	description as descriptionDedicatedHousingGetServicenameGet,
} from './DedicatedHousingGetServicename.operation';

import {
	execute as executeHousingFeaturesBackupftpGetGet,
	description as descriptionHousingFeaturesBackupftpGetGet,
} from './HousingFeaturesBackupftpGet.operation';

import {
	execute as executeFeaturesBackupftpAccessGetIpblockGet,
	description as descriptionFeaturesBackupftpAccessGetIpblockGet,
} from './FeaturesBackupftpAccessGetIpblock.operation';

import {
	execute as executeDedicatedHousingTaskGetTaskidGet,
	description as descriptionDedicatedHousingTaskGetTaskidGet,
} from './DedicatedHousingTaskGetTaskid.operation';

import {
	execute as executeHousingOrderableApcGetGet,
	description as descriptionHousingOrderableApcGetGet,
} from './HousingOrderableApcGet.operation';

import {
	execute as executeDedicatedHousingGetGet,
	description as descriptionDedicatedHousingGetGet,
} from './DedicatedHousingGet.operation';

import {
	execute as executeFeaturesBackupftpAccessGetGet,
	description as descriptionFeaturesBackupftpAccessGetGet,
} from './FeaturesBackupftpAccessGet.operation';

import {
	execute as executeFeaturesBackupftpAccessDeleteDelete,
	description as descriptionFeaturesBackupftpAccessDeleteDelete,
} from './FeaturesBackupftpAccessDelete.operation';

import {
	execute as executeHousingFeaturesBackupftpDeleteDelete,
	description as descriptionHousingFeaturesBackupftpDeleteDelete,
} from './HousingFeaturesBackupftpDelete.operation';

import {
	execute as executeHousingTaskCancelCreatePost,
	description as descriptionHousingTaskCancelCreatePost,
} from './HousingTaskCancelCreate.operation';

import {
	execute as executeDedicatedHousingServiceinfosUpdatePut,
	description as descriptionDedicatedHousingServiceinfosUpdatePut,
} from './DedicatedHousingServiceinfosUpdate.operation';

import {
	execute as executeDedicatedHousingTaskGetGet,
	description as descriptionDedicatedHousingTaskGetGet,
} from './DedicatedHousingTaskGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedHousingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
		{
			name: 'Alter This Object Properties',
			value: 'FeaturesBackupftpAccessUpdate',
			action: 'Alter this object properties',
		},
		{
			name: 'Change Your Backup Ftp Password',
			value: 'FeaturesBackupftpPasswordCreate',
			action: 'Change your Backup FTP password',
		},
		{
			name: 'Create A New Backup Ftp Acl',
			value: 'FeaturesBackupftpAccessCreate',
			action: 'Create a new Backup FTP ACL',
		},
		{
			name: 'Create A New Backup Ftp Space',
			value: 'HousingFeaturesBackupftpCreate',
			action: 'Create a new Backup FTP space',
		},
		{
			name: 'Get All Ip Blocks That Can Be Used In The Acl',
			value: 'FeaturesBackupftpAuthorizableblocksGet',
			action: 'Get all IP blocks that can be used in the ACL',
		},
		{
			name: 'Get Service Information',
			value: 'DedicatedHousingServiceinfosGet',
			action: 'Get service information',
		},
		{
			name: 'Get This Object Properties',
			value: 'DedicatedHousingGetServicename',
			action: 'Get this object properties',
		},
		{
			name: 'Is An Apc Orderable For This Housing Bay',
			value: 'HousingOrderableApcGet',
			action: 'Is an APC orderable for this housing bay',
		},
		{
			name: 'List Available Services',
			value: 'DedicatedHousingGet',
			action: 'List available services',
		},
		{
			name: 'List Of Ip Blocks (and Protocols To Allow On These Blocks) Authorized On Your Backup Ftp',
			value: 'FeaturesBackupftpAccessGet',
			action: 'List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP',
		},
		{
			name: 'Revoke This Acl',
			value: 'FeaturesBackupftpAccessDelete',
			action: 'Revoke this ACL',
		},
		{
			name: 'Terminate Your Backup Ftp Service, All Data Will Be Permanently Deleted',
			value: 'HousingFeaturesBackupftpDelete',
			action: 'Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED',
		},
		{
			name: 'This Action Stop The Task Progression If It\'s Possible',
			value: 'HousingTaskCancelCreate',
			action: 'this action stop the task progression if it\'s possible',
		},
		{
			name: 'Update Service Information',
			value: 'DedicatedHousingServiceinfosUpdate',
			action: 'Update service information',
		},
		{
			name: 'View Task List',
			value: 'DedicatedHousingTaskGet',
			action: 'View task list',
		},
			],
			default: 'FeaturesBackupftpAccessUpdate',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
	...descriptionFeaturesBackupftpAccessUpdatePut(),
	...descriptionFeaturesBackupftpPasswordCreatePost(),
	...descriptionFeaturesBackupftpAccessCreatePost(),
	...descriptionHousingFeaturesBackupftpCreatePost(),
	...descriptionFeaturesBackupftpAuthorizableblocksGetGet(),
	...descriptionDedicatedHousingServiceinfosGetGet(),
	...descriptionDedicatedHousingGetServicenameGet(),
	...descriptionHousingFeaturesBackupftpGetGet(),
	...descriptionFeaturesBackupftpAccessGetIpblockGet(),
	...descriptionDedicatedHousingTaskGetTaskidGet(),
	...descriptionHousingOrderableApcGetGet(),
	...descriptionDedicatedHousingGetGet(),
	...descriptionFeaturesBackupftpAccessGetGet(),
	...descriptionFeaturesBackupftpAccessDeleteDelete(),
	...descriptionHousingFeaturesBackupftpDeleteDelete(),
	...descriptionHousingTaskCancelCreatePost(),
	...descriptionDedicatedHousingServiceinfosUpdatePut(),
	...descriptionDedicatedHousingTaskGetGet(),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedHousingOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'FeaturesBackupftpAccessUpdate':
			return executeFeaturesBackupftpAccessUpdatePut.call(this, itemIndex ?? 0);
		case 'FeaturesBackupftpPasswordCreate':
			return executeFeaturesBackupftpPasswordCreatePost.call(this, itemIndex ?? 0);
		case 'FeaturesBackupftpAccessCreate':
			return executeFeaturesBackupftpAccessCreatePost.call(this, itemIndex ?? 0);
		case 'HousingFeaturesBackupftpCreate':
			return executeHousingFeaturesBackupftpCreatePost.call(this, itemIndex ?? 0);
		case 'FeaturesBackupftpAuthorizableblocksGet':
			return executeFeaturesBackupftpAuthorizableblocksGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedHousingServiceinfosGet':
			return executeDedicatedHousingServiceinfosGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedHousingGetServicename':
			return executeDedicatedHousingGetServicenameGet.call(this, itemIndex ?? 0);
		case 'HousingFeaturesBackupftpGet':
			return executeHousingFeaturesBackupftpGetGet.call(this, itemIndex ?? 0);
		case 'FeaturesBackupftpAccessGetIpblock':
			return executeFeaturesBackupftpAccessGetIpblockGet.call(this, itemIndex ?? 0);
		case 'DedicatedHousingTaskGetTaskid':
			return executeDedicatedHousingTaskGetTaskidGet.call(this, itemIndex ?? 0);
		case 'HousingOrderableApcGet':
			return executeHousingOrderableApcGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedHousingGet':
			return executeDedicatedHousingGetGet.call(this, itemIndex ?? 0);
		case 'FeaturesBackupftpAccessGet':
			return executeFeaturesBackupftpAccessGetGet.call(this, itemIndex ?? 0);
		case 'FeaturesBackupftpAccessDelete':
			return executeFeaturesBackupftpAccessDeleteDelete.call(this, itemIndex ?? 0);
		case 'HousingFeaturesBackupftpDelete':
			return executeHousingFeaturesBackupftpDeleteDelete.call(this, itemIndex ?? 0);
		case 'HousingTaskCancelCreate':
			return executeHousingTaskCancelCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedHousingServiceinfosUpdate':
			return executeDedicatedHousingServiceinfosUpdatePut.call(this, itemIndex ?? 0);
		case 'DedicatedHousingTaskGet':
			return executeDedicatedHousingTaskGetGet.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "/dedicated/housing"`);
}
