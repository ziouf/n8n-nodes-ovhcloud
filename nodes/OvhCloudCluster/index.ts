import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeClusterListGet,
	description as descriptionClusterListGet,
} from './clusterListGet.operation';
import {
	execute as executeClusterGetGet,
	description as descriptionClusterGetGet,
} from './clusterGetGet.operation';
import {
	execute as executeClusterUpdatePut,
	description as descriptionClusterUpdatePut,
} from './clusterUpdatePut.operation';
import {
	execute as executeClusterDeleteDelete,
	description as descriptionClusterDeleteDelete,
} from './clusterDeleteDelete.operation';
import {
	execute as executeServiceInfosGetGet,
	description as descriptionServiceInfosGetGet,
} from './serviceInfosGetGet.operation';
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
			name: 'clusterOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Delete Cluster',
				value: 'clusterDeleteDelete',
				action: 'Delete a cluster service',
			},
			{
				name: 'Get Cluster',
				value: 'clusterGetGet',
				action: 'Get cluster details',
			},
			{
				name: 'Get Service Infos',
				value: 'serviceInfosGetGet',
				action: 'Get service information for a cluster',
			},
			{
				name: 'Get Task',
				value: 'taskGetGet',
				action: 'Get task details',
			},
			{
				name: 'List Clusters',
				value: 'clusterListGet',
				action: 'List all cluster services',
			},
			{
				name: 'List Tasks',
				value: 'taskListGet',
				action: 'List tasks for a cluster',
			},
			{
				name: 'Reinstall Cluster',
				value: 'reinstallPost',
				action: 'Reinstall a cluster service',
			},
			{
				name: 'Update Cluster',
				value: 'clusterUpdatePut',
				action: 'Update cluster details',
			},
			],
			default: 'clusterListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionClusterListGet({
			...displayOptions,
			show: { clusterOperation: ['clusterListGet'] },
		}) as INodeProperties[]),
		...(descriptionClusterGetGet({
			...displayOptions,
			show: { clusterOperation: ['clusterGetGet'] },
		}) as INodeProperties[]),
		...(descriptionClusterUpdatePut({
			...displayOptions,
			show: { clusterOperation: ['clusterUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionClusterDeleteDelete({
			...displayOptions,
			show: { clusterOperation: ['clusterDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionServiceInfosGetGet({
			...displayOptions,
			show: { clusterOperation: ['serviceInfosGetGet'] },
		}) as INodeProperties[]),
		...(descriptionReinstallPost({
			...displayOptions,
			show: { clusterOperation: ['reinstallPost'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { clusterOperation: ['taskListGet'] },
		}) as INodeProperties[]),
		...(descriptionTaskGetGet({
			...displayOptions,
			show: { clusterOperation: ['taskGetGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('clusterOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'clusterListGet':
			return executeClusterListGet.call(this, itemIndex);
		case 'clusterGetGet':
			return executeClusterGetGet.call(this, itemIndex);
		case 'clusterUpdatePut':
			return executeClusterUpdatePut.call(this, itemIndex);
		case 'clusterDeleteDelete':
			return executeClusterDeleteDelete.call(this, itemIndex);
		case 'serviceInfosGetGet':
			return executeServiceInfosGetGet.call(this, itemIndex);
		case 'reinstallPost':
			return executeReinstallPost.call(this, itemIndex);
		case 'taskListGet':
			return executeTaskListGet.call(this, itemIndex);
		case 'taskGetGet':
			return executeTaskGetGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudCluster"`);
}
