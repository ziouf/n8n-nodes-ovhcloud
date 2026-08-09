import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import * as list from './resources/list.operation';
import * as get from './resources/get.operation';
import * as backupRepositoryGet from './resources/backupRepositoryGet.operation';
import * as backupRepositoryPost from './resources/backupRepositoryPost.operation';
import * as backupRepositoryDetailGet from './resources/backupRepositoryDetailGet.operation';
import * as backupRepositoryDelete from './resources/backupRepositoryDelete.operation';
import * as backupRepositoryUpgradeQuotaPost from './resources/backupRepositoryUpgradeQuotaPost.operation';
import * as capabilitiesGet from './resources/capabilitiesGet.operation';
import * as orderableUpgradeGet from './resources/orderableUpgradeGet.operation';
import * as resetPasswordPost from './resources/resetPasswordPost.operation';
import * as serviceInfosGet from './resources/serviceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/serviceInfosUpdatePut.operation';
import * as taskGet from './resources/taskGet.operation';
import * as taskDetailGet from './resources/taskDetailGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'veeamCloudConnectOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Create Backup Repository',
				value: 'backupRepositoryPost',
				action: 'Create a new backup repository for a service',
			},
			{
				name: 'Delete Backup Repository',
				value: 'backupRepositoryDelete',
				action: 'Delete a specific backup repository',
			},
			{
				name: 'Get Available Offer Upgrades',
				value: 'orderableUpgradeGet',
				action: 'Retrieve a list of available offer upgrades for a service',
			},
			{
				name: 'Get Backup Repository Details',
				value: 'backupRepositoryDetailGet',
				action: 'Retrieve details for a specific backup repository',
			},
			{
				name: 'Get Service Capabilities',
				value: 'capabilitiesGet',
				action: 'Retrieve the capabilities of a specific Veeam Cloud Connect service',
			},
			{
				name: 'Get Service Information',
				value: 'serviceInfosGet',
				action: 'Retrieve general information about a specific Veeam Cloud Connect service',
			},
			{
				name: 'Get Task Details',
				value: 'taskDetailGet',
				action: 'Retrieve details for a specific task',
			},
			{
				name: 'Get Veeam Cloud Connect Service',
				value: 'get',
				action: 'Retrieve details for a specific Veeam Cloud Connect service',
			},
			{
				name: 'List Backup Repositories',
				value: 'backupRepositoryGet',
				action: 'Retrieve a list of backup repositories for a service',
			},
			{
				name: 'List Tasks',
				value: 'taskGet',
				action: 'List tasks associated with a specific Veeam Cloud Connect service',
			},
			{
				name: 'List Veeam Cloud Connect Services',
				value: 'list',
				action: 'List all Veeam Cloud Connect services',
			},
			{
				name: 'Reset Service Password',
				value: 'resetPasswordPost',
				action: 'Reset the password for a specific Veeam Cloud Connect service',
			},
			{
				name: 'Update Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update properties of a specific Veeam Cloud Connect service',
			},
			{
				name: 'Upgrade Backup Repository Quota',
				value: 'backupRepositoryUpgradeQuotaPost',
				action: 'Change the quota for a specific backup repository',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('veeamCloudConnectOperation', 0) as string;

	switch (operation) {
		case 'backupRepositoryPost':
			return backupRepositoryPost.execute.call(this, itemIndex ?? 0);
		case 'backupRepositoryDelete':
			return backupRepositoryDelete.execute.call(this, itemIndex ?? 0);
		case 'orderableUpgradeGet':
			return orderableUpgradeGet.execute.call(this, itemIndex ?? 0);
		case 'backupRepositoryDetailGet':
			return backupRepositoryDetailGet.execute.call(this, itemIndex ?? 0);
		case 'capabilitiesGet':
			return capabilitiesGet.execute.call(this, itemIndex ?? 0);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this, itemIndex ?? 0);
		case 'taskDetailGet':
			return taskDetailGet.execute.call(this, itemIndex ?? 0);
		case 'get':
			return get.execute.call(this, itemIndex ?? 0);
		case 'backupRepositoryGet':
			return backupRepositoryGet.execute.call(this, itemIndex ?? 0);
		case 'taskGet':
			return taskGet.execute.call(this, itemIndex ?? 0);
		case 'list':
			return list.execute.call(this, itemIndex ?? 0);
		case 'resetPasswordPost':
			return resetPasswordPost.execute.call(this, itemIndex ?? 0);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this, itemIndex ?? 0);
		case 'backupRepositoryUpgradeQuotaPost':
			return backupRepositoryUpgradeQuotaPost.execute.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
