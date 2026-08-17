import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as backupRepositoryPostExecute } from './resources/backupRepositoryPost.operation';
import { execute as backupRepositoryDeleteExecute } from './resources/backupRepositoryDelete.operation';
import { execute as orderableUpgradeGetExecute } from './resources/orderableUpgradeGet.operation';
import { execute as backupRepositoryDetailGetExecute } from './resources/backupRepositoryDetailGet.operation';
import { execute as capabilitiesGetExecute } from './resources/capabilitiesGet.operation';
import { execute as serviceInfosGetExecute } from './resources/serviceInfosGet.operation';
import { execute as taskDetailGetExecute } from './resources/taskDetailGet.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as backupRepositoryGetExecute } from './resources/backupRepositoryGet.operation';
import { execute as taskGetExecute } from './resources/taskGet.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as resetPasswordPostExecute } from './resources/resetPasswordPost.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/serviceInfosUpdatePut.operation';
import { execute as backupRepositoryUpgradeQuotaPostExecute } from './resources/backupRepositoryUpgradeQuotaPost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'veeamCloudConnectOperation',
	'veeamcloudconnect',
	[
	{
		name: 'Create Backup Repository',
		value: 'backupRepositoryPost',
		action: 'Create a new backup repository for a service',
		execute: backupRepositoryPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Backup Repository',
		value: 'backupRepositoryDelete',
		action: 'Delete a specific backup repository',
		execute: backupRepositoryDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Available Offer Upgrades',
		value: 'orderableUpgradeGet',
		action: 'Retrieve a list of available offer upgrades for a service',
		execute: orderableUpgradeGetExecute,
		description: noProps,
	},
	{
		name: 'Get Backup Repository Details',
		value: 'backupRepositoryDetailGet',
		action: 'Retrieve details for a specific backup repository',
		execute: backupRepositoryDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Capabilities',
		value: 'capabilitiesGet',
		action: 'Retrieve the capabilities of a specific Veeam Cloud Connect service',
		execute: capabilitiesGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Retrieve general information about a specific Veeam Cloud Connect service',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get Task Details',
		value: 'taskDetailGet',
		action: 'Retrieve details for a specific task',
		execute: taskDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Veeam Cloud Connect Service',
		value: 'get',
		action: 'Retrieve details for a specific Veeam Cloud Connect service',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'List Backup Repositories',
		value: 'backupRepositoryGet',
		action: 'Retrieve a list of backup repositories for a service',
		execute: backupRepositoryGetExecute,
		description: noProps,
	},
	{
		name: 'List Tasks',
		value: 'taskGet',
		action: 'List tasks associated with a specific Veeam Cloud Connect service',
		execute: taskGetExecute,
		description: noProps,
	},
	{
		name: 'List Veeam Cloud Connect Services',
		value: 'list',
		action: 'List all Veeam Cloud Connect services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Reset Service Password',
		value: 'resetPasswordPost',
		action: 'Reset the password for a specific Veeam Cloud Connect service',
		execute: resetPasswordPostExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update properties of a specific Veeam Cloud Connect service',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'Upgrade Backup Repository Quota',
		value: 'backupRepositoryUpgradeQuotaPost',
		action: 'Change the quota for a specific backup repository',
		execute: backupRepositoryUpgradeQuotaPostExecute,
		description: noProps,
	},
	],

);

export { description, execute };
