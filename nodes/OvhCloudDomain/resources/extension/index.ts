/**
 * @brief Extension resource operations
 *
 * Provides operations for managing domain extensions:
 * - List: List all extensions
 * - List By Category: List extensions by category
 * - List Highlighted: List highlighted extensions
 * - Get: Get a specific extension
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeListByCategory, description as descriptionListByCategory } from './listByCategory.operation';
import { execute as executeListHighlighted, description as descriptionListHighlighted } from './listHighlighted.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Extension Operation',
			name: 'extensionOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all extensions' },
				{ name: 'List By Category', value: 'listByCategory', action: 'List extensions by category' },
				{ name: 'List Highlighted', value: 'listHighlighted', action: 'List highlighted extensions' },
				{ name: 'Get', value: 'get', action: 'Get a specific extension' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({ ...displayOptions, show: { ...displayOptions?.show, extensionOperation: ['list'] } }),
		...descriptionListByCategory({ ...displayOptions, show: { ...displayOptions?.show, extensionOperation: ['listByCategory'] } }),
		...descriptionListHighlighted({ ...displayOptions, show: { ...displayOptions?.show, extensionOperation: ['listHighlighted'] } }),
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, extensionOperation: ['get'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('extensionOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'listByCategory':
			return await executeListByCategory.call(this);
		case 'listHighlighted':
			return await executeListHighlighted.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "extension"`);
}
