/**
 * @brief SSL resource operations for n8n node
 *
 * Provides operations for managing OVH SSL services including:
 * - List all SSL services
 * - Get SSL service details
 * - Get service information
 * - Update service information
 * - List tasks
 * - Get task details
 *
 * Available operations:
 * - `list`: ListSSL - List all SSL services
 * - `get`: GetSSL - Get SSL service details
 * - `getServiceInfos`: GetServiceInfos - Get service information
 * - `updateServiceInfos`: UpdateServiceInfos - Update service information
 * - `listTasks`: ListTasks - List tasks of an SSL
 * - `getTask`: GetTask - Get a task of an SSL
 *
 * @remarks
 * SSL services are managed under `/ssl` route.
 * Service name can be entered manually.
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
	execute as executeGetServiceInfos,
	description as descriptionGetServiceInfos,
} from './getServiceInfos.operation';
import {
	execute as executeUpdateServiceInfos,
	description as descriptionUpdateServiceInfos,
} from './updateServiceInfos.operation';
import {
	execute as executeListTasks,
	description as descriptionListTasks,
} from './listTasks.operation';
import { execute as executeGetTask, description as descriptionGetTask } from './getTask.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'SSL Operation',
			name: 'sslOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all SSL services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an SSL service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List tasks of an SSL',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a task of an SSL',
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
			show: { ...displayOptions?.show, sslOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, sslOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, sslOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, sslOperation: ['updateServiceInfos'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, sslOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, sslOperation: ['getTask'] },
		}),
	];
}

/**
 * Executes the selected SSL operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('sslOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'listTasks':
			return await executeListTasks.call(this);
		case 'getTask':
			return await executeGetTask.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ssl"`);
}
