/**
 * @brief Public Cloud resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH Public Cloud services including:
 * - List all Public Cloud projects
 * - Get detailed information about a specific Public Cloud project
 * - Manage Rancher services, tasks, events, and references
 *
 * Available operations:
 * - `list`: List all Public Cloud projects
 * - `get`: Get details of a specific Public Cloud project
 * - `listProjects`: List Public Cloud projects
 * - `getProject`: Get a specific project
 * - `listRanchers`: List Rancher services
 * - `getRancher`: Get a specific Rancher service
 * - `getRancherAdminCredentials`: Get Rancher admin credentials
 * - `getRancherCapabilitiesPlan`: Get Rancher capabilities plan
 * - `getRancherCapabilitiesVersion`: Get Rancher capabilities version
 * - `listRancherEvents`: List Rancher events
 * - `listRancherTasks`: List Rancher tasks
 * - `getRancherTask`: Get a specific Rancher task
 * - `listReferenceRancherPlans`: List reference Rancher plans
 * - `listReferenceRancherVersions`: List reference Rancher versions
 *
 * @remarks
 * Public Cloud services are managed under `/v2/publicCloud` route.
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
			displayName: 'Public Cloud Operation',
			name: 'publicCloudOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Public Cloud projects',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Public Cloud project',
				},
				{
					name: 'List Projects',
					value: 'listProjects',
					action: 'List Public Cloud projects',
				},
				{
					name: 'Get Project',
					value: 'getProject',
					action: 'Get a specific project',
				},
				{
					name: 'List Ranchers',
					value: 'listRanchers',
					action: 'List Rancher services',
				},
				{
					name: 'Get Rancher',
					value: 'getRancher',
					action: 'Get a specific Rancher service',
				},
				{
					name: 'Get Rancher Admin Credentials',
					value: 'getRancherAdminCredentials',
					action: 'Get Rancher admin credentials',
				},
				{
					name: 'Get Rancher Capabilities Plan',
					value: 'getRancherCapabilitiesPlan',
					action: 'Get Rancher capabilities plan',
				},
				{
					name: 'Get Rancher Capabilities Version',
					value: 'getRancherCapabilitiesVersion',
					action: 'Get Rancher capabilities version',
				},
				{
					name: 'List Rancher Events',
					value: 'listRancherEvents',
					action: 'List Rancher events',
				},
				{
					name: 'List Rancher Tasks',
					value: 'listRancherTasks',
					action: 'List Rancher tasks',
				},
				{
					name: 'Get Rancher Task',
					value: 'getRancherTask',
					action: 'Get a specific Rancher task',
				},
				{
					name: 'List Reference Rancher Plans',
					value: 'listReferenceRancherPlans',
					action: 'List reference Rancher plans',
				},
				{
					name: 'List Reference Rancher Versions',
					value: 'listReferenceRancherVersions',
					action: 'List reference Rancher versions',
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
			show: { ...displayOptions?.show, publicCloudOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['get'] },
		}),
		...resources.project.descriptionListPublicCloudProjects({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['listProjects'] },
		}),
		...resources.project.descriptionGetPublicCloudProject({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['getProject'] },
		}),
		...resources.rancher.descriptionListPublicCloudRanchers({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['listRanchers'] },
		}),
		...resources.rancher.descriptionGetPublicCloudRancher({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['getRancher'] },
		}),
		...resources.rancher.descriptionGetPublicCloudRancherAdminCredentials({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['getRancherAdminCredentials'] },
		}),
		...resources.rancher.descriptionGetPublicCloudRancherCapabilitiesPlan({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['getRancherCapabilitiesPlan'] },
		}),
		...resources.rancher.descriptionGetPublicCloudRancherCapabilitiesVersion({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['getRancherCapabilitiesVersion'] },
		}),
		...resources.rancher.descriptionListPublicCloudRancherEvents({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['listRancherEvents'] },
		}),
		...resources.rancher.descriptionListPublicCloudRancherTasks({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['listRancherTasks'] },
		}),
		...resources.rancher.descriptionGetPublicCloudRancherTask({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['getRancherTask'] },
		}),
		...resources.reference.descriptionListPublicCloudReferenceRancherPlans({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['listReferenceRancherPlans'] },
		}),
		...resources.reference.descriptionListPublicCloudReferenceRancherVersions({
			...displayOptions,
			show: { ...displayOptions?.show, publicCloudOperation: ['listReferenceRancherVersions'] },
		}),
	];
}

/**
 * Executes the selected Public Cloud operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('publicCloudOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listProjects':
			return await resources.project.executeListPublicCloudProjects.call(this);
		case 'getProject':
			return await resources.project.executeGetPublicCloudProject.call(this);
		case 'listRanchers':
			return await resources.rancher.executeListPublicCloudRanchers.call(this);
		case 'getRancher':
			return await resources.rancher.executeGetPublicCloudRancher.call(this);
		case 'getRancherAdminCredentials':
			return await resources.rancher.executeGetPublicCloudRancherAdminCredentials.call(this);
		case 'getRancherCapabilitiesPlan':
			return await resources.rancher.executeGetPublicCloudRancherCapabilitiesPlan.call(this);
		case 'getRancherCapabilitiesVersion':
			return await resources.rancher.executeGetPublicCloudRancherCapabilitiesVersion.call(this);
		case 'listRancherEvents':
			return await resources.rancher.executeListPublicCloudRancherEvents.call(this);
		case 'listRancherTasks':
			return await resources.rancher.executeListPublicCloudRancherTasks.call(this);
		case 'getRancherTask':
			return await resources.rancher.executeGetPublicCloudRancherTask.call(this);
		case 'listReferenceRancherPlans':
			return await resources.reference.executeListPublicCloudReferenceRancherPlans.call(this);
		case 'listReferenceRancherVersions':
			return await resources.reference.executeListPublicCloudReferenceRancherVersions.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "publicCloud"`);
}
