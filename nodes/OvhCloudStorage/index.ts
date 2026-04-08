/**
 * @brief Storage resource operations for n8n node
 *
 * Provides operations for managing OVHcloud storage services including:
 * - List all storage services for the authenticated account
 * - Get detailed information about a specific storage service
 *
 * Available operations:
 * - `list`: ListStorages - List all storage services
 * - `get`: GetStorage - Get details of a specific storage service
 *
 * @remarks
 * Storage services are managed under `/storage` route.
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
			displayName: 'Storage Operation',
			name: 'storageOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all storage services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a storage service',
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
			show: { ...displayOptions?.show, storageOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, storageOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected storage operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('storageOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "storage"`);
}
