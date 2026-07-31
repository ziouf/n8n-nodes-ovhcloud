import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeDbaasListGet,
	description as descriptionDbaasListGet,
} from './dbaasListGet.operation';
import {
	execute as executeDbaasGetGet,
	description as descriptionDbaasGetGet,
} from './dbaasGetGet.operation';
import {
	execute as executeDbaasUpdatePut,
	description as descriptionDbaasUpdatePut,
} from './dbaasUpdatePut.operation';
import {
	execute as executeDbaasDeleteDelete,
	description as descriptionDbaasDeleteDelete,
} from './dbaasDeleteDelete.operation';
import {
	execute as executeClusterListGet,
	description as descriptionClusterListGet,
} from './clusterListGet.operation';
import {
	execute as executeClusterCreatePost,
	description as descriptionClusterCreatePost,
} from './clusterCreatePost.operation';
import {
	execute as executeClusterGetGet,
	description as descriptionClusterGetGet,
} from './clusterGetGet.operation';
import {
	execute as executeClusterUpdatePut,
	description as descriptionClusterUpdatePut,
} from './clusterUpdatePut.operation';
import {
	execute as executeClusterDeleteDelete,
	description as descriptionClusterDeleteDelete,
} from './clusterDeleteDelete.operation';
import {
	execute as executeUserListGet,
	description as descriptionUserListGet,
} from './userListGet.operation';
import {
	execute as executeUserCreatePost,
	description as descriptionUserCreatePost,
} from './userCreatePost.operation';
import {
	execute as executeUserGetGet,
	description as descriptionUserGetGet,
} from './userGetGet.operation';
import {
	execute as executeUserUpdatePut,
	description as descriptionUserUpdatePut,
} from './userUpdatePut.operation';
import {
	execute as executeUserDeleteDelete,
	description as descriptionUserDeleteDelete,
} from './userDeleteDelete.operation';
import {
	execute as executeBackupListGet,
	description as descriptionBackupListGet,
} from './backupListGet.operation';
import {
	execute as executeBackupCreatePost,
	description as descriptionBackupCreatePost,
} from './backupCreatePost.operation';
import {
	execute as executeBackupGetGet,
	description as descriptionBackupGetGet,
} from './backupGetGet.operation';
import {
	execute as executeBackupDeleteDelete,
	description as descriptionBackupDeleteDelete,
} from './backupDeleteDelete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dbaasOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List DBaaS',
				value: 'dbaasListGet',
				action: 'List all database services',
			},
			{
				name: 'Get DBaaS',
				value: 'dbaasGetGet',
				action: 'Get database service details',
			},
			{
				name: 'Update DBaaS',
				value: 'dbaasUpdatePut',
				action: 'Update database service details',
			},
			{
				name: 'Delete DBaaS',
				value: 'dbaasDeleteDelete',
				action: 'Delete a database service',
			},
			{
				name: 'List Clusters',
				value: 'clusterListGet',
				action: 'List clusters in a database service',
			},
			{
				name: 'Create Cluster',
				value: 'clusterCreatePost',
				action: 'Create a new cluster',
			},
			{
				name: 'Get Cluster',
				value: 'clusterGetGet',
				action: 'Get cluster details',
			},
			{
				name: 'Update Cluster',
				value: 'clusterUpdatePut',
				action: 'Update a cluster',
			},
			{
				name: 'Delete Cluster',
				value: 'clusterDeleteDelete',
				action: 'Delete a cluster',
			},
			{
				name: 'List Users',
				value: 'userListGet',
				action: 'List database users',
			},
			{
				name: 'Create User',
				value: 'userCreatePost',
				action: 'Create a database user',
			},
			{
				name: 'Get User',
				value: 'userGetGet',
				action: 'Get user details',
			},
			{
				name: 'Update User',
				value: 'userUpdatePut',
				action: 'Update a database user',
			},
			{
				name: 'Delete User',
				value: 'userDeleteDelete',
				action: 'Delete a database user',
			},
			{
				name: 'List Backups',
				value: 'backupListGet',
				action: 'List backups for a database',
			},
			{
				name: 'Create Backup',
				value: 'backupCreatePost',
				action: 'Create a database backup',
			},
			{
				name: 'Get Backup',
				value: 'backupGetGet',
				action: 'Get backup details',
			},
			{
				name: 'Delete Backup',
				value: 'backupDeleteDelete',
				action: 'Delete a backup',
			},

			],
			default: 'dbaasListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionDbaasListGet({
			...displayOptions,
			show: { dbaasOperation: ['dbaasListGet'] },
		}) as INodeProperties[]),
		...(descriptionDbaasGetGet({
			...displayOptions,
			show: { dbaasOperation: ['dbaasGetGet'] },
		}) as INodeProperties[]),
		...(descriptionDbaasUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['dbaasUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionDbaasDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['dbaasDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionClusterListGet({
			...displayOptions,
			show: { dbaasOperation: ['clusterListGet'] },
		}) as INodeProperties[]),
		...(descriptionClusterCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['clusterCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionClusterGetGet({
			...displayOptions,
			show: { dbaasOperation: ['clusterGetGet'] },
		}) as INodeProperties[]),
		...(descriptionClusterUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['clusterUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionClusterDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['clusterDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionUserListGet({
			...displayOptions,
			show: { dbaasOperation: ['userListGet'] },
		}) as INodeProperties[]),
		...(descriptionUserCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['userCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionUserGetGet({
			...displayOptions,
			show: { dbaasOperation: ['userGetGet'] },
		}) as INodeProperties[]),
		...(descriptionUserUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['userUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionUserDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['userDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupListGet({
			...displayOptions,
			show: { dbaasOperation: ['backupListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['backupCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionBackupGetGet({
			...displayOptions,
			show: { dbaasOperation: ['backupGetGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['backupDeleteDelete'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dbaasOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'dbaasListGet':
			return executeDbaasListGet.call(this, itemIndex);
		case 'dbaasGetGet':
			return executeDbaasGetGet.call(this, itemIndex);
		case 'dbaasUpdatePut':
			return executeDbaasUpdatePut.call(this, itemIndex);
		case 'dbaasDeleteDelete':
			return executeDbaasDeleteDelete.call(this, itemIndex);
		case 'clusterListGet':
			return executeClusterListGet.call(this, itemIndex);
		case 'clusterCreatePost':
			return executeClusterCreatePost.call(this, itemIndex);
		case 'clusterGetGet':
			return executeClusterGetGet.call(this, itemIndex);
		case 'clusterUpdatePut':
			return executeClusterUpdatePut.call(this, itemIndex);
		case 'clusterDeleteDelete':
			return executeClusterDeleteDelete.call(this, itemIndex);
		case 'userListGet':
			return executeUserListGet.call(this, itemIndex);
		case 'userCreatePost':
			return executeUserCreatePost.call(this, itemIndex);
		case 'userGetGet':
			return executeUserGetGet.call(this, itemIndex);
		case 'userUpdatePut':
			return executeUserUpdatePut.call(this, itemIndex);
		case 'userDeleteDelete':
			return executeUserDeleteDelete.call(this, itemIndex);
		case 'backupListGet':
			return executeBackupListGet.call(this, itemIndex);
		case 'backupCreatePost':
			return executeBackupCreatePost.call(this, itemIndex);
		case 'backupGetGet':
			return executeBackupGetGet.call(this, itemIndex);
		case 'backupDeleteDelete':
			return executeBackupDeleteDelete.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudDbaas"`);
}
