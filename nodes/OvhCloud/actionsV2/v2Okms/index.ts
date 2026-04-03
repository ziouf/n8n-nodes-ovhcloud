/**
 * @brief OKMS resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH OKMS (OVH Key Management Service) including:
 * - List all OKMS keys
 * - Get detailed information about a specific OKMS key
 *
 * Available operations:
 * - `list`: List all OKMS keys
 * - `get`: Get details of a specific OKMS key
 *
 * @remarks
 * OKMS keys are managed under `/v2/okms` route.
 * Key ID can be entered manually or selected from dynamic dropdown.
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
			displayName: 'OKMS Operation',
			name: 'v2OkmsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all OKMS keys',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an OKMS key',
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
			show: { ...displayOptions?.show, v2OkmsOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, v2OkmsOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected OKMS operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('v2OkmsOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "v2Okms"`);
}
