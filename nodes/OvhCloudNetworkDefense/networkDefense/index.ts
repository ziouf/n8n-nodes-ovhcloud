/**
 * @brief Network Defense resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH network defense services including:
 * - List all network defense services
 * - Get detailed information about a specific network defense service
 *
 * Available operations:
 * - `list`: List all network defense services
 * - `get`: Get details of a specific network defense service
 *
 * @remarks
 * Network defense services are managed under `/v2/networkDefense` route.
 * Service name can be entered manually or selected from dynamic dropdown.
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
			displayName: 'Network Defense Operation',
			name: 'networkDefenseOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all network defense services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a network defense service',
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
			show: { ...displayOptions?.show, networkDefenseOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, networkDefenseOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected network defense operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('networkDefenseOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "networkDefense"`);
}
