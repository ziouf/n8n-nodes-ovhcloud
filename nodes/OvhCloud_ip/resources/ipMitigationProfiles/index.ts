/**
 * @brief IP Mitigation Profiles sub-resource operations for IP resource
 *
 * Provides operations for managing mitigation profiles on IPs.
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
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Mitigation Profile Operation',
			name: 'ipMitigationProfileOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List mitigation profiles',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get mitigation profile details',
				},
				{
					name: 'Create',
					value: 'create',
					action: 'Create mitigation profile',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update mitigation profile',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete mitigation profile',
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
			show: { ...displayOptions?.show, ipMitigationProfileOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipMitigationProfileOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipMitigationProfileOperation: ['create'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipMitigationProfileOperation: ['update'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipMitigationProfileOperation: ['delete'] },
		}),
	];
}

/**
 * Executes the selected IP Mitigation Profile operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipMitigationProfileOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'create':
			return await executeCreate.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'delete':
			return await executeDelete.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipMitigationProfiles"`);
}
