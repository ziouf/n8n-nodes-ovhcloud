/**
 * @brief New Account resource operations for n8n node
 *
 * Provides operations for managing OVH New Account services including:
 * - List all New Account services for the authenticated account
 * - Get detailed information about a specific New Account service
 *
 * Available operations:
 * - `list`: ListNewAccountServices - List all New Account services
 * - `get`: GetNewAccountService - Get details of a specific New Account service
 *
 * @remarks
 * New Account services are managed under `/newAccount` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: New Account
 * Operation: List Services
 * Output: Array of New Account service details
 *
 * @example
 * // Get specific service details
 * // Resource: New Account -> Get Service
 * // serviceName = 'newaccount-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeNewAccountList,
	description as descriptionNewAccountList,
} from './list.operation';
import {
	execute as executeNewAccountGet,
	description as descriptionNewAccountGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'New Account Operation',
			name: 'newAccountOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List New Account services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a New Account service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionNewAccountList({
			...displayOptions,
			show: { ...displayOptions?.show, newAccountOperation: ['list'] },
		}),
		...descriptionNewAccountGet({
			...displayOptions,
			show: { ...displayOptions?.show, newAccountOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected New Account operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('newAccountOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeNewAccountList.call(this);
		case 'get':
			return await executeNewAccountGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "newAccount"`);
}
