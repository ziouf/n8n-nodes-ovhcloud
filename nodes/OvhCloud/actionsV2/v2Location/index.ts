/**
 * @brief Location resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH locations including:
 * - List all locations
 * - Get detailed information about a specific location
 *
 * Available operations:
 * - `list`: List all locations
 * - `get`: Get details of a specific location
 *
 * @remarks
 * Locations are managed under `/v2/location` route.
 * Location ID can be entered manually or selected from dynamic dropdown.
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
			displayName: 'Location Operation',
			name: 'v2LocationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all locations',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a location',
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
			show: { ...displayOptions?.show, v2LocationOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2LocationOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected location operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2LocationOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2Location"`);
}
