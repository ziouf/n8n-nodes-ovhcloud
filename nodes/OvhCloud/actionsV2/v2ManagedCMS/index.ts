/**
 * @brief Managed CMS resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH managed CMS services including:
 * - List all managed CMS services
 * - Get detailed information about a specific managed CMS service
 *
 * Available operations:
 * - `list`: List all managed CMS services
 * - `get`: Get details of a specific managed CMS service
 *
 * @remarks
 * Managed CMS services are managed under `/v2/managedCMS` route.
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
			displayName: 'Managed CMS Operation',
			name: 'v2ManagedCMSOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all managed CMS services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a managed CMS service',
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
			show: { ...displayOptions?.show, v2ManagedCMSOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2ManagedCMSOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected managed CMS operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2ManagedCMSOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2ManagedCMS"`);
}
