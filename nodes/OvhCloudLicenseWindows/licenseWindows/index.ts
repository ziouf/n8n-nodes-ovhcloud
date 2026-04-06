/**
 * @brief Windows resource operations for n8n node
 *
 * Provides operations for managing OVH Windows License services.
 *
 * @remarks
 * Windows License services are managed under `/license/windows` route.
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
import { descriptionListTasks as descriptionListTasks, executeListTasks as executeListTasks, descriptionGetTask as descriptionGetTask, executeGetTask as executeGetTask  } from './resources/tasks';
import { descriptionTerminate as descriptionTerminate, executeTerminate as executeTerminate } from './resources/terminate';
import { descriptionConfirmTermination as descriptionConfirmTermination, executeConfirmTermination as executeConfirmTermination } from './resources/confirmTermination';
import { descriptionGetOrderableVersions as descriptionGetOrderableVersions, executeGetOrderableVersions as executeGetOrderableVersions } from './resources/orderableVersions';
import { descriptionUpdateService as descriptionUpdateService, executeUpdateService as executeUpdateService } from './resources/update';
import { descriptionListOptions as descriptionListOptions, executeListOptions as executeListOptions, descriptionGetOption as descriptionGetOption, executeGetOption as executeGetOption , descriptionDeleteOption as descriptionDeleteOption, executeDeleteOption as executeDeleteOption  } from './resources/option';
import { descriptionAddSqlServer as descriptionAddSqlServer, executeAddSqlServer as executeAddSqlServer } from './resources/sqlServer';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License Windows Operation',
			name: 'licenseWindowsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Windows License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Windows License service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a Windows License',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a Windows License',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List tasks for a Windows License',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a specific task for a Windows License',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate a Windows License service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a Windows License service',
				},
				{
					name: 'Get Orderable Versions',
					value: 'getOrderableVersions',
					action: 'Get orderable Windows versions',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a Windows License service',
				},
				{
					name: 'List Options',
					value: 'listOptions',
					action: 'List options for a Windows License',
				},
				{
					name: 'Get Option',
					value: 'getOption',
					action: 'Get a specific option for a Windows License',
				},
				{
					name: 'Delete Option',
					value: 'deleteOption',
					action: 'Delete an option from a Windows License',
				},
				{
					name: 'Add SQL Server',
					value: 'addSqlServer',
					action: 'Add SQL Server to a Windows License',
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
			show: { ...displayOptions?.show, licenseWindowsOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['updateServiceInfos'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['getTask'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['confirmTermination'] },
		}),
		...descriptionGetOrderableVersions({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['getOrderableVersions'] },
		}),
		...descriptionUpdateService({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['update'] },
		}),
		...descriptionListOptions({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['listOptions'] },
		}),
		...descriptionGetOption({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['getOption'] },
		}),
		...descriptionDeleteOption({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['deleteOption'] },
		}),
		...descriptionAddSqlServer({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWindowsOperation: ['addSqlServer'] },
		}),
	];
}

/**
 * Executes the selected License Windows operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseWindowsOperation', 0, {
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
		case 'listTasks':
			return await executeListTasks.call(this);
		case 'getTask':
			return await executeGetTask.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this);
		case 'getOrderableVersions':
			return await executeGetOrderableVersions.call(this);
		case 'update':
			return await executeUpdateService.call(this);
		case 'listOptions':
			return await executeListOptions.call(this);
		case 'getOption':
			return await executeGetOption.call(this);
		case 'deleteOption':
			return await executeDeleteOption.call(this);
		case 'addSqlServer':
			return await executeAddSqlServer.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseWindows"`);
}
