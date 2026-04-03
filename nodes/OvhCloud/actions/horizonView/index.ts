/**
 * @brief HorizonView resource operations for n8n node
 *
 * Provides operations for managing OVH HorizonView services including:
 * - List all HorizonView services for the authenticated account
 * - Get detailed information about a specific HorizonView service
 *
 * Available operations:
 * - `list`: ListHorizonViewServices - List all HorizonView services
 * - `get`: GetHorizonViewService - Get details of a specific HorizonView service
 *
 * @remarks
 * HorizonView services are managed under `/horizonView` route.
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
			displayName: 'HorizonView Operation',
			name: 'horizonViewOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all HorizonView services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a HorizonView service',
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
			show: { ...displayOptions?.show, horizonViewOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected HorizonView operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('horizonViewOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "horizonView"`);
}
