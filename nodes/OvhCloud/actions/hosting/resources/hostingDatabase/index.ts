/**
 * @brief Hosting Database resource operations for Hosting
 *
 * Provides operations for managing private database databases:
 * - List: List all databases
 * - Get: Get details of a specific database
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Hosting Database Operation',
			name: 'hostingDatabaseOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all databases' },
				{ name: 'Get', value: 'get', action: 'Get details of a database' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingDatabaseOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingDatabaseOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('hostingDatabaseOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hostingDatabase"`);
}
