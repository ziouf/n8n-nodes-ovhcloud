/**
 * @brief vRack resource operations for n8n node
 *
 * Provides operations for managing OVH vRack services including:
 * - List all vRack services for the authenticated account
 * - Get detailed information about a specific vRack
 *
 * Available operations:
 * - `list`: ListVRacks - List all vRack services
 * - `get`: GetVRack - Get details of a specific vRack
 *
 * @remarks
 * vRack services are managed under `/vrack` route.
 * vRack name can be entered manually.
 *
 * @example
 * // Configure in n8n node
 * Resource: vRack
 * Operation: List
 * Output: Array of vRack service names
 *
 * @example
 * // Get specific vRack details
 * // Resource: vRack -> Get
 * // vrackName = 'vrack-xxxxx'
 * // Output: vRack details with name, description, etc.
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
			displayName: 'vRack Operation',
			name: 'vrackOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all vRack services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a vRack',
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
			show: { ...displayOptions?.show, vrackOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, vrackOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected vRack operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vrackOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vrack"`);
}
