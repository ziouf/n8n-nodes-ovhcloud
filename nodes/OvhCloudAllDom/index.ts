/**
 * @brief AllDom resource operations for n8n node
 *
 * Provides operations for managing OVH AllDom services including:
 * - List all AllDom services for the authenticated account
 * - Get detailed information about a specific AllDom service
 *
 * Available operations:
 * - `list`: ListAllDomServices - List all AllDom services
 * - `get`: GetAllDomService - Get details of a specific AllDom service
 *
 * @remarks
 * AllDom services are managed under `/allDom` route.
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
			displayName: 'AllDom Operation',
			name: 'allDomOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all AllDom services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an AllDom service',
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
			show: { ...displayOptions?.show, allDomOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, allDomOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected AllDom operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('allDomOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "allDom"`);
}
