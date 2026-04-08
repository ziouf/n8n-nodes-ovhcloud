/**
 * @brief CloudLinux resource operations for n8n node
 *
 * Provides operations for managing OVH CloudLinux License services.
 *
 * @remarks
 * CloudLinux License services are managed under `/license/cloudlinux` route.
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

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License CloudLinux Operation',
			name: 'licenseCloudLinuxOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a CloudLinux License service',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a CloudLinux License service',
				},
				{
					name: 'Get Orderable Versions',
					value: 'getOrderableVersions',
					action: 'Get orderable CloudLinux versions',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a CloudLinux License',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a specific task for a CloudLinux License',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all CloudLinux License services',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List tasks for a CloudLinux License',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate a CloudLinux License service',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a CloudLinux License',
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
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['updateServiceInfos'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['getTask'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['confirmTermination'] },
		}),
		...descriptionGetOrderableVersions({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['getOrderableVersions'] },
		}),
	];
}

/**
 * Executes the selected License CloudLinux operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseCloudLinuxOperation', 0, {
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
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseCloudLinux"`);
}
