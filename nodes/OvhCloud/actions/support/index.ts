/**
 * @brief Support resource operations for n8n node
 *
 * Provides operations for managing OVHcloud support tickets including:
 * - List all support tickets for the authenticated account
 * - Get detailed information about a specific support ticket
 *
 * Available operations:
 * - `list`: ListSupportTickets - List all support tickets
 * - `get`: GetSupportTicket - Get details of a specific support ticket
 *
 * @remarks
 * Support tickets are managed under `/support` route.
 * Ticket ID can be entered manually.
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
			displayName: 'Support Operation',
			name: 'supportOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all support tickets',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a support ticket',
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
			show: { ...displayOptions?.show, supportOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, supportOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected support operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('supportOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "support"`);
}
