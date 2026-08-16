import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeList,
	description as descriptionList,
} from './resources/gatewayListGet.operation';
import {
	execute as executeGet,
	description as descriptionGet,
} from './resources/gatewayGetGet.operation';
import {
	execute as executeUpdate,
	description as descriptionUpdate,
} from './resources/gatewayUpdatePut.operation';
import {
	execute as executeTerminate,
	description as descriptionTerminate,
} from './resources/gatewayTerminatePost.operation';
import {
	execute as executeTaskListGet,
	description as descriptionTaskListGet,
} from './resources/gatewayTaskListGet.operation';
import {
	execute as executeTaskGetGet,
	description as descriptionTaskGetGet,
} from './resources/gatewayTaskGetGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'sslGatewayOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					displayName: 'Get',
					name: 'Get',
					value: 'get',
					action: 'Get details of an SSL Gateway',
				},
				{
					displayName: 'Get Task',
					name: 'getTask',
					value: 'getTask',
					action: 'Get details of an SSL Gateway task',
				},
				{
					displayName: 'List',
					name: 'List',
					value: 'list',
					action: 'List your SSL Gateways',
				},
				{
					displayName: 'List Tasks',
					name: 'listTasks',
					value: 'listTasks',
					action: 'List tasks for an SSL Gateway',
				},
				{
					displayName: 'Terminate',
					name: 'Terminate',
					value: 'terminate',
					action: 'Request termination of an SSL Gateway',
				},
				{
					displayName: 'Update',
					name: 'Update',
					value: 'update',
					action: 'Update an SSL Gateway',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionList() as INodeProperties[]),
		...(descriptionGet({
			...displayOptions,
			show: { sslGatewayOperation: ['get'] },
		}) as INodeProperties[]),
		...(descriptionUpdate({
			...displayOptions,
			show: { sslGatewayOperation: ['update'] },
		}) as INodeProperties[]),
		...(descriptionTerminate({
			...displayOptions,
			show: { sslGatewayOperation: ['terminate'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { sslGatewayOperation: ['listTasks'] },
		}) as INodeProperties[]),
		...(descriptionTaskGetGet({
			...displayOptions,
			show: { sslGatewayOperation: ['getTask'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('sslGatewayOperation', itemIndex ?? 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return executeList.call(this, itemIndex ?? 0);
		case 'get':
			return executeGet.call(this, itemIndex ?? 0);
		case 'update':
			return executeUpdate.call(this, itemIndex ?? 0);
		case 'terminate':
			return executeTerminate.call(this, itemIndex ?? 0);
		case 'listTasks':
			return executeTaskListGet.call(this, itemIndex ?? 0);
		case 'getTask':
			return executeTaskGetGet.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "sslGateway"`);
}
