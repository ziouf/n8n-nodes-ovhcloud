/**
 * @brief IP Firewall Rule sub-resource operations for IP resource
 *
 * Provides operations for managing firewall rules.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeCreate, description as descriptionCreate } from './create.operation';
import { execute as executeDelete, description as descriptionDelete } from './delete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Firewall Rule Operation',
			name: 'ipFirewallRuleOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List firewall rules',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get firewall rule details',
				},
				{
					name: 'Create',
					value: 'create',
					action: 'Create firewall rule',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete firewall rule',
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
			show: { ...displayOptions?.show, ipFirewallRuleOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipFirewallRuleOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipFirewallRuleOperation: ['create'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipFirewallRuleOperation: ['delete'] },
		}),
	];
}

/**
 * Executes the selected IP Firewall Rule operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipFirewallRuleOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'create':
			return await executeCreate.call(this);
		case 'delete':
			return await executeDelete.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipFirewallRule"`);
}
