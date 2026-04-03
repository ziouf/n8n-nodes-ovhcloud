/**
 * @brief Startup resource operations for n8n node
 *
 * Provides operations for managing OVHcloud startup services including:
 * - List all startup services for the authenticated account
 * - Get detailed information about a specific startup service
 *
 * Available operations:
 * - `list`: ListStartups - List all startup services
 * - `get`: GetStartup - Get details of a specific startup service
 *
 * @remarks
 * Startup services are managed under `/startup` route.
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
			displayName: 'Startup Operation',
			name: 'startupOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all startup services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a startup service',
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
			show: { ...displayOptions?.show, startupOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, startupOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected startup operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('startupOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "startup"`);
}
