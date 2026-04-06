/**
 * @brief DNS Zone History resource operations
 *
 * Provides operations for managing DNS zone history:
 * - List: List all history entries
 * - Get: Get a specific history entry
 * - Restore: Restore zone from history
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeRestore, description as descriptionRestore } from './restore.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DNS Zone History Operation',
			name: 'dnsZoneHistoryOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all history entries' },
				{ name: 'Get', value: 'get', action: 'Get a specific history entry' },
				{ name: 'Restore', value: 'restore', action: 'Restore zone from history' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneHistoryOperation: ['list'] } }),
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneHistoryOperation: ['get'] } }),
		...descriptionRestore({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneHistoryOperation: ['restore'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneHistoryOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'restore':
			return await executeRestore.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneHistory"`);
}
