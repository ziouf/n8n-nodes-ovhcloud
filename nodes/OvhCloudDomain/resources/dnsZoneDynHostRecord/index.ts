/**
 * @brief DNS Zone DynHost Record resource operations
 *
 * Provides operations for managing DynHost records:
 * - List: List all DynHost records
 * - Get: Get a specific record
 * - Create: Create a new record
 * - Update: Update a record
 * - Delete: Delete a record
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
			displayName: 'DynHost Record Operation',
			name: 'dnsZoneDynHostRecordOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Create', value: 'create', action: 'Create a new record' },
				{ name: 'Delete', value: 'delete', action: 'Delete a record' },
				{ name: 'Get', value: 'get', action: 'Get a specific record' },
				{ name: 'List', value: 'list', action: 'List all DynHost records' },
				{ name: 'Update', value: 'update', action: 'Update a record' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostRecordOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostRecordOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostRecordOperation: ['create'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostRecordOperation: ['update'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostRecordOperation: ['delete'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneDynHostRecordOperation', 0, {
		extractValue: true,
	});

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

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneDynHostRecord"`);
}
