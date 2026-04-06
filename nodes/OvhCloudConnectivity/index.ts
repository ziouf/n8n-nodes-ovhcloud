/**
 * @brief Connectivity resource operations for n8n node
 *
 * Provides operations for managing OVH Connectivity services including:
 * - List all Connectivity services for the authenticated account
 * - Get detailed information about a specific Connectivity service
 *
 * Available operations:
 * - `list`: ListConnectivityServices - List all Connectivity services
 * - `get`: GetConnectivityService - Get details of a specific Connectivity service
 *
 * @remarks
 * Connectivity services are managed under `/connectivity` route.
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
			displayName: 'Connectivity Operation',
			name: 'connectivityOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Connectivity services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Connectivity service',
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
			show: { ...displayOptions?.show, connectivityOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, connectivityOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Connectivity operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('connectivityOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "connectivity"`);
}
