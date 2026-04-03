/**
 * @brief Hosting resource operations for n8n node
 *
 * Provides operations for managing OVH private database hosting services including:
 * - List all private database hosting services for the authenticated account
 * - Get detailed information about a specific private database
 *
 * Available operations:
 * - `list`: ListHosting - List all private database hosting services
 * - `get`: GetHosting - Get details of a specific private database
 *
 * @remarks
 * Private database hosting services are managed under `/hosting/privateDatabase` route.
 * Service name can be entered manually.
 *
 * @example
 * // Configure in n8n node
 * Resource: Hosting
 * Operation: List
 * Output: Array of private database service names
 *
 * @example
 * // Get specific private database details
 * // Resource: Hosting -> Get
 * // serviceName = 'privatedatabase-xxxxx'
 * // Output: Private database details with quota, version, etc.
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
			displayName: 'Hosting Operation',
			name: 'hostingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all private database hosting services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a private database',
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
			show: { ...displayOptions?.show, hostingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected hosting operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('hostingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hosting"`);
}
