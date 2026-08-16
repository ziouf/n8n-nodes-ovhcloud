import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeRegister,
	description as descriptionRegister,
} from './register.operation';
import {
	execute as executeConfirmTermination,
	description as descriptionConfirmTermination,
} from './confirmTermination.operation';
import {
	execute as executeServiceInfos,
	description as descriptionServiceInfos,
} from './serviceInfos.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'veeamOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm service termination',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get Veeam Enterprise Plus service details',
				},
				{
					name: 'Get Service Infos',
					value: 'serviceInfos',
					action: 'Get detailed service information',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Veeam Enterprise Plus services',
				},
				{
					name: 'Register Backup Server',
					value: 'register',
					action: 'Register a Veeam backup server',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['get'] },
		}),
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['list'] },
		}),
		...descriptionRegister({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['register'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['confirmTermination'] },
		}),
		...descriptionServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['serviceInfos'] },
		}),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('veeamOperation', itemIndex ?? 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this, itemIndex ?? 0);
		case 'list':
			return await executeList.call(this, itemIndex ?? 0);
		case 'register':
			return await executeRegister.call(this, itemIndex ?? 0);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this, itemIndex ?? 0);
		case 'serviceInfos':
			return await executeServiceInfos.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "veeamEnterprise"`);
}
