/**
 * @brief IP Load Balancing resource operations for n8n node
 *
 * Provides operations for managing OVH IP Load Balancers including:
 * - List all IP Load Balancers for the authenticated account
 * - Get detailed information about a specific IP Load Balancer
 *
 * Available operations:
 * - `list`: List all IP Load Balancers
 * - `get`: Get details of a specific IP Load Balancer
 *
 * @remarks
 * IP Load Balancers are managed under `/ipLoadbalancing` route.
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
			displayName: 'IP Load Balancing Operation',
			name: 'ipLoadbalancingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all IP Load Balancers',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an IP Load Balancer',
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
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected IP Load Balancing operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipLoadbalancingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipLoadbalancing"`);
}
