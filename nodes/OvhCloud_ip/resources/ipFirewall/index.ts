/**
 * @brief IP Firewall sub-resource operations for IP resource
 *
 * Provides operations for managing IP firewall rules:
 * - List: List all firewall rules for an IP block
 * - Get: Get details of a specific firewall rule
 *
 * Available operations:
 * - `list`: List all firewall rules
 * - `get`: Get details of a specific firewall rule
 *
 * @remarks
 * Firewall rules are managed under `/ip/{ip}/firewall` route.
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
			displayName: 'IP Firewall Operation',
			name: 'ipFirewallOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all firewall rules',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a firewall rule',
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
			show: { ...displayOptions?.show, ipFirewallOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipFirewallOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected IP Firewall operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipFirewallOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipFirewall"`);
}
