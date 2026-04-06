/**
 * @brief vRack IPv6 sub-resource operations
 *
 * Provides operations for managing IPv6 blocks attached to a vRack:
 * - List: List all IPv6 blocks attached to the vRack
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IPv6 Operation',
			name: 'vrackIpv6Operation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all IPv6 blocks attached to the vRack',
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
			show: { ...displayOptions?.show, vrackIpv6Operation: ['list'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vrackIpv6Operation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vrackIpv6"`);
}
