/**
 * @brief EmailMxplan resource operations for n8n node
 *
 * Provides operations for managing OVH Email Mxplan services including:
 * - List all Email Mxplan services for the authenticated account
 * - Get detailed information about a specific Email Mxplan service
 *
 * Available operations:
 * - `list`: ListEmailMxplanServices - List all Email Mxplan services
 * - `get`: GetEmailMxplanService - Get details of a specific Email Mxplan service
 *
 * @remarks
 * Email Mxplan services are managed under `/email/mxplan` route.
 * Service name can be entered manually or selected from dynamic dropdown.
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
			displayName: 'Email Mxplan Operation',
			name: 'emailMxplanOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Email Mxplan services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an Email Mxplan service',
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
			show: { ...displayOptions?.show, emailMxplanOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailMxplanOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Email Mxplan operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('emailMxplanOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "emailMxplan"`);
}
