import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import { execute as executeSuspend, description as descriptionSuspend } from './suspend.operation';
import {
	execute as executeTerminate,
	description as descriptionTerminate,
} from './terminate.operation';
import {
	execute as executeReopenService,
	description as descriptionReopenService,
} from './reopen.operation';
import {
	execute as executeCreateRenew,
	description as descriptionCreateRenew,
} from './createRenew.operation';
import {
	execute as executeListRenews,
	description as descriptionListRenews,
} from './listRenews.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'serviceOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create Renew Order',
					value: 'createRenew',
					action: 'Create a renew order for a service',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get service details',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all services',
				},
				{
					name: 'List Renews',
					value: 'listRenews',
					action: 'List possible renews for a service',
				},
				{
					name: 'Reopen Service',
					value: 'reopenService',
					action: 'Reopen a suspended service',
				},
				{
					name: 'Suspend Service',
					value: 'suspend',
					action: 'Suspend a service',
				},
				{
					name: 'Terminate Service',
					value: 'terminate',
					action: 'Terminate a suspended service (irreversible)',
				},
				{
					name: 'Update Service',
					value: 'updateService',
					action: "Modify a service's properties",
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionCreateRenew({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['createRenew'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['get'] },
		}),
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['list'] },
		}),
		...descriptionListRenews({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['listRenews'] },
		}),
		...descriptionReopenService({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['reopenService'] },
		}),
		...descriptionSuspend({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['suspend'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['terminate'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['updateService'] },
		}),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('serviceOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'createRenew':
			return await executeCreateRenew.call(this);
		case 'get':
			return await executeGet.call(this, itemIndex);
		case 'list':
			return await executeList.call(this, itemIndex);
		case 'listRenews':
			return await executeListRenews.call(this, itemIndex);
		case 'reopenService':
			return await executeReopenService.call(this);
		case 'suspend':
			return await executeSuspend.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
		case 'updateService':
			return await executeUpdate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "service"`);
}
