/**
 * @brief Secret resource operations for n8n node
 *
 * Provides operations for managing OVHcloud secrets including:
 * - List all secret services for the authenticated account
 * - Get detailed information about a specific secret service
 *
 * Available operations:
 * - `list`: ListSecrets - List all secret services
 * - `get`: GetSecret - Get details of a specific secret service
 *
 * @remarks
 * Secret services are managed under `/secret` route.
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
			displayName: 'Secret Operation',
			name: 'secretOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all secret services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a secret service',
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
			show: { ...displayOptions?.show, secretOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, secretOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected secret operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('secretOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "secret"`);
}
