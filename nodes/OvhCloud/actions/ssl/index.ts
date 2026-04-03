/**
 * @brief SSL resource operations for n8n node
 *
 * Provides operations for managing OVH SSL services including:
 * - List all SSL services for the authenticated account
 * - Get detailed information about a specific SSL service
 *
 * Available operations:
 * - `list`: ListSSL - List all SSL services
 * - `get`: GetSSL - Get details of a specific SSL service
 *
 * @remarks
 * SSL services are managed under `/ssl` route.
 * Service name can be entered manually.
 *
 * @example
 * // Configure in n8n node
 * Resource: SSL
 * Operation: List
 * Output: Array of SSL service names
 *
 * @example
 * // Get specific SSL service details
 * // Resource: SSL -> Get
 * // serviceName = 'ssl-xxxxx'
 * // Output: SSL service details with status, domain, etc.
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
			displayName: 'SSL Operation',
			name: 'sslOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all SSL services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an SSL service',
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
			show: { ...displayOptions?.show, sslOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, sslOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected SSL operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('sslOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ssl"`);
}
