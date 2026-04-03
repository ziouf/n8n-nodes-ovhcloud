/**
 * @brief Veeam Enterprise resource operations for n8n node
 *
 * Provides operations for managing OVH Veeam Enterprise services including:
 * - List all Veeam Enterprise services for the authenticated account
 * - Get detailed information about a specific Veeam Enterprise service
 *
 * Available operations:
 * - `list`: ListVeeamEnterpriseServices - List all Veeam Enterprise services
 * - `get`: GetVeeamEnterpriseService - Get details of a specific Veeam Enterprise service
 *
 * @remarks
 * Veeam Enterprise services are managed under `/veeam/veeamEnterprise` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Veeam Enterprise
 * Operation: List Services
 * Output: Array of Veeam Enterprise service details
 *
 * @example
 * // Get specific service details
 * // Resource: Veeam Enterprise -> Get Service
 * // serviceName = 'veeam-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeVeeamEnterpriseList,
	description as descriptionVeeamEnterpriseList,
} from './list.operation';
import {
	execute as executeVeeamEnterpriseGet,
	description as descriptionVeeamEnterpriseGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Veeam Enterprise Operation',
			name: 'veeamEnterpriseOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List Veeam Enterprise services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a Veeam Enterprise service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionVeeamEnterpriseList({
			...displayOptions,
			show: { ...displayOptions?.show, veeamEnterpriseOperation: ['list'] },
		}),
		...descriptionVeeamEnterpriseGet({
			...displayOptions,
			show: { ...displayOptions?.show, veeamEnterpriseOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Veeam Enterprise operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('veeamEnterpriseOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeVeeamEnterpriseList.call(this);
		case 'get':
			return await executeVeeamEnterpriseGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "veeamEnterprise"`);
}
