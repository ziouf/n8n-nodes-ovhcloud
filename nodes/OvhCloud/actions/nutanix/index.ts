/**
 * @brief Nutanix resource operations for n8n node
 *
 * Provides operations for managing OVHcloud Nutanix services including:
 * - List all Nutanix services for the authenticated account
 * - Get detailed information about a specific Nutanix service
 *
 * Available operations:
 * - `list`: ListNutanix - List all Nutanix services
 * - `get`: GetNutanix - Get details of a specific Nutanix service
 *
 * @remarks
 * Nutanix services are managed under `/nutanix` route.
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
			displayName: 'Nutanix Operation',
			name: 'nutanixOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Nutanix services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Nutanix service',
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
			show: { ...displayOptions?.show, nutanixOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Nutanix operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('nutanixOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "nutanix"`);
}
