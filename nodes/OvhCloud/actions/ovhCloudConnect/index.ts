/**
 * @brief OVH Cloud Connect resource operations for n8n node
 *
 * Provides operations for managing OVHcloud Cloud Connect services including:
 * - List all Cloud Connect services for the authenticated account
 * - Get detailed information about a specific Cloud Connect service
 *
 * Available operations:
 * - `list`: ListOvhCloudConnect - List all Cloud Connect services
 * - `get`: GetOvhCloudConnect - Get details of a specific Cloud Connect service
 *
 * @remarks
 * Cloud Connect services are managed under `/ovhCloudConnect` route.
 * Service name can be entered manually.
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
			displayName: 'OVH Cloud Connect Operation',
			name: 'ovhCloudConnectOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all OVH Cloud Connect services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an OVH Cloud Connect service',
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
			show: { ...displayOptions?.show, ovhCloudConnectOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ovhCloudConnectOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected OVH Cloud Connect operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ovhCloudConnectOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudConnect"`);
}
