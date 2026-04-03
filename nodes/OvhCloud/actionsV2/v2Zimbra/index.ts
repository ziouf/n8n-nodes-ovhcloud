/**
 * @brief Zimbra resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH Zimbra services including:
 * - List all Zimbra services
 * - Get detailed information about a specific Zimbra service
 *
 * Available operations:
 * - `list`: List all Zimbra services
 * - `get`: Get details of a specific Zimbra service
 *
 * @remarks
 * Zimbra services are managed under `/v2/zimbra` route.
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
			displayName: 'Zimbra Operation',
			name: 'v2ZimbraOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Zimbra services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Zimbra service',
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
			show: { ...displayOptions?.show, v2ZimbraOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2ZimbraOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Zimbra operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2ZimbraOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2Zimbra"`);
}
