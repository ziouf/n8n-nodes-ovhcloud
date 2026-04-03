/**
 * @brief Web Hosting resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH web hosting services including:
 * - List all web hosting services
 * - Get detailed information about a specific web hosting service
 *
 * Available operations:
 * - `list`: List all web hosting services
 * - `get`: Get details of a specific web hosting service
 *
 * @remarks
 * Web hosting services are managed under `/v2/webhosting` route.
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
			displayName: 'Web Hosting Operation',
			name: 'v2WebhostingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all web hosting services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a web hosting service',
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
			show: { ...displayOptions?.show, v2WebhostingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2WebhostingOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected web hosting operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2WebhostingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2Webhosting"`);
}
