import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeServicesListGet,
	description as descriptionServicesListGet,
} from './servicesListGet.operation';
import {
	execute as executeServicesGetGet,
	description as descriptionServicesGetGet,
} from './servicesGetGet.operation';
import {
	execute as executeServicesUpdatePut,
	description as descriptionServicesUpdatePut,
} from './servicesUpdatePut.operation';
import {
	execute as executeServicesDeleteDelete,
	description as descriptionServicesDeleteDelete,
} from './servicesDeleteDelete.operation';
import {
	execute as executeReinstallPost,
	description as descriptionReinstallPost,
} from './reinstallPost.operation';
import {
	execute as executeTaskListGet,
	description as descriptionTaskListGet,
} from './taskListGet.operation';
import {
	execute as executeTaskGetGet,
	description as descriptionTaskGetGet,
} from './taskGetGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'servicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List Services',
				value: 'servicesListGet',
				action: 'List all generic services',
			},
			{
				name: 'Get Service',
				value: 'servicesGetGet',
				action: 'Get service details',
			},
			{
				name: 'Update Service',
				value: 'servicesUpdatePut',
				action: 'Update service details',
			},
			{
				name: 'Delete Service',
				value: 'servicesDeleteDelete',
				action: 'Delete a service',
			},
			{
				name: 'Reinstall Service',
				value: 'reinstallPost',
				action: 'Reinstall a service',
			},
			{
				name: 'List Tasks',
				value: 'taskListGet',
				action: 'List tasks for a service',
			},
			{
				name: 'Get Task',
				value: 'taskGetGet',
				action: 'Get task details',
			},

			],
			default: 'servicesListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionServicesListGet({
			...displayOptions,
			show: { servicesOperation: ['servicesListGet'] },
		}) as INodeProperties[]),
		...(descriptionServicesGetGet({
			...displayOptions,
			show: { servicesOperation: ['servicesGetGet'] },
		}) as INodeProperties[]),
		...(descriptionServicesUpdatePut({
			...displayOptions,
			show: { servicesOperation: ['servicesUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionServicesDeleteDelete({
			...displayOptions,
			show: { servicesOperation: ['servicesDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionReinstallPost({
			...displayOptions,
			show: { servicesOperation: ['reinstallPost'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { servicesOperation: ['taskListGet'] },
		}) as INodeProperties[]),
		...(descriptionTaskGetGet({
			...displayOptions,
			show: { servicesOperation: ['taskGetGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('servicesOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'servicesListGet':
			return executeServicesListGet.call(this, itemIndex);
		case 'servicesGetGet':
			return executeServicesGetGet.call(this, itemIndex);
		case 'servicesUpdatePut':
			return executeServicesUpdatePut.call(this, itemIndex);
		case 'servicesDeleteDelete':
			return executeServicesDeleteDelete.call(this, itemIndex);
		case 'reinstallPost':
			return executeReinstallPost.call(this, itemIndex);
		case 'taskListGet':
			return executeTaskListGet.call(this, itemIndex);
		case 'taskGetGet':
			return executeTaskGetGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudServices"`);
}
