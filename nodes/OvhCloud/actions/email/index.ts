/**
 * @brief Email resource operations for n8n node
 *
 * Provides operations for managing OVH email domains including:
 * - List all email domains for the authenticated account
 * - Get detailed information about a specific email domain
 *
 * Available operations:
 * - `list`: ListEmailDomains - List all email domains
 * - `get`: GetEmailDomain - Get details of a specific email domain
 *
 * @remarks
 * Email domains are managed under `/email/domain` route.
 * Domain name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Email
 * Operation: List Domains
 * Output: Array of email domain details with state, plan, options, etc.
 *
 * @example
 * // Get specific domain details
 * // Resource: Email -> Get Domain
 * // domainName = 'example.com' (or from dynamic list)
 * // Output: Domain details with state, plan, options, redirects, MX records, etc.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeEmailList, description as descriptionEmailList } from './list.operation';
import { execute as executeEmailGet, description as descriptionEmailGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Email Operation',
			name: 'emailOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Domains',
					value: 'list',
					action: 'List email domains',
				},
				{
					name: 'Get Domain',
					value: 'get',
					action: 'Get details of an email domain',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionEmailList({
			...displayOptions,
			show: { ...displayOptions?.show, emailOperation: ['list'] },
		}),
		...descriptionEmailGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected email operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('emailOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeEmailList.call(this);
		case 'get':
			return await executeEmailGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "email"`);
}
