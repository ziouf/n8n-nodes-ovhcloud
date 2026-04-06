/**
 * @brief DNS Zone Option resource operations
 *
 * Provides operations for managing DNS zone options:
 * - List: List all options
 * - Get: Get a specific option
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
			displayName: 'DNS Zone Option Operation',
			name: 'dnsZoneOptionOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all options' },
				{ name: 'Get', value: 'get', action: 'Get a specific option' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneOptionOperation: ['list'] } }),
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneOptionOperation: ['get'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneOptionOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneOption"`);
}
