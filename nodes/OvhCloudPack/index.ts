import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executePackListGet,
	description as descriptionPackListGet,
} from './packListGet.operation';
import {
	execute as executePackGetGet,
	description as descriptionPackGetGet,
} from './packGetGet.operation';
import {
	execute as executePackUpdatePut,
	description as descriptionPackUpdatePut,
} from './packUpdatePut.operation';
import {
	execute as executePackDeleteDelete,
	description as descriptionPackDeleteDelete,
} from './packDeleteDelete.operation';
import {
	execute as executeServiceInfosGetGet,
	description as descriptionServiceInfosGetGet,
} from './serviceInfosGetGet.operation';
import {
	execute as executeReinstallPost,
	description as descriptionReinstallPost,
} from './reinstallPost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'packOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Delete Pack',
				value: 'packDeleteDelete',
				action: 'Delete a pack service',
			},
			{
				name: 'Get Pack',
				value: 'packGetGet',
				action: 'Get pack service details',
			},
			{
				name: 'Get Service Infos',
				value: 'serviceInfosGetGet',
				action: 'Get service information for a pack',
			},
			{
				name: 'List Packs',
				value: 'packListGet',
				action: 'List all pack services',
			},
			{
				name: 'Reinstall Pack',
				value: 'reinstallPost',
				action: 'Reinstall a pack service',
			},
			{
				name: 'Update Pack',
				value: 'packUpdatePut',
				action: 'Update pack service details',
			},
			],
			default: 'packListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionPackListGet({
			...displayOptions,
			show: { packOperation: ['packListGet'] },
		}) as INodeProperties[]),
		...(descriptionPackGetGet({
			...displayOptions,
			show: { packOperation: ['packGetGet'] },
		}) as INodeProperties[]),
		...(descriptionPackUpdatePut({
			...displayOptions,
			show: { packOperation: ['packUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionPackDeleteDelete({
			...displayOptions,
			show: { packOperation: ['packDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionServiceInfosGetGet({
			...displayOptions,
			show: { packOperation: ['serviceInfosGetGet'] },
		}) as INodeProperties[]),
		...(descriptionReinstallPost({
			...displayOptions,
			show: { packOperation: ['reinstallPost'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('packOperation', itemIndex ?? 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'packListGet':
			return executePackListGet.call(this, itemIndex ?? 0);
		case 'packGetGet':
			return executePackGetGet.call(this, itemIndex ?? 0);
		case 'packUpdatePut':
			return executePackUpdatePut.call(this, itemIndex ?? 0);
		case 'packDeleteDelete':
			return executePackDeleteDelete.call(this, itemIndex ?? 0);
		case 'serviceInfosGetGet':
			return executeServiceInfosGetGet.call(this, itemIndex ?? 0);
		case 'reinstallPost':
			return executeReinstallPost.call(this, itemIndex ?? 0);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudPack"`);
}
