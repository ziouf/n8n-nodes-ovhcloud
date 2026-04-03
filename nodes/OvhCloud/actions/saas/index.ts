/**
 * @brief SaaS resource operations for n8n node
 *
 * Provides operations for managing OVH SaaS services including:
 * - List all SaaS services for the authenticated account
 * - Get detailed information about a specific SaaS service
 *
 * Available operations:
 * - `list`: ListSaasServices - List all SaaS services
 * - `get`: GetSaasService - Get details of a specific SaaS service
 *
 * @remarks
 * SaaS services are managed under `/saas/csp2` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: SaaS
 * Operation: List Services
 * Output: Array of SaaS service details
 *
 * @example
 * // Get specific service details
 * // Resource: SaaS -> Get Service
 * // serviceName = 'saas-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeSaasList,
	description as descriptionSaasList,
} from './list.operation';
import {
	execute as executeSaasGet,
	description as descriptionSaasGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'SaaS Operation',
			name: 'saasOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List SaaS services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a SaaS service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionSaasList({
			...displayOptions,
			show: { ...displayOptions?.show, saasOperation: ['list'] },
		}),
		...descriptionSaasGet({
			...displayOptions,
			show: { ...displayOptions?.show, saasOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected SaaS operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('saasOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeSaasList.call(this);
		case 'get':
			return await executeSaasGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "saas"`);
}
