/**
 * @brief DedicatedCluster resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Cluster services including:
 * - List all Dedicated Cluster services for the authenticated account
 * - Get detailed information about a specific Dedicated Cluster service
 *
 * Available operations:
 * - `list`: ListDedicatedClusterServices - List all Dedicated Cluster services
 * - `get`: GetDedicatedClusterService - Get details of a specific Dedicated Cluster service
 *
 * @remarks
 * Dedicated Cluster services are managed under `/dedicated/cluster` route.
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

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Dedicated Cluster Operation',
			name: 'dedicatedClusterOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Cluster services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Cluster service',
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
	];
}

/**
 * Executes the selected Dedicated Cluster operation (list, get).
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
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedCluster"`);
}
