/**
 * @brief Stack resource operations for n8n node
 *
 * Provides operations for managing OVH Stack services including:
 * - List all Stack services for the authenticated account
 * - Get detailed information about a specific Stack service
 *
 * Available operations:
 * - `list`: ListStackServices - List all Stack services
 * - `get`: GetStackService - Get details of a specific Stack service
 *
 * @remarks
 * Stack services are managed under `/stack/mis` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Stack
 * Operation: List Services
 * Output: Array of Stack service details
 *
 * @example
 * // Get specific service details
 * // Resource: Stack -> Get Service
 * // serviceName = 'stack-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeStackList,
	description as descriptionStackList,
} from './list.operation';
import {
	execute as executeStackGet,
	description as descriptionStackGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Stack Operation',
			name: 'stackOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List Stack services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a Stack service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionStackList({
			...displayOptions,
			show: { ...displayOptions?.show, stackOperation: ['list'] },
		}),
		...descriptionStackGet({
			...displayOptions,
			show: { ...displayOptions?.show, stackOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Stack operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('stackOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeStackList.call(this);
		case 'get':
			return await executeStackGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "stack"`);
}
