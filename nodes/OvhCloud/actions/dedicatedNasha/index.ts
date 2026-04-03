/**
 * @brief DedicatedNasha resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Nasha services including:
 * - List all Dedicated Nasha services for the authenticated account
 * - Get detailed information about a specific Dedicated Nasha service
 *
 * Available operations:
 * - `list`: ListDedicatedNashaServices - List all Dedicated Nasha services
 * - `get`: GetDedicatedNashaService - Get details of a specific Dedicated Nasha service
 *
 * @remarks
 * Dedicated Nasha services are managed under `/dedicated/nasha` route.
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
			displayName: 'Dedicated Nasha Operation',
			name: 'dedicatedNashaOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Nasha services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Nasha service',
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
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Nasha operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedNashaOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedNasha"`);
}
