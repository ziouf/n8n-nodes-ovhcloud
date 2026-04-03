/**
 * @brief VIP resource operations for n8n node
 *
 * Provides operations for managing OVH VIP services including:
 * - List all VIP services for the authenticated account
 * - Get detailed information about a specific VIP service
 *
 * Available operations:
 * - `list`: ListVipServices - List all VIP services
 * - `get`: GetVipService - Get details of a specific VIP service
 *
 * @remarks
 * VIP services are managed under `/vip` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: VIP
 * Operation: List Services
 * Output: Array of VIP service details
 *
 * @example
 * // Get specific service details
 * // Resource: VIP -> Get Service
 * // serviceName = 'vip-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeVipList,
	description as descriptionVipList,
} from './list.operation';
import {
	execute as executeVipGet,
	description as descriptionVipGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'VIP Operation',
			name: 'vipOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List VIP services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a VIP service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionVipList({
			...displayOptions,
			show: { ...displayOptions?.show, vipOperation: ['list'] },
		}),
		...descriptionVipGet({
			...displayOptions,
			show: { ...displayOptions?.show, vipOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected VIP operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vipOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeVipList.call(this);
		case 'get':
			return await executeVipGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vip"`);
}
