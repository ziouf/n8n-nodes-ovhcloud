/**
 * @brief IP Slicing sub-resource operations for IP resource
 *
 * Provides operations for retrieving IP slicing information:
 * - List: List all slicing entries for an IP block
 *
 * Available operations:
 * - `list`: List all slicing entries
 *
 * @remarks
 * Slicing entries are managed under `/ip/{ip}/slicing` route.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Slicing Operation',
			name: 'ipSlicingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all slicing entries',
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
			show: { ...displayOptions?.show, ipSlicingOperation: ['list'] },
		}),
	];
}

/**
 * Executes the selected IP Slicing operation (list).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipSlicingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipSlicing"`);
}
