/**
 * @brief OverTheBox resource operations for n8n node
 *
 * Provides operations for managing OVHcloud OverTheBox services including:
 * - List all OverTheBox services for the authenticated account
 * - Get detailed information about a specific OverTheBox service
 *
 * Available operations:
 * - `list`: ListOverTheBox - List all OverTheBox services
 * - `get`: GetOverTheBox - Get details of a specific OverTheBox service
 *
 * @remarks
 * OverTheBox services are managed under `/overTheBox` route.
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
			displayName: 'OverTheBox Operation',
			name: 'overTheBoxOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all OverTheBox services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an OverTheBox service',
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
			show: { ...displayOptions?.show, overTheBoxOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected OverTheBox operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('overTheBoxOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "overTheBox"`);
}
