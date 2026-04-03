/**
 * @brief Price resource operations for n8n node
 *
 * Provides operations for managing OVHcloud pricing information including:
 * - List all price services for the authenticated account
 * - Get detailed pricing information for a specific service
 *
 * Available operations:
 * - `list`: ListPrices - List all price services
 * - `get`: GetPrice - Get pricing details for a specific service
 *
 * @remarks
 * Price services are managed under `/price` route.
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
			displayName: 'Price Operation',
			name: 'priceOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all price services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get pricing details for a service',
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
			show: { ...displayOptions?.show, priceOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, priceOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected price operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('priceOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "price"`);
}
