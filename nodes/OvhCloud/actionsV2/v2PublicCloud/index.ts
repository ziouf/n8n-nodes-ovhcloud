/**
 * @brief Public Cloud resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH Public Cloud services including:
 * - List all Public Cloud services
 * - Get detailed information about a specific Public Cloud service
 *
 * Available operations:
 * - `list`: List all Public Cloud services
 * - `get`: Get details of a specific Public Cloud service
 *
 * @remarks
 * Public Cloud services are managed under `/v2/publicCloud` route.
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
			displayName: 'Public Cloud Operation',
			name: 'v2PublicCloudOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Public Cloud services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Public Cloud service',
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
			show: { ...displayOptions?.show, v2PublicCloudOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2PublicCloudOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Public Cloud operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2PublicCloudOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2PublicCloud"`);
}
