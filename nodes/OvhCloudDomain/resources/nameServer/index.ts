/**
 * @brief Name Server resource operations
 *
 * Provides operations for managing name servers:
 * - List: List all name servers
 * - Get: Get a specific name server
 * - Get Status: Get name server status
 * - Create: Create a new name server
 * - Delete: Delete a name server
 * - Update: Update name servers
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeGetStatus,
	description as descriptionGetStatus,
} from './getStatus.operation';
import { execute as executeCreate, description as descriptionCreate } from './create.operation';
import { execute as executeDelete, description as descriptionDelete } from './delete.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Name Server Operation',
			name: 'nameServerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Create', value: 'create', action: 'Create a new name server' },
				{ name: 'Delete', value: 'delete', action: 'Delete a name server' },
				{ name: 'Get', value: 'get', action: 'Get a specific name server' },
				{ name: 'Get Status', value: 'getStatus', action: 'Get name server status' },
				{ name: 'List', value: 'list', action: 'List all name servers' },
				{ name: 'Update', value: 'update', action: 'Update name servers' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, nameServerOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, nameServerOperation: ['get'] },
		}),
		...descriptionGetStatus({
			...displayOptions,
			show: { ...displayOptions?.show, nameServerOperation: ['getStatus'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, nameServerOperation: ['create'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, nameServerOperation: ['delete'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, nameServerOperation: ['update'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('nameServerOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getStatus':
			return await executeGetStatus.call(this);
		case 'create':
			return await executeCreate.call(this);
		case 'delete':
			return await executeDelete.call(this);
		case 'update':
			return await executeUpdate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "nameServer"`);
}
