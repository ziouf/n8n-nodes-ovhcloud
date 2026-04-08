/**
 * @brief Pack xDSL resource operations for n8n node
 *
 * Provides operations for managing OVH Pack xDSL services including:
 * - List all Pack xDSL services for the authenticated account
 * - Get detailed information about a specific Pack xDSL service
 *
 * Available operations:
 * - `list`: ListPackXdslServices - List all Pack xDSL services
 * - `get`: GetPackXdslService - Get details of a specific Pack xDSL service
 *
 * @remarks
 * Pack xDSL services are managed under `/pack/xdsl` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Pack xDSL
 * Operation: List Services
 * Output: Array of Pack xDSL service details
 *
 * @example
 * // Get specific service details
 * // Resource: Pack xDSL -> Get Service
 * // serviceName = 'pack-xdsl-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executePackXdslList,
	description as descriptionPackXdslList,
} from './list.operation';
import {
	execute as executePackXdslGet,
	description as descriptionPackXdslGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Pack xDSL Operation',
			name: 'packXdslOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List Pack xDSL services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a Pack xDSL service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionPackXdslList({
			...displayOptions,
			show: { ...displayOptions?.show, packXdslOperation: ['list'] },
		}),
		...descriptionPackXdslGet({
			...displayOptions,
			show: { ...displayOptions?.show, packXdslOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Pack xDSL operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('packXdslOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executePackXdslList.call(this);
		case 'get':
			return await executePackXdslGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "packXdsl"`);
}
