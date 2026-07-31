import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executePublicCloudprojectListGet,
	description as descriptionPublicCloudprojectListGet,
} from './publicCloudprojectListGet.operation';
import {
	execute as executePublicCloudprojectListGet2,
	description as descriptionPublicCloudprojectListGet2,
} from './publicCloudprojectListGet2.operation';
import {
	execute as executePublicCloudprojectrancherListGet,
	description as descriptionPublicCloudprojectrancherListGet,
} from './publicCloudprojectrancherListGet.operation';
import {
	execute as executePublicCloudprojectrancherCreatePost,
	description as descriptionPublicCloudprojectrancherCreatePost,
} from './publicCloudprojectrancherCreatePost.operation';
import {
	execute as executePublicCloudprojectrancherDeleteDelete,
	description as descriptionPublicCloudprojectrancherDeleteDelete,
} from './publicCloudprojectrancherDeleteDelete.operation';
import {
	execute as executePublicCloudprojectrancherListGet2,
	description as descriptionPublicCloudprojectrancherListGet2,
} from './publicCloudprojectrancherListGet2.operation';
import {
	execute as executePublicCloudprojectrancherUpdatePut,
	description as descriptionPublicCloudprojectrancherUpdatePut,
} from './publicCloudprojectrancherUpdatePut.operation';
import {
	execute as executePublicCloudprojectrancheradminCredentialsCreatePost,
	description as descriptionPublicCloudprojectrancheradminCredentialsCreatePost,
} from './publicCloudprojectrancheradminCredentialsCreatePost.operation';
import {
	execute as executePublicCloudprojectranchercapabilitiesplanListGet,
	description as descriptionPublicCloudprojectranchercapabilitiesplanListGet,
} from './publicCloudprojectranchercapabilitiesplanListGet.operation';
import {
	execute as executePublicCloudprojectranchercapabilitiesversionListGet,
	description as descriptionPublicCloudprojectranchercapabilitiesversionListGet,
} from './publicCloudprojectranchercapabilitiesversionListGet.operation';
import {
	execute as executePublicCloudprojectranchereventListGet,
	description as descriptionPublicCloudprojectranchereventListGet,
} from './publicCloudprojectranchereventListGet.operation';
import {
	execute as executePublicCloudprojectranchertaskListGet,
	description as descriptionPublicCloudprojectranchertaskListGet,
} from './publicCloudprojectranchertaskListGet.operation';
import {
	execute as executePublicCloudprojectranchertaskListGet2,
	description as descriptionPublicCloudprojectranchertaskListGet2,
} from './publicCloudprojectranchertaskListGet2.operation';
import {
	execute as executePublicCloudprojectreferencerancherplanListGet,
	description as descriptionPublicCloudprojectreferencerancherplanListGet,
} from './publicCloudprojectreferencerancherplanListGet.operation';
import {
	execute as executePublicCloudprojectreferencerancherversionListGet,
	description as descriptionPublicCloudprojectreferencerancherversionListGet,
} from './publicCloudprojectreferencerancherversionListGet.operation';
import {
	execute as executePublicCloudreferencerancherplanListGet,
	description as descriptionPublicCloudreferencerancherplanListGet,
} from './publicCloudreferencerancherplanListGet.operation';
import {
	execute as executePublicCloudreferencerancherversionListGet,
	description as descriptionPublicCloudreferencerancherversionListGet,
} from './publicCloudreferencerancherversionListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'publicCloudOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List all Public Cloud projects',
				value: 'publicCloudprojectListGet',
				action: 'List all Public Cloud projects',
			},
			{
				name: 'Get details on a Public Cloud project',
				value: 'publicCloudprojectListGet2',
				action: 'Get details on a Public Cloud project',
			},
			{
				name: 'List managed Rancher services',
				value: 'publicCloudprojectrancherListGet',
				action: 'List managed Rancher services',
			},
			{
				name: 'Create a new managed Rancher service',
				value: 'publicCloudprojectrancherCreatePost',
				action: 'Create a new managed Rancher service',
			},
			{
				name: 'Delete a managed Rancher service',
				value: 'publicCloudprojectrancherDeleteDelete',
				action: 'Delete a managed Rancher service',
			},
			{
				name: 'Get a managed Rancher service',
				value: 'publicCloudprojectrancherListGet2',
				action: 'Get a managed Rancher service',
			},
			{
				name: 'Update an existing managed Rancher service',
				value: 'publicCloudprojectrancherUpdatePut',
				action: 'Update an existing managed Rancher service',
			},
			{
				name: 'Reset the admin password',
				value: 'publicCloudprojectrancheradminCredentialsCreatePost',
				action: 'Reset the admin password',
			},
			{
				name: 'List available and current plans for the given managed Rancher service',
				value: 'publicCloudprojectranchercapabilitiesplanListGet',
				action: 'List available and current plans for the given managed Rancher service',
			},
			{
				name: 'List available and current versions for the given managed Rancher service',
				value: 'publicCloudprojectranchercapabilitiesversionListGet',
				action: 'List available and current versions for the given managed Rancher service',
			},
			{
				name: 'List all events related to the managed Rancher service',
				value: 'publicCloudprojectranchereventListGet',
				action: 'List all events related to the managed Rancher service',
			},
			{
				name: 'List all asynchronous operations related to the managed Rancher service',
				value: 'publicCloudprojectranchertaskListGet',
				action: 'List all asynchronous operations related to the managed Rancher service',
			},
			{
				name: 'Get a specific task related to the managed Rancher service',
				value: 'publicCloudprojectranchertaskListGet2',
				action: 'Get a specific task related to the managed Rancher service',
			},
			{
				name: 'List available plans for creating a managed Rancher service',
				value: 'publicCloudprojectreferencerancherplanListGet',
				action: 'List available plans for creating a managed Rancher service',
			},
			{
				name: 'List available versions for creating a managed Rancher service',
				value: 'publicCloudprojectreferencerancherversionListGet',
				action: 'List available versions for creating a managed Rancher service',
			},
			{
				name: 'List available plans for creating a managed Rancher service',
				value: 'publicCloudreferencerancherplanListGet',
				action: 'List available plans for creating a managed Rancher service',
			},
			{
				name: 'List available versions for creating a managed Rancher service',
				value: 'publicCloudreferencerancherversionListGet',
				action: 'List available versions for creating a managed Rancher service',
			},

			],
			default: 'publicCloudprojectListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionPublicCloudprojectListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectListGet2({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectListGet2'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectrancherListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectrancherListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectrancherCreatePost({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectrancherCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectrancherDeleteDelete({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectrancherDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectrancherListGet2({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectrancherListGet2'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectrancherUpdatePut({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectrancherUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectrancheradminCredentialsCreatePost({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectrancheradminCredentialsCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectranchercapabilitiesplanListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectranchercapabilitiesplanListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectranchercapabilitiesversionListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectranchercapabilitiesversionListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectranchereventListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectranchereventListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectranchertaskListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectranchertaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectranchertaskListGet2({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectranchertaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectreferencerancherplanListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectreferencerancherplanListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudprojectreferencerancherversionListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudprojectreferencerancherversionListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudreferencerancherplanListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudreferencerancherplanListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicCloudreferencerancherversionListGet({
			...displayOptions,
			show: { publicCloudOperation: ['publicCloudreferencerancherversionListGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('publicCloudOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'publicCloudprojectListGet':
			return executePublicCloudprojectListGet.call(this, itemIndex);
		case 'publicCloudprojectListGet2':
			return executePublicCloudprojectListGet2.call(this, itemIndex);
		case 'publicCloudprojectrancherListGet':
			return executePublicCloudprojectrancherListGet.call(this, itemIndex);
		case 'publicCloudprojectrancherCreatePost':
			return executePublicCloudprojectrancherCreatePost.call(this, itemIndex);
		case 'publicCloudprojectrancherDeleteDelete':
			return executePublicCloudprojectrancherDeleteDelete.call(this, itemIndex);
		case 'publicCloudprojectrancherListGet2':
			return executePublicCloudprojectrancherListGet2.call(this, itemIndex);
		case 'publicCloudprojectrancherUpdatePut':
			return executePublicCloudprojectrancherUpdatePut.call(this, itemIndex);
		case 'publicCloudprojectrancheradminCredentialsCreatePost':
			return executePublicCloudprojectrancheradminCredentialsCreatePost.call(this, itemIndex);
		case 'publicCloudprojectranchercapabilitiesplanListGet':
			return executePublicCloudprojectranchercapabilitiesplanListGet.call(this, itemIndex);
		case 'publicCloudprojectranchercapabilitiesversionListGet':
			return executePublicCloudprojectranchercapabilitiesversionListGet.call(this, itemIndex);
		case 'publicCloudprojectranchereventListGet':
			return executePublicCloudprojectranchereventListGet.call(this, itemIndex);
		case 'publicCloudprojectranchertaskListGet':
			return executePublicCloudprojectranchertaskListGet.call(this, itemIndex);
		case 'publicCloudprojectranchertaskListGet2':
			return executePublicCloudprojectranchertaskListGet2.call(this, itemIndex);
		case 'publicCloudprojectreferencerancherplanListGet':
			return executePublicCloudprojectreferencerancherplanListGet.call(this, itemIndex);
		case 'publicCloudprojectreferencerancherversionListGet':
			return executePublicCloudprojectreferencerancherversionListGet.call(this, itemIndex);
		case 'publicCloudreferencerancherplanListGet':
			return executePublicCloudreferencerancherplanListGet.call(this, itemIndex);
		case 'publicCloudreferencerancherversionListGet':
			return executePublicCloudreferencerancherversionListGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudPublicCloudV2"`);
}
