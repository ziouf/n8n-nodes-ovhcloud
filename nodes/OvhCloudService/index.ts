import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
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
		...descriptionListRenews({
			...displayOptions,
			show: { ...displayOptions?.show, serviceOperation: ['listRenews'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('serviceOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this, itemIndex);
		case 'get':
			return await executeGet.call(this, itemIndex);
		case 'listRenews':
			return await executeListRenews.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "service"`);
}
