/**
 * @brief vRack Services resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH vRack services including:
 * - List all vRack services
 * - Get detailed information about a specific vRack service
 * - Manage references, resources, eligible managed services, and tasks
 *
 * Available operations:
 * - `list`: List all vRack services
 * - `get`: Get details of a specific vRack service
 * - `listReferences`: List vRack Services references
 * - `getReference`: Get a specific reference
 * - `listResources`: List vRack Services resources
 * - `getResource`: Get a specific resource
 * - `listEligibleManagedServices`: List eligible managed services
 * - `listTasks`: List vRack Services tasks
 * - `getTask`: Get a specific task
 *
 * @remarks
 * vRack services are managed under `/v2/vrackServices` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as resources from './resources';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'vRack Services Operation',
			name: 'vrackServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all vRack services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a vRack service',
				},
				{
					name: 'List References',
					value: 'listReferences',
					action: 'List vRack Services references',
				},
				{
					name: 'Get Reference',
					value: 'getReference',
					action: 'Get a specific reference',
				},
				{
					name: 'List Resources',
					value: 'listResources',
					action: 'List vRack Services resources',
				},
				{
					name: 'Get Resource',
					value: 'getResource',
					action: 'Get a specific resource',
				},
				{
					name: 'List Eligible Managed Services',
					value: 'listEligibleManagedServices',
					action: 'List eligible managed services',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List vRack Services tasks',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a specific task',
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
			show: { ...displayOptions?.show, vrackServicesOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['get'] },
		}),
		...resources.reference.descriptionListVrackServicesReferences({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['listReferences'] },
		}),
		...resources.reference.descriptionGetVrackServicesReference({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['getReference'] },
		}),
		...resources.resource.descriptionListVrackServicesResources({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['listResources'] },
		}),
		...resources.resource.descriptionGetVrackServicesResource({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['getResource'] },
		}),
		...resources.eligibleManagedService.descriptionListVrackServicesEligibleManagedServices({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['listEligibleManagedServices'] },
		}),
		...resources.task.descriptionListVrackServicesTasks({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['listTasks'] },
		}),
		...resources.task.descriptionGetVrackServicesTask({
			...displayOptions,
			show: { ...displayOptions?.show, vrackServicesOperation: ['getTask'] },
		}),
	];
}

/**
 * Executes the selected vRack services operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vrackServicesOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listReferences':
			return await resources.reference.executeListVrackServicesReferences.call(this);
		case 'getReference':
			return await resources.reference.executeGetVrackServicesReference.call(this);
		case 'listResources':
			return await resources.resource.executeListVrackServicesResources.call(this);
		case 'getResource':
			return await resources.resource.executeGetVrackServicesResource.call(this);
		case 'listEligibleManagedServices':
			return await resources.eligibleManagedService.executeListVrackServicesEligibleManagedServices.call(
				this,
			);
		case 'listTasks':
			return await resources.task.executeListVrackServicesTasks.call(this);
		case 'getTask':
			return await resources.task.executeGetVrackServicesTask.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vrackServices"`);
}
