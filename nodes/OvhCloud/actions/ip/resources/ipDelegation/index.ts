/**
 * @brief IP Delegation sub-resource operations for IP resource
 *
 * Provides operations for managing reverse delegation on IPv6 subnets.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeCreate, description as descriptionCreate } from './create.operation';
import { execute as executeDelete, description as descriptionDelete } from './delete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Delegation Operation',
			name: 'ipDelegationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List reverse delegation targets',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get delegation target details',
				},
				{
					name: 'Create',
					value: 'create',
					action: 'Add reverse delegation target',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete reverse delegation target',
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
			show: { ...displayOptions?.show, ipDelegationOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipDelegationOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipDelegationOperation: ['create'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipDelegationOperation: ['delete'] },
		}),
	];
}

/**
 * Executes the selected IP Delegation operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipDelegationOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'create':
			return await executeCreate.call(this);
		case 'delete':
			return await executeDelete.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipDelegation"`);
}
