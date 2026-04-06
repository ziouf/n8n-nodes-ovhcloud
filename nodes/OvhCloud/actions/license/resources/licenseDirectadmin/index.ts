/**
 * @brief Directadmin resource operations for n8n node
 *
 * Provides operations for managing OVH Directadmin License services.
 *
 * @remarks
 * Directadmin License services are managed under `/license/directadmin` route.
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
import { descriptionChangeOs as descriptionChangeOs, executeChangeOs as executeChangeOs } from './resources/changeOs';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License Directadmin Operation',
			name: 'licenseDirectadminOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Directadmin License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Directadmin License service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a Directadmin License',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a Directadmin License',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List tasks for a Directadmin License',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a specific task for a Directadmin License',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate a Directadmin License service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a Directadmin License service',
				},
				{
					name: 'Get Orderable Versions',
					value: 'getOrderableVersions',
					action: 'Get orderable Directadmin versions',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a Directadmin License service',
				},
				{
					name: 'Get Allowed Destination IP',
					value: 'getAllowedDestinationIp',
					action: 'Get allowed destination IPs for a Directadmin License',
				},
				{
					name: 'Can License Be Moved To',
					value: 'canLicenseBeMovedTo',
					action: 'Check if a Directadmin License can be moved to another IP',
				},
				{
					name: 'Change IP',
					value: 'changeIp',
					action: 'Change the IP of a Directadmin License',
				},
				{
					name: 'Change OS',
					value: 'changeOs',
					action: 'Change the OS of a Directadmin License',
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
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['updateServiceInfos'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['getTask'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['confirmTermination'] },
		}),
		...descriptionGetOrderableVersions({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['getOrderableVersions'] },
		}),
		...descriptionUpdateService({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['update'] },
		}),
		...descriptionGetAllowedDestinationIp({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['getAllowedDestinationIp'] },
		}),
		...descriptionGetCanLicenseBeMovedTo({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['canLicenseBeMovedTo'] },
		}),
		...descriptionChangeIp({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['changeIp'] },
		}),
		...descriptionChangeOs({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['changeOs'] },
		}),
	];
}

/**
 * Executes the selected License Directadmin operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseDirectadminOperation', 0, {
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
		case 'changeOs':
			return await executeChangeOs.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseDirectadmin"`);
}
