/**
 * @brief Veeam Cloud Connect resource operations for n8n node
 *
 * Provides operations for managing OVH Veeam Cloud Connect services including:
 * - List all Veeam Cloud Connect services for the authenticated account
 * - Get detailed information about a specific Veeam Cloud Connect service
 *
 * Available operations:
 * - `list`: ListVeeamCloudConnectServices - List all Veeam Cloud Connect services
 * - `get`: GetVeeamCloudConnectService - Get details of a specific Veeam Cloud Connect service
 *
 * @remarks
 * Veeam Cloud Connect services are managed under `/veeamCloudConnect` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Veeam Cloud Connect
 * Operation: List Services
 * Output: Array of Veeam Cloud Connect service details
 *
 * @example
 * // Get specific service details
 * // Resource: Veeam Cloud Connect -> Get Service
 * // serviceName = 'veeam-cc-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeVeeamCloudConnectList,
	description as descriptionVeeamCloudConnectList,
} from './list.operation';
import {
	execute as executeVeeamCloudConnectGet,
	description as descriptionVeeamCloudConnectGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Veeam Cloud Connect Operation',
			name: 'veeamCloudConnectOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List Veeam Cloud Connect services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a Veeam Cloud Connect service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionVeeamCloudConnectList({
			...displayOptions,
			show: { ...displayOptions?.show, veeamCloudConnectOperation: ['list'] },
		}),
		...descriptionVeeamCloudConnectGet({
			...displayOptions,
			show: { ...displayOptions?.show, veeamCloudConnectOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Veeam Cloud Connect operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('veeamCloudConnectOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeVeeamCloudConnectList.call(this);
		case 'get':
			return await executeVeeamCloudConnectGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "veeamCloudConnect"`);
}
