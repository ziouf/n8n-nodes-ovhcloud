/**
 * @brief Dedicated Hardware sub-resource operations for Dedicated server
 *
 * Provides operations for retrieving dedicated server hardware information:
 * - Get: Get hardware details of a dedicated server
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
			displayName: 'Dedicated Hardware Operation',
			name: 'dedicatedHardwareOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get hardware details of a dedicated server',
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
			show: { ...displayOptions?.show, dedicatedHardwareOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedHardwareOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedHardware"`);
}
