/**
 * @brief vRack Dedicated Server sub-resource operations
 *
 * Provides operations for managing dedicated servers attached to a vRack:
 * - List: List all dedicated servers attached to the vRack
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
			displayName: 'Dedicated Server Operation',
			name: 'vrackDedicatedServerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all dedicated servers attached to the vRack',
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
			show: { ...displayOptions?.show, vrackDedicatedServerOperation: ['list'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vrackDedicatedServerOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vrackDedicatedServer"`);
}
