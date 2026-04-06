/**
 * @brief DNS Zone Task resource operations
 *
 * Provides operations for managing DNS zone tasks:
 * - List: List all tasks
 * - Get: Get a specific task
 * - Accelerate: Accelerate a task
 * - Cancel: Cancel a task
 * - Relaunch: Relaunch a task
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
	execute as executeAccelerate,
	description as descriptionAccelerate,
} from './accelerate.operation';
import { execute as executeCancel, description as descriptionCancel } from './cancel.operation';
import {
	execute as executeRelaunch,
	description as descriptionRelaunch,
} from './relaunch.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DNS Zone Task Operation',
			name: 'dnsZoneTaskOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Accelerate', value: 'accelerate', action: 'Accelerate a task' },
				{ name: 'Cancel', value: 'cancel', action: 'Cancel a task' },
				{ name: 'Get', value: 'get', action: 'Get a specific task' },
				{ name: 'List', value: 'list', action: 'List all tasks' },
				{ name: 'Relaunch', value: 'relaunch', action: 'Relaunch a task' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneTaskOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneTaskOperation: ['get'] },
		}),
		...descriptionAccelerate({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneTaskOperation: ['accelerate'] },
		}),
		...descriptionCancel({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneTaskOperation: ['cancel'] },
		}),
		...descriptionRelaunch({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneTaskOperation: ['relaunch'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneTaskOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'accelerate':
			return await executeAccelerate.call(this);
		case 'cancel':
			return await executeCancel.call(this);
		case 'relaunch':
			return await executeRelaunch.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneTask"`);
}
