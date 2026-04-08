/**
 * @brief DNS Zone Redirection resource operations
 *
 * Provides operations for managing DNS zone redirections:
 * - List: List all redirections
 * - Get: Get a specific redirection
 * - Create: Create a new redirection
 * - Update: Update a redirection
 * - Delete: Delete a redirection
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
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import { execute as executeDelete, description as descriptionDelete } from './delete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DNS Zone Redirection Operation',
			name: 'dnsZoneRedirectionOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Create', value: 'create', action: 'Create a new redirection' },
				{ name: 'Delete', value: 'delete', action: 'Delete a redirection' },
				{ name: 'Get', value: 'get', action: 'Get a specific redirection' },
				{ name: 'List', value: 'list', action: 'List all redirections' },
				{ name: 'Update', value: 'update', action: 'Update a redirection' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneRedirectionOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneRedirectionOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneRedirectionOperation: ['create'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneRedirectionOperation: ['update'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneRedirectionOperation: ['delete'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneRedirectionOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'create':
			return await executeCreate.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'delete':
			return await executeDelete.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneRedirection"`);
}
