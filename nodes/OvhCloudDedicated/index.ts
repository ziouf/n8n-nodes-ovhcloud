/**
 * @brief Dedicated server resource operations for n8n node
 *
 * Provides operations for managing OVH dedicated servers including:
 * - List all dedicated servers for the authenticated account
 * - Get detailed information about a specific dedicated server
 *
 * Available operations:
 * - `list`: List all dedicated servers
 * - `get`: Get details of a specific dedicated server
 *
 * @remarks
 * Dedicated servers are managed under `/dedicated/server` route.
 * Server name can be entered manually.
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
			displayName: 'Dedicated Server Operation',
			name: 'dedicatedOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all dedicated servers',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a dedicated server',
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
			show: { ...displayOptions?.show, dedicatedOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected dedicated server operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicated"`);
}
