/**
 * @brief Service resource operations for n8n node
 *
 * Provides operations for managing OVHcloud services including:
 * - List all services
 * - Get service details
 * - Update service
 * - List possible renews
 * - Create renew order
 * - Reopen suspended service
 * - Suspend service
 * - Terminate service
 *
 * Available operations:
 * - `list`: ListServices - List all services
 * - `get`: GetService - Get service details
 * - `update`: UpdateService - Update service
 * - `listRenews`: ListRenews - List possible renews
 * - `createRenew`: CreateRenew - Create renew order
 * - `reopen`: ReopenService - Reopen suspended service
 * - `suspend`: SuspendService - Suspend service
 * - `terminate`: TerminateService - Terminate service
 *
 * @remarks
 * Services are managed under `/service` route.
 * Service ID can be entered manually.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import {
	execute as executeListRenews,
	description as descriptionListRenews,
} from './listRenews.operation';
import {
	execute as executeCreateRenew,
	description as descriptionCreateRenew,
} from './createRenew.operation';
import { execute as executeReopen, description as descriptionReopen } from './reopen.operation';
import { execute as executeSuspend, description as descriptionSuspend } from './suspend.operation';
import {
	execute as executeTerminate,
	description as descriptionTerminate,
} from './terminate.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Service Operation',
			name: 'serviceOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create Renew',
					value: 'createRenew',
					action: 'Create a renew order',
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
					name: 'Reopen',
					value: 'reopen',
					action: 'Reopen a suspended service',
				},
				{
					name: 'Suspend',
					value: 'suspend',
					action: 'Suspend a service',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate a suspended service',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['update'] },
		}),
		...descriptionListRenews({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['listRenews'] },
		}),
		...descriptionCreateRenew({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['createRenew'] },
		}),
		...descriptionReopen({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['reopen'] },
		}),
		...descriptionSuspend({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['suspend'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['terminate'] },
		}),
	];
}

/**
 * Executes the selected service operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('serviceOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'listRenews':
			return await executeListRenews.call(this);
		case 'createRenew':
			return await executeCreateRenew.call(this);
		case 'reopen':
			return await executeReopen.call(this);
		case 'suspend':
			return await executeSuspend.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "service"`);
}
