/**
 * @brief Supply resource operations for n8n node
 *
 * Provides operations for managing OVH Supply services including:
 * - List all Supply services for the authenticated account
 * - Get detailed information about a specific Supply service
 *
 * Available operations:
 * - `list`: ListSupplyServices - List all Supply services
 * - `get`: GetSupplyService - Get details of a specific Supply service
 *
 * @remarks
 * Supply services are managed under `/supply/mondialRelay` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Supply
 * Operation: List Services
 * Output: Array of Supply service details
 *
 * @example
 * // Get specific service details
 * // Resource: Supply -> Get Service
 * // serviceName = 'supply-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeSupplyList,
	description as descriptionSupplyList,
} from './list.operation';
import {
	execute as executeSupplyGet,
	description as descriptionSupplyGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Supply Operation',
			name: 'supplyOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List Supply services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a Supply service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionSupplyList({
			...displayOptions,
			show: { ...displayOptions?.show, supplyOperation: ['list'] },
		}),
		...descriptionSupplyGet({
			...displayOptions,
			show: { ...displayOptions?.show, supplyOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Supply operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('supplyOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeSupplyList.call(this);
		case 'get':
			return await executeSupplyGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "supply"`);
}
