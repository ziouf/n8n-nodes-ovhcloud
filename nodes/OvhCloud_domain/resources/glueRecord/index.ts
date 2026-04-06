/**
 * @brief Glue Record resource operations
 *
 * Provides operations for managing glue records:
 * - List: List all glue records
 * - Get: Get a specific glue record
 * - Create: Create a new glue record
 * - Update: Update a glue record
 * - Delete: Delete a glue record
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
			displayName: 'Glue Record Operation',
			name: 'glueRecordOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Create', value: 'create', action: 'Create a new glue record' },
				{ name: 'Delete', value: 'delete', action: 'Delete a glue record' },
				{ name: 'Get', value: 'get', action: 'Get a specific glue record' },
				{ name: 'List', value: 'list', action: 'List all glue records' },
				{ name: 'Update', value: 'update', action: 'Update a glue record' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, glueRecordOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, glueRecordOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, glueRecordOperation: ['create'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, glueRecordOperation: ['update'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, glueRecordOperation: ['delete'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('glueRecordOperation', 0, { extractValue: true });

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

	throw new Error(`Unsupported operation "${operation}" for resource "glueRecord"`);
}
