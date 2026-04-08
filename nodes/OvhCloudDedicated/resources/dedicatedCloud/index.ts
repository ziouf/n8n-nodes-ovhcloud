/**
 * @brief Dedicated Cloud resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Cloud services including:
 * - List all Dedicated Cloud services for the authenticated account
 * - Get detailed information about a specific Dedicated Cloud
 *
 * Available operations:
 * - `list`: ListDedicatedClouds - List all Dedicated Cloud services
 * - `get`: GetDedicatedCloud - Get details of a specific Dedicated Cloud
 *
 * @remarks
 * Dedicated Cloud services are managed under `/dedicatedCloud` route.
 * Service name can be entered manually.
 *
 * @example
 * // Configure in n8n node
 * Resource: Dedicated Cloud
 * Operation: List
 * Output: Array of Dedicated Cloud service names
 *
 * @example
 * // Get specific Dedicated Cloud details
 * // Resource: Dedicated Cloud -> Get
 * // serviceName = 'dc-xxxxx'
 * // Output: Dedicated Cloud details with datacenter, version, etc.
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
			displayName: 'Dedicated Cloud Operation',
			name: 'dedicatedCloudOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Cloud services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Cloud',
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
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Cloud operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedCloudOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedCloud"`);
}
