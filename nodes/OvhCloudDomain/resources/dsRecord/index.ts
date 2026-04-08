/**
 * @brief DS Record resource operations
 *
 * Provides operations for managing DS (Delegation Signer) records:
 * - List: List all DS records
 * - Get: Get a specific DS record
 * - Update: Update DS records
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DS Record Operation',
			name: 'dsRecordOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all DS records',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get a specific DS record',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update DS records',
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
			show: { ...displayOptions?.show, dsRecordOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dsRecordOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dsRecordOperation: ['update'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dsRecordOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dsRecord"`);
}
