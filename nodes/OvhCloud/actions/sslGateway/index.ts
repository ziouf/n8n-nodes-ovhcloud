/**
 * @brief SSL Gateway resource operations for n8n node
 *
 * Provides operations for managing OVHcloud SSL Gateway services including:
 * - List all SSL Gateway services for the authenticated account
 * - Get detailed information about a specific SSL Gateway service
 *
 * Available operations:
 * - `list`: ListSslGateways - List all SSL Gateway services
 * - `get`: GetSslGateway - Get details of a specific SSL Gateway service
 *
 * @remarks
 * SSL Gateway services are managed under `/sslGateway` route.
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
			displayName: 'SSL Gateway Operation',
			name: 'sslGatewayOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all SSL Gateway services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an SSL Gateway service',
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
			show: { ...displayOptions?.show, sslGatewayOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, sslGatewayOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected SSL Gateway operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('sslGatewayOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "sslGateway"`);
}
