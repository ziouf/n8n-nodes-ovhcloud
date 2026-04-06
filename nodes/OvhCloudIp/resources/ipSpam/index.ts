import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeGetStats,
	description as descriptionGetStats,
} from './getStats.operation';
import { execute as executeUnblock, description as descriptionUnblock } from './unblock.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Spam Operation',
			name: 'ipSpamOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all spam entries',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a spam entry',
				},
				{
					name: 'Get Stats',
					value: 'getStats',
					action: 'Get spam statistics',
				},
				{
					name: 'Unblock',
					value: 'unblock',
					action: 'Unblock IP from anti-spam system',
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
			show: { ...displayOptions?.show, ipSpamOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipSpamOperation: ['get'] },
		}),
		...descriptionGetStats({
			...displayOptions,
			show: { ...displayOptions?.show, ipSpamOperation: ['getStats'] },
		}),
		...descriptionUnblock({
			...displayOptions,
			show: { ...displayOptions?.show, ipSpamOperation: ['unblock'] },
		}),
	];
}

/**
 * Executes the selected IP Spam operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipSpamOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getStats':
			return await executeGetStats.call(this);
		case 'unblock':
			return await executeUnblock.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipSpam"`);
}
