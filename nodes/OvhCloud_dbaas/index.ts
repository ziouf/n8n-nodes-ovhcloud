/**
 * @brief DBaaS resource operations for n8n node
 *
 * Provides operations for managing OVH DBaaS log services including:
 * - List all DBaaS log services for the authenticated account
 * - Get detailed information about a specific DBaaS log service
 *
 * Available operations:
 * - `list`: List all DBaaS log services
 * - `get`: Get details of a specific DBaaS log service
 *
 * @remarks
 * DBaaS log services are managed under `/dbaas/logs` route.
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
			displayName: 'DBaaS Operation',
			name: 'dbaasOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all DBaaS log services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a DBaaS log service',
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
			show: { ...displayOptions?.show, dbaasOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dbaasOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected DBaaS operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dbaasOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dbaas"`);
}
