/**
 * @brief Domain Option resource operations
 *
 * Provides operations for managing domain options:
 * - List: List domain options
 * - Get: Get a specific option
 * - Delete: Delete an option
 * - Get All: Get all available options
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeDelete, description as descriptionDelete } from './delete.operation';
import { execute as executeGetAll, description as descriptionGetAll } from './getAll.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Domain Option Operation',
			name: 'domainOptionOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List domain options' },
				{ name: 'Get', value: 'get', action: 'Get a specific option' },
				{ name: 'Delete', value: 'delete', action: 'Delete an option' },
				{ name: 'Get Many', value: 'getAll', action: 'Get all available options' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({ ...displayOptions, show: { ...displayOptions?.show, domainOptionOperation: ['list'] } }),
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, domainOptionOperation: ['get'] } }),
		...descriptionDelete({ ...displayOptions, show: { ...displayOptions?.show, domainOptionOperation: ['delete'] } }),
		...descriptionGetAll({ ...displayOptions, show: { ...displayOptions?.show, domainOptionOperation: ['getAll'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainOptionOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'delete':
			return await executeDelete.call(this);
		case 'getAll':
			return await executeGetAll.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "domainOption"`);
}
