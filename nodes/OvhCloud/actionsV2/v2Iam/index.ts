/**
 * @brief IAM resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH IAM resources including:
 * - List all IAM resources
 * - Get detailed information about a specific IAM resource
 *
 * Available operations:
 * - `list`: List all IAM resources
 * - `get`: Get details of a specific IAM resource
 *
 * @remarks
 * IAM resources are managed under `/v2/iam` route.
 * Resource ID can be entered manually or selected from dynamic dropdown.
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
			displayName: 'IAM Operation',
			name: 'v2IamOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all IAM resources',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an IAM resource',
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
			show: { ...displayOptions?.show, v2IamOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2IamOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected IAM operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2IamOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2Iam"`);
}
