/**
 * @brief Contact resource operations
 *
 * Provides operations for managing contacts:
 * - List: List all contacts
 * - Get: Get a specific contact
 * - Create: Create a new contact
 * - Update: Update a contact
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
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Contact Operation',
			name: 'contactOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all contacts' },
				{ name: 'Get', value: 'get', action: 'Get a specific contact' },
				{ name: 'Create', value: 'create', action: 'Create a new contact' },
				{ name: 'Update', value: 'update', action: 'Update a contact' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({ ...displayOptions, show: { ...displayOptions?.show, contactOperation: ['list'] } }),
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, contactOperation: ['get'] } }),
		...descriptionCreate({ ...displayOptions, show: { ...displayOptions?.show, contactOperation: ['create'] } }),
		...descriptionUpdate({ ...displayOptions, show: { ...displayOptions?.show, contactOperation: ['update'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('contactOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'create':
			return await executeCreate.call(this);
		case 'update':
			return await executeUpdate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "contact"`);
}
