/**
 * @brief IP Antihack sub-resource operations for IP resource
 *
 * Provides operations for retrieving IP antihack information:
 * - List: List all antihack entries for an IP block
 *
 * Available operations:
 * - `list`: List all antihack entries
 *
 * @remarks
 * Antihack entries are managed under `/ip/{ip}/antihack` route.
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
			displayName: 'IP Antihack Operation',
			name: 'ipAntihackOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all antihack entries',
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
			show: { ...displayOptions?.show, ipAntihackOperation: ['list'] },
		}),
	];
}

/**
 * Executes the selected IP Antihack operation (list).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipAntihackOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipAntihack"`);
}
