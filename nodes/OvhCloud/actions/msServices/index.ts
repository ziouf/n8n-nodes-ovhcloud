/**
 * @brief MS Services resource operations for n8n node
 *
 * Provides operations for managing OVHcloud Microsoft services including:
 * - List all MS services for the authenticated account
 * - Get detailed information about a specific MS service
 *
 * Available operations:
 * - `list`: ListMsServices - List all MS services
 * - `get`: GetMsService - Get details of a specific MS service
 *
 * @remarks
 * MS services are managed under `/msServices` route.
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
			displayName: 'MS Services Operation',
			name: 'msServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all MS services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an MS service',
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
			show: { ...displayOptions?.show, msServicesOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected MS services operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('msServicesOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "msServices"`);
}
