/**
 * @brief xDSL resource operations for n8n node
 *
 * Provides operations for managing OVH xDSL services including:
 * - List all xDSL services for the authenticated account
 * - Get detailed information about a specific xDSL service
 *
 * Available operations:
 * - `list`: ListXdslServices - List all xDSL services
 * - `get`: GetXdslService - Get details of a specific xDSL service
 *
 * @remarks
 * xDSL services are managed under `/xdsl` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: xDSL
 * Operation: List Services
 * Output: Array of xDSL service details
 *
 * @example
 * // Get specific service details
 * // Resource: xDSL -> Get Service
 * // serviceName = 'xdsl-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeXdslList,
	description as descriptionXdslList,
} from './list.operation';
import {
	execute as executeXdslGet,
	description as descriptionXdslGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'xDSL Operation',
			name: 'xdslOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List xDSL services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of an xDSL service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionXdslList({
			...displayOptions,
			show: { ...displayOptions?.show, xdslOperation: ['list'] },
		}),
		...descriptionXdslGet({
			...displayOptions,
			show: { ...displayOptions?.show, xdslOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected xDSL operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('xdslOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeXdslList.call(this);
		case 'get':
			return await executeXdslGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "xdsl"`);
}
