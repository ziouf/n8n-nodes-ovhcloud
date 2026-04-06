/**
 * @brief DNS Zone DynHost Login resource operations
 *
 * Provides operations for managing DynHost logins:
 * - List: List all DynHost logins
 * - Get: Get a specific login
 * - Create: Create a new login
 * - Update: Update a login
 * - Delete: Delete a login
 * - Change Password: Change login password
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
import {
	execute as executeChangePassword,
	description as descriptionChangePassword,
} from './changePassword.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DynHost Login Operation',
			name: 'dnsZoneDynHostLoginOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Change Password', value: 'changePassword', action: 'Change login password' },
				{ name: 'Create', value: 'create', action: 'Create a new login' },
				{ name: 'Delete', value: 'delete', action: 'Delete a login' },
				{ name: 'Get', value: 'get', action: 'Get a specific login' },
				{ name: 'List', value: 'list', action: 'List all DynHost logins' },
				{ name: 'Update', value: 'update', action: 'Update a login' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostLoginOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostLoginOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostLoginOperation: ['create'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostLoginOperation: ['update'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostLoginOperation: ['delete'] },
		}),
		...descriptionChangePassword({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneDynHostLoginOperation: ['changePassword'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneDynHostLoginOperation', 0, {
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
		case 'changePassword':
			return await executeChangePassword.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneDynHostLogin"`);
}
