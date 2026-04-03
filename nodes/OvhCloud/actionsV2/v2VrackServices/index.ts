/**
 * @brief vRack Services resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH vRack services including:
 * - List all vRack services
 * - Get detailed information about a specific vRack service
 *
 * Available operations:
 * - `list`: List all vRack services
 * - `get`: Get details of a specific vRack service
 *
 * @remarks
 * vRack services are managed under `/v2/vrackServices` route.
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
			displayName: 'vRack Services Operation',
			name: 'v2VrackServicesOperation',
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
					action: 'Get details of a vRack service',
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
			show: { ...displayOptions?.show, v2VrackServicesOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2VrackServicesOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected vRack services operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2VrackServicesOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2VrackServices"`);
}
