/**
 * @brief IP resource operations for n8n node
 *
 * Provides operations for managing OVH IP blocks including:
 * - List all IP blocks for the authenticated account
 * - Get detailed information about a specific IP block
 *
 * Available operations:
 * - `list`: List all IP blocks
 * - `get`: Get details of a specific IP block
 *
 * @remarks
 * IP blocks are managed under `/ip` route.
 * IP block can be entered manually.
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
			displayName: 'IP Operation',
			name: 'ipOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all IP blocks',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an IP block',
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
			show: { ...displayOptions?.show, ipOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected IP operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ip"`);
}
