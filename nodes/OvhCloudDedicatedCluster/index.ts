/**
 * @brief DedicatedCluster resource operations for n8n node
 *
 * Provides comprehensive operations for managing OVH Dedicated Cluster services including:
 * - List all Dedicated Cluster services for the authenticated account
 * - Get detailed information about a specific Dedicated Cluster service
 * - Get and update service information
 * - Change contact for a Dedicated Cluster service
 * - Request and confirm termination of a Dedicated Cluster service
 * - Fetch availability information for Dedicated Cluster services
 *
 * Available operations:
 * - `list`: List all Dedicated Cluster services
 * - `get`: Get details of a specific Dedicated Cluster service
 * - `getServiceInfos`: Get service information
 * - `updateServiceInfos`: Update service information
 * - `changeContact`: Change contact for a Dedicated Cluster service
 * - `terminate`: Request termination of a Dedicated Cluster service
 * - `confirmTermination`: Confirm termination of a Dedicated Cluster service
 * - `getAvailabilities`: Fetch availability information
 * - `getRawAvailabilities`: List raw availability information
 *
 * @remarks
 * Dedicated Cluster services are managed under `/dedicated/cluster` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 * This is a BETA API.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as serviceInfos from './resources/serviceInfos/index';
import * as changeContact from './resources/changeContact/index';
import * as terminate from './resources/terminate/index';
import * as confirmTermination from './resources/confirmTermination/index';
import * as availabilities from './resources/availabilities/index';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Dedicated Cluster Operation',
			name: 'dedicatedClusterOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change contact for a Dedicated Cluster service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a Dedicated Cluster service',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Cluster service',
				},
				{
					name: 'Get Availabilities',
					value: 'getAvailabilities',
					action: 'Fetch availability information for Dedicated Cluster services',
				},
				{
					name: 'Get Raw Availabilities',
					value: 'getRawAvailabilities',
					action: 'List raw availability information for Dedicated Cluster services',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a Dedicated Cluster service',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Cluster services',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Request termination of a Dedicated Cluster service',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a Dedicated Cluster service',
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
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['get'] },
		}),
		...serviceInfos.descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['getServiceInfos'] },
		}),
		...serviceInfos.descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['updateServiceInfos'] },
		}),
		...changeContact.descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['changeContact'] },
		}),
		...terminate.descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['terminate'] },
		}),
		...confirmTermination.descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['confirmTermination'] },
		}),
		...availabilities.descriptionGetAvailabilities({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['getAvailabilities'] },
		}),
		...availabilities.descriptionGetRawAvailabilities({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedClusterOperation: ['getRawAvailabilities'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Cluster operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedClusterOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getServiceInfos':
			return await serviceInfos.executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await serviceInfos.executeUpdateServiceInfos.call(this);
		case 'changeContact':
			return await changeContact.executeChangeContact.call(this);
		case 'terminate':
			return await terminate.executeTerminate.call(this);
		case 'confirmTermination':
			return await confirmTermination.executeConfirmTermination.call(this);
		case 'getAvailabilities':
			return await availabilities.executeGetAvailabilities.call(this);
		case 'getRawAvailabilities':
			return await availabilities.executeGetRawAvailabilities.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedCluster"`);
}
