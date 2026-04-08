/**
 * @brief Office resource operations for n8n node
 *
 * Provides operations for managing OVH Office License services.
 *
 * @remarks
 * Office License services are managed under `/license/office` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { description as descriptionList, execute as executeList } from './list.operation';
import { description as descriptionGet, execute as executeGet } from './get.operation';
import { descriptionGetServiceInfos as descriptionGetServiceInfos, executeGetServiceInfos as executeGetServiceInfos, descriptionUpdateServiceInfos as descriptionUpdateServiceInfos, executeUpdateServiceInfos as executeUpdateServiceInfos  } from './resources/serviceInfos';
import { descriptionUpdateService as descriptionUpdateService, executeUpdateService as executeUpdateService } from './resources/update';
import { descriptionListDomains as descriptionListDomains, executeListDomains as executeListDomains, descriptionGetDomain as descriptionGetDomain, executeGetDomain as executeGetDomain  } from './resources/domain';
import { descriptionListPendingTasks as descriptionListPendingTasks, executeListPendingTasks as executeListPendingTasks, descriptionGetPendingTask as descriptionGetPendingTask, executeGetPendingTask as executeGetPendingTask  } from './resources/pendingTask';
import { descriptionGetUsageStatistics as descriptionGetUsageStatistics, executeGetUsageStatistics as executeGetUsageStatistics } from './resources/usageStatistics';
import { descriptionListUsers as descriptionListUsers, executeListUsers as executeListUsers, descriptionCreateUser as descriptionCreateUser, executeCreateUser as executeCreateUser , descriptionGetUser as descriptionGetUser, executeGetUser as executeGetUser , descriptionUpdateUser as descriptionUpdateUser, executeUpdateUser as executeUpdateUser , descriptionDeleteUser as descriptionDeleteUser, executeDeleteUser as executeDeleteUser , descriptionChangePassword as descriptionChangePassword, executeChangePassword as executeChangePassword  } from './resources/user';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License Office Operation',
			name: 'licenseOfficeOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Change User Password',
					value: 'changeUserPassword',
					action: 'Change password for an Office License user',
				},
				{
					name: 'Create User',
					value: 'createUser',
					action: 'Create a user for an Office License',
				},
				{
					name: 'Delete User',
					value: 'deleteUser',
					action: 'Delete a user from an Office License',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an Office License service',
				},
				{
					name: 'Get Domain',
					value: 'getDomain',
					action: 'Get a specific domain for an Office License',
				},
				{
					name: 'Get Pending Task',
					value: 'getPendingTask',
					action: 'Get a specific pending task for an Office License',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for an Office License',
				},
				{
					name: 'Get Usage Statistics',
					value: 'getUsageStatistics',
					action: 'Get usage statistics for an Office License',
				},
				{
					name: 'Get User',
					value: 'getUser',
					action: 'Get a specific user for an Office License',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Office License services',
				},
				{
					name: 'List Domains',
					value: 'listDomains',
					action: 'List domains for an Office License',
				},
				{
					name: 'List Pending Tasks',
					value: 'listPendingTasks',
					action: 'List pending tasks for an Office License',
				},
				{
					name: 'List Users',
					value: 'listUsers',
					action: 'List users for an Office License',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update an Office License service',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for an Office License',
				},
				{
					name: 'Update User',
					value: 'updateUser',
					action: 'Update a user for an Office License',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['updateServiceInfos'] },
		}),
		...descriptionUpdateService({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['update'] },
		}),
		...descriptionListDomains({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['listDomains'] },
		}),
		...descriptionGetDomain({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['getDomain'] },
		}),
		...descriptionListPendingTasks({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['listPendingTasks'] },
		}),
		...descriptionGetPendingTask({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['getPendingTask'] },
		}),
		...descriptionGetUsageStatistics({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['getUsageStatistics'] },
		}),
		...descriptionListUsers({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['listUsers'] },
		}),
		...descriptionCreateUser({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['createUser'] },
		}),
		...descriptionGetUser({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['getUser'] },
		}),
		...descriptionUpdateUser({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['updateUser'] },
		}),
		...descriptionDeleteUser({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['deleteUser'] },
		}),
		...descriptionChangePassword({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['changeUserPassword'] },
		}),
	];
}

/**
 * Executes the selected License Office operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseOfficeOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'update':
			return await executeUpdateService.call(this);
		case 'listDomains':
			return await executeListDomains.call(this);
		case 'getDomain':
			return await executeGetDomain.call(this);
		case 'listPendingTasks':
			return await executeListPendingTasks.call(this);
		case 'getPendingTask':
			return await executeGetPendingTask.call(this);
		case 'getUsageStatistics':
			return await executeGetUsageStatistics.call(this);
		case 'listUsers':
			return await executeListUsers.call(this);
		case 'createUser':
			return await executeCreateUser.call(this);
		case 'getUser':
			return await executeGetUser.call(this);
		case 'updateUser':
			return await executeUpdateUser.call(this);
		case 'deleteUser':
			return await executeDeleteUser.call(this);
		case 'changeUserPassword':
			return await executeChangePassword.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseOffice"`);
}
