/**
 * @brief Order resource operations for n8n node
 *
 * Provides operations for managing OVHcloud orders including:
 * - List all orders for the authenticated account
 * - Get detailed information about a specific order
 *
 * Available operations:
 * - `list`: ListOrders - List all orders
 * - `get`: GetOrder - Get details of a specific order
 *
 * @remarks
 * Orders are managed under `/order` route.
 * Order ID can be entered manually.
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
			displayName: 'Order Operation',
			name: 'orderOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all orders',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an order',
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
			show: { ...displayOptions?.show, orderOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected order operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('orderOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "order"`);
}
