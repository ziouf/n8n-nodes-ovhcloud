/**
 * @brief Managed CMS resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH managed CMS services including:
 * - List all managed CMS services
 * - Get detailed information about a specific managed CMS service
 * - Manage references, resources, tasks, and websites
 *
 * Available operations:
 * - `list`: List all managed CMS services
 * - `get`: Get details of a specific managed CMS service
 * - `listReferences`: List Managed CMS references
 * - `getReference`: Get a specific reference
 * - `listResources`: List Managed CMS resources
 * - `getResource`: Get a specific resource
 * - `listTasks`: List Managed CMS tasks
 * - `getTask`: Get a specific task
 * - `listWebsites`: List Managed CMS websites
 * - `getWebsite`: Get a specific website
 *
 * @remarks
 * Managed CMS services are managed under `/v2/managedCMS` route.
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
			displayName: 'Managed CMS Operation',
			name: 'managedCMSOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a managed CMS service',
				},
				{
					name: 'Get Reference',
					value: 'getReference',
					action: 'Get a specific reference',
				},
				{
					name: 'Get Resource',
					value: 'getResource',
					action: 'Get a specific resource',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a specific task',
				},
				{
					name: 'Get Website',
					value: 'getWebsite',
					action: 'Get a specific website',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all managed CMS services',
				},
				{
					name: 'List References',
					value: 'listReferences',
					action: 'List Managed CMS references',
				},
				{
					name: 'List Resources',
					value: 'listResources',
					action: 'List Managed CMS resources',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List Managed CMS tasks',
				},
				{
					name: 'List Websites',
					value: 'listWebsites',
					action: 'List Managed CMS websites',
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
			show: { ...displayOptions?.show, managedCMSOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['get'] },
		}),
		...resources.reference.descriptionListManagedCmsReferences({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['listReferences'] },
		}),
		...resources.reference.descriptionGetManagedCmsReference({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['getReference'] },
		}),
		...resources.resource.descriptionListManagedCmsResources({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['listResources'] },
		}),
		...resources.resource.descriptionGetManagedCmsResource({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['getResource'] },
		}),
		...resources.task.descriptionListManagedCmsTasks({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['listTasks'] },
		}),
		...resources.task.descriptionGetManagedCmsTask({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['getTask'] },
		}),
		...resources.website.descriptionListManagedCmsWebsites({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['listWebsites'] },
		}),
		...resources.website.descriptionGetManagedCmsWebsite({
			...displayOptions,
			show: { ...displayOptions?.show, managedCMSOperation: ['getWebsite'] },
		}),
	];
}

/**
 * Executes the selected managed CMS operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('managedCMSOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listReferences':
			return await resources.reference.executeListManagedCmsReferences.call(this);
		case 'getReference':
			return await resources.reference.executeGetManagedCmsReference.call(this);
		case 'listResources':
			return await resources.resource.executeListManagedCmsResources.call(this);
		case 'getResource':
			return await resources.resource.executeGetManagedCmsResource.call(this);
		case 'listTasks':
			return await resources.task.executeListManagedCmsTasks.call(this);
		case 'getTask':
			return await resources.task.executeGetManagedCmsTask.call(this);
		case 'listWebsites':
			return await resources.website.executeListManagedCmsWebsites.call(this);
		case 'getWebsite':
			return await resources.website.executeGetManagedCmsWebsite.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "managedCMS"`);
}
