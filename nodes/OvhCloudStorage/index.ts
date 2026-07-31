import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeStorageListGet,
	description as descriptionStorageListGet,
} from './storageListGet.operation';
import {
	execute as executeStorageGetGet,
	description as descriptionStorageGetGet,
} from './storageGetGet.operation';
import {
	execute as executeStorageUpdatePut,
	description as descriptionStorageUpdatePut,
} from './storageUpdatePut.operation';
import {
	execute as executeStorageDeleteDelete,
	description as descriptionStorageDeleteDelete,
} from './storageDeleteDelete.operation';
import {
	execute as executeContainerListGet,
	description as descriptionContainerListGet,
} from './containerListGet.operation';
import {
	execute as executeContainerCreatePost,
	description as descriptionContainerCreatePost,
} from './containerCreatePost.operation';
import {
	execute as executeContainerGetGet,
	description as descriptionContainerGetGet,
} from './containerGetGet.operation';
import {
	execute as executeContainerUpdatePut,
	description as descriptionContainerUpdatePut,
} from './containerUpdatePut.operation';
import {
	execute as executeContainerDeleteDelete,
	description as descriptionContainerDeleteDelete,
} from './containerDeleteDelete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'storageOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List Storages',
				value: 'storageListGet',
				action: 'List all object storage services',
			},
			{
				name: 'Get Storage',
				value: 'storageGetGet',
				action: 'Get storage details',
			},
			{
				name: 'Update Storage',
				value: 'storageUpdatePut',
				action: 'Update storage details',
			},
			{
				name: 'Delete Storage',
				value: 'storageDeleteDelete',
				action: 'Delete an object storage service',
			},
			{
				name: 'List Containers',
				value: 'containerListGet',
				action: 'List containers in a storage',
			},
			{
				name: 'Create Container',
				value: 'containerCreatePost',
				action: 'Create a new container',
			},
			{
				name: 'Get Container',
				value: 'containerGetGet',
				action: 'Get container details',
			},
			{
				name: 'Update Container',
				value: 'containerUpdatePut',
				action: 'Update container metadata',
			},
			{
				name: 'Delete Container',
				value: 'containerDeleteDelete',
				action: 'Delete a container',
			},

			],
			default: 'storageListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionStorageListGet({
			...displayOptions,
			show: { storageOperation: ['storageListGet'] },
		}) as INodeProperties[]),
		...(descriptionStorageGetGet({
			...displayOptions,
			show: { storageOperation: ['storageGetGet'] },
		}) as INodeProperties[]),
		...(descriptionStorageUpdatePut({
			...displayOptions,
			show: { storageOperation: ['storageUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionStorageDeleteDelete({
			...displayOptions,
			show: { storageOperation: ['storageDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionContainerListGet({
			...displayOptions,
			show: { storageOperation: ['containerListGet'] },
		}) as INodeProperties[]),
		...(descriptionContainerCreatePost({
			...displayOptions,
			show: { storageOperation: ['containerCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionContainerGetGet({
			...displayOptions,
			show: { storageOperation: ['containerGetGet'] },
		}) as INodeProperties[]),
		...(descriptionContainerUpdatePut({
			...displayOptions,
			show: { storageOperation: ['containerUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionContainerDeleteDelete({
			...displayOptions,
			show: { storageOperation: ['containerDeleteDelete'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('storageOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'storageListGet':
			return executeStorageListGet.call(this, itemIndex);
		case 'storageGetGet':
			return executeStorageGetGet.call(this, itemIndex);
		case 'storageUpdatePut':
			return executeStorageUpdatePut.call(this, itemIndex);
		case 'storageDeleteDelete':
			return executeStorageDeleteDelete.call(this, itemIndex);
		case 'containerListGet':
			return executeContainerListGet.call(this, itemIndex);
		case 'containerCreatePost':
			return executeContainerCreatePost.call(this, itemIndex);
		case 'containerGetGet':
			return executeContainerGetGet.call(this, itemIndex);
		case 'containerUpdatePut':
			return executeContainerUpdatePut.call(this, itemIndex);
		case 'containerDeleteDelete':
			return executeContainerDeleteDelete.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudStorage"`);
}
