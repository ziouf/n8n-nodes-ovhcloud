/**
 * @brief Metrics resource operations for n8n node
 *
 * Provides operations for managing OVHcloud metrics including:
 * - List all metrics services for the authenticated account
 * - Get detailed information about a specific metrics service
 *
 * Available operations:
 * - `list`: ListMetrics - List all metrics services
 * - `get`: GetMetrics - Get details of a specific metrics service
 *
 * @remarks
 * Metrics services are managed under `/metrics` route.
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
			displayName: 'Metrics Operation',
			name: 'metricsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all metrics services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a metrics service',
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
			show: { ...displayOptions?.show, metricsOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected metrics operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('metricsOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "metrics"`);
}
