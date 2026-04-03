/**
 * @brief Freefax resource operations for n8n node
 *
 * Provides operations for managing OVH Freefax services including:
 * - List all Freefax services for the authenticated account
 * - Get detailed information about a specific Freefax service
 *
 * Available operations:
 * - `list`: ListFreefaxServices - List all Freefax services
 * - `get`: GetFreefaxService - Get details of a specific Freefax service
 *
 * @remarks
 * Freefax services are managed under `/freefax` route.
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
			displayName: 'Freefax Operation',
			name: 'freefaxOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Freefax services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Freefax service',
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
			show: { ...displayOptions?.show, freefaxOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Freefax operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('freefaxOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "freefax"`);
}
