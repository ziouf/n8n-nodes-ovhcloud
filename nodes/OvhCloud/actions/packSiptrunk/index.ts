/**
 * @brief Pack SIP Trunk resource operations for n8n node
 *
 * Provides operations for managing OVH Pack SIP Trunk services including:
 * - List all Pack SIP Trunk services for the authenticated account
 * - Get detailed information about a specific Pack SIP Trunk service
 *
 * Available operations:
 * - `list`: ListPackSiptrunkServices - List all Pack SIP Trunk services
 * - `get`: GetPackSiptrunkService - Get details of a specific Pack SIP Trunk service
 *
 * @remarks
 * Pack SIP Trunk services are managed under `/pack/siptrunk` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Pack SIP Trunk
 * Operation: List Services
 * Output: Array of Pack SIP Trunk service details
 *
 * @example
 * // Get specific service details
 * // Resource: Pack SIP Trunk -> Get Service
 * // serviceName = 'pack-siptrunk-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executePackSiptrunkList,
	description as descriptionPackSiptrunkList,
} from './list.operation';
import {
	execute as executePackSiptrunkGet,
	description as descriptionPackSiptrunkGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Pack SIP Trunk Operation',
			name: 'packSiptrunkOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List Pack SIP Trunk services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a Pack SIP Trunk service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionPackSiptrunkList({
			...displayOptions,
			show: { ...displayOptions?.show, packSiptrunkOperation: ['list'] },
		}),
		...descriptionPackSiptrunkGet({
			...displayOptions,
			show: { ...displayOptions?.show, packSiptrunkOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Pack SIP Trunk operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('packSiptrunkOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executePackSiptrunkList.call(this);
		case 'get':
			return await executePackSiptrunkGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "packSiptrunk"`);
}
