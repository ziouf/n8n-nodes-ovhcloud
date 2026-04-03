/**
 * @brief DedicatedHousing resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Housing services including:
 * - List all Dedicated Housing services for the authenticated account
 * - Get detailed information about a specific Dedicated Housing service
 *
 * Available operations:
 * - `list`: ListDedicatedHousingServices - List all Dedicated Housing services
 * - `get`: GetDedicatedHousingService - Get details of a specific Dedicated Housing service
 *
 * @remarks
 * Dedicated Housing services are managed under `/dedicated/housing` route.
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
			displayName: 'Dedicated Housing Operation',
			name: 'dedicatedHousingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Housing services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Housing service',
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
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Housing operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedHousingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedHousing"`);
}
