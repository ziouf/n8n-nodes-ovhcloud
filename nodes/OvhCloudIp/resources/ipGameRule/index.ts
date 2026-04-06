/**
 * @brief IP Game Rule sub-resource operations for IP resource
 *
 * Provides operations for managing game mitigation rules.
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
			displayName: 'IP Game Rule Operation',
			name: 'ipGameRuleOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List game mitigation rules',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get game rule details',
				},
				{
					name: 'Create',
					value: 'create',
					action: 'Create game mitigation rule',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete game mitigation rule',
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
			show: { ...displayOptions?.show, ipGameRuleOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipGameRuleOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipGameRuleOperation: ['create'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipGameRuleOperation: ['delete'] },
		}),
	];
}

/**
 * Executes the selected IP Game Rule operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipGameRuleOperation', 0, { extractValue: true });

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

	throw new Error(`Unsupported operation "${operation}" for resource "ipGameRule"`);
}
