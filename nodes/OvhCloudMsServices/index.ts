import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeMsServicesListGet,
	description as descriptionMsServicesListGet,
} from './msServicesListGet.operation';
import {
	execute as executeMsServicesGetGet,
	description as descriptionMsServicesGetGet,
} from './msServicesGetGet.operation';
import {
	execute as executeMsServicesUpdatePut,
	description as descriptionMsServicesUpdatePut,
} from './msServicesUpdatePut.operation';
import {
	execute as executeMsServicesDeleteDelete,
	description as descriptionMsServicesDeleteDelete,
} from './msServicesDeleteDelete.operation';
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
			name: 'msServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List MS Services',
				value: 'msServicesListGet',
				action: 'List all MS services',
			},
			{
				name: 'Get MS Service',
				value: 'msServicesGetGet',
				action: 'Get MS service details',
			},
			{
				name: 'Update MS Service',
				value: 'msServicesUpdatePut',
				action: 'Update MS service details',
			},
			{
				name: 'Delete MS Service',
				value: 'msServicesDeleteDelete',
				action: 'Delete an MS service',
			},
			{
				name: 'Reinstall MS Service',
				value: 'reinstallPost',
				action: 'Reinstall an MS service',
			},
			{
				name: 'List Tasks',
				value: 'taskListGet',
				action: 'List tasks for an MS service',
			},
			{
				name: 'Get Task',
				value: 'taskGetGet',
				action: 'Get task details',
			},

			],
			default: 'msServicesListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionMsServicesListGet({
			...displayOptions,
			show: { msServicesOperation: ['msServicesListGet'] },
		}) as INodeProperties[]),
		...(descriptionMsServicesGetGet({
			...displayOptions,
			show: { msServicesOperation: ['msServicesGetGet'] },
		}) as INodeProperties[]),
		...(descriptionMsServicesUpdatePut({
			...displayOptions,
			show: { msServicesOperation: ['msServicesUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionMsServicesDeleteDelete({
			...displayOptions,
			show: { msServicesOperation: ['msServicesDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionReinstallPost({
			...displayOptions,
			show: { msServicesOperation: ['reinstallPost'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { msServicesOperation: ['taskListGet'] },
		}) as INodeProperties[]),
		...(descriptionTaskGetGet({
			...displayOptions,
			show: { msServicesOperation: ['taskGetGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('msServicesOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'msServicesListGet':
			return executeMsServicesListGet.call(this, itemIndex);
		case 'msServicesGetGet':
			return executeMsServicesGetGet.call(this, itemIndex);
		case 'msServicesUpdatePut':
			return executeMsServicesUpdatePut.call(this, itemIndex);
		case 'msServicesDeleteDelete':
			return executeMsServicesDeleteDelete.call(this, itemIndex);
		case 'reinstallPost':
			return executeReinstallPost.call(this, itemIndex);
		case 'taskListGet':
			return executeTaskListGet.call(this, itemIndex);
		case 'taskGetGet':
			return executeTaskGetGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudMsServices"`);
}
