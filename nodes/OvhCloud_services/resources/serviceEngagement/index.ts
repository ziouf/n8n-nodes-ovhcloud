/**
 * @brief Service Engagement resource operations
 *
 * Provides operations for retrieving service billing engagement details:
 * - Get: Get billing engagement for a service
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Service Engagement Operation',
			name: 'servicesServiceEngagementOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get billing engagement for a service',
				},
			],
			default: 'get',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, servicesServiceEngagementOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('servicesServiceEngagementOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "serviceEngagement"`);
}
