/**
 * @brief Dedicated IP sub-resource operations for Dedicated server
 *
 * Provides operations for managing dedicated server IPs:
 * - List: List all IPs associated with a dedicated server
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
			displayName: 'Dedicated IP Operation',
			name: 'dedicatedIpOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all IPs for a dedicated server',
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
			show: { ...displayOptions?.show, dedicatedIpOperation: ['list'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedIpOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedIp"`);
}
