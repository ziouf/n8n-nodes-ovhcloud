/**
 * @brief Service Consumption History resource operations
 *
 * Provides operations for retrieving service consumption history:
 * - List: List consumption history for a service
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
			displayName: 'Service Consumption History Operation',
			name: 'servicesServiceConsumptionHistoryOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List consumption history for a service',
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
			show: { ...displayOptions?.show, servicesServiceConsumptionHistoryOperation: ['list'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('servicesServiceConsumptionHistoryOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "serviceConsumptionHistory"`);
}
