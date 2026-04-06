/**
 * @brief Contact resource operations for n8n node
 *
 * Provides operations for managing OVH Contacts including:
 * - List all Contacts for the authenticated account
 * - Get detailed information about a specific Contact
 *
 * Available operations:
 * - `list`: ListContacts - List all Contacts
 * - `get`: GetContact - Get details of a specific Contact
 *
 * @remarks
 * Contacts are managed under `/contact` route.
 * Contact ID can be entered manually or selected from dynamic dropdown.
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
			displayName: 'Contact Operation',
			name: 'contactOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Contacts',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Contact',
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
			show: { ...displayOptions?.show, contactOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, contactOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Contact operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('contactOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "contact"`);
}
