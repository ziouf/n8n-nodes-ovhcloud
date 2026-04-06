/**
 * @brief Worklight resource operations for n8n node
 *
 * Provides operations for managing OVH Worklight License services.
 *
 * @remarks
 * Worklight License services are managed under `/license/worklight` route.
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
import { descriptionGetAllowedDestinationIp as descriptionGetAllowedDestinationIp, executeGetAllowedDestinationIp as executeGetAllowedDestinationIp } from './resources/allowedDestinationIp';
import { descriptionGetCanLicenseBeMovedTo as descriptionGetCanLicenseBeMovedTo, executeGetCanLicenseBeMovedTo as executeGetCanLicenseBeMovedTo } from './resources/canLicenseBeMovedTo';
import { descriptionChangeIp as descriptionChangeIp, executeChangeIp as executeChangeIp } from './resources/changeIp';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License Worklight Operation',
			name: 'licenseWorklightOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Worklight License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Worklight License service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a Worklight License',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a Worklight License',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List tasks for a Worklight License',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a specific task for a Worklight License',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate a Worklight License service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a Worklight License service',
				},
				{
					name: 'Get Orderable Versions',
					value: 'getOrderableVersions',
					action: 'Get orderable Worklight versions',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a Worklight License service',
				},
				{
					name: 'Get Allowed Destination IP',
					value: 'getAllowedDestinationIp',
					action: 'Get allowed destination IPs for a Worklight License',
				},
				{
					name: 'Can License Be Moved To',
					value: 'canLicenseBeMovedTo',
					action: 'Check if a Worklight License can be moved to another IP',
				},
				{
					name: 'Change IP',
					value: 'changeIp',
					action: 'Change the IP of a Worklight License',
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
			show: { ...displayOptions?.show, licenseWorklightOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['updateServiceInfos'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['getTask'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['confirmTermination'] },
		}),
		...descriptionGetOrderableVersions({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['getOrderableVersions'] },
		}),
		...descriptionUpdateService({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['update'] },
		}),
		...descriptionGetAllowedDestinationIp({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['getAllowedDestinationIp'] },
		}),
		...descriptionGetCanLicenseBeMovedTo({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['canLicenseBeMovedTo'] },
		}),
		...descriptionChangeIp({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['changeIp'] },
		}),
	];
}

/**
 * Executes the selected License Worklight operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseWorklightOperation', 0, {
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
		case 'getAllowedDestinationIp':
			return await executeGetAllowedDestinationIp.call(this);
		case 'canLicenseBeMovedTo':
			return await executeGetCanLicenseBeMovedTo.call(this);
		case 'changeIp':
			return await executeChangeIp.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseWorklight"`);
}
