/**
 * @brief Commercial Catalog resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH commercial catalog including:
 * - List all commercial catalog offers
 * - Get detailed information about a specific offer
 *
 * Available operations:
 * - `list`: List all commercial catalog offers
 * - `get`: Get details of a specific offer
 *
 * @remarks
 * Commercial catalog is managed under `/v2/commercialCatalog` route.
 * Offer ID can be entered manually or selected from dynamic dropdown.
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
			displayName: 'Commercial Catalog Operation',
			name: 'v2CommercialCatalogOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all commercial catalog offers',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a commercial catalog offer',
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
			show: { ...displayOptions?.show, v2CommercialCatalogOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2CommercialCatalogOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected commercial catalog operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2CommercialCatalogOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2CommercialCatalog"`);
}
