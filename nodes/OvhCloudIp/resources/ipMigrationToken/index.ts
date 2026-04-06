import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeCreate, description as descriptionCreate } from './create.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Migration Token Operation',
			name: 'ipMigrationTokenOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get migration token',
				},
				{
					name: 'Create',
					value: 'create',
					action: 'Generate a migration token',
				},
			],
			default: 'get',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipMigrationTokenOperation: ['get'] },
		}),
		...descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipMigrationTokenOperation: ['create'] },
		}),
	];
}

/**
 * Executes the selected IP Migration Token operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipMigrationTokenOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
		case 'create':
			return await executeCreate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipMigrationToken"`);
}
