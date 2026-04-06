/**
 * @brief SMS resource operations for n8n node
 *
 * Provides operations for managing OVH SMS services including:
 * - List all SMS services for the authenticated account
 * - Get detailed information about a specific SMS service
 *
 * Available operations:
 * - `list`: ListSMS - List all SMS services
 * - `get`: GetSMS - Get details of a specific SMS service
 *
 * @remarks
 * SMS services are managed under `/sms` route.
 * Service name can be entered manually.
 *
 * @example
 * // Configure in n8n node
 * Resource: SMS
 * Operation: List
 * Output: Array of SMS service names
 *
 * @example
 * // Get specific SMS service details
 * // Resource: SMS -> Get
 * // serviceName = 'sms-xxxxx'
 * // Output: SMS service details with quota, credit, etc.
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
			displayName: 'SMS Operation',
			name: 'smsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all SMS services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an SMS service',
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
			show: { ...displayOptions?.show, smsOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, smsOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected SMS operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('smsOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "sms"`);
}
