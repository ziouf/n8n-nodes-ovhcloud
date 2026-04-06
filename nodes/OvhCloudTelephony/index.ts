/**
 * @brief Telephony resource operations for n8n node
 *
 * Provides operations for managing OVH telephony services including:
 * - List all telephony services for the authenticated account
 * - Get detailed information about a specific telephony service
 *
 * Available operations:
 * - `list`: ListTelephonyServices - List all telephony services
 * - `get`: GetTelephonyService - Get details of a specific telephony service
 *
 * @remarks
 * Telephony services are managed under `/telephony` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 *
 * @example
 * // Configure in n8n node
 * Resource: Telephony
 * Operation: List Services
 * Output: Array of telephony service details
 *
 * @example
 * // Get specific service details
 * // Resource: Telephony -> Get Service
 * // serviceName = 'telephony-123' (or from dynamic list)
 * // Output: Service details
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeTelephonyList,
	description as descriptionTelephonyList,
} from './list.operation';
import {
	execute as executeTelephonyGet,
	description as descriptionTelephonyGet,
} from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Telephony Operation',
			name: 'telephonyOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Services',
					value: 'list',
					action: 'List telephony services',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a telephony service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionTelephonyList({
			...displayOptions,
			show: { ...displayOptions?.show, telephonyOperation: ['list'] },
		}),
		...descriptionTelephonyGet({
			...displayOptions,
			show: { ...displayOptions?.show, telephonyOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected telephony operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('telephonyOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeTelephonyList.call(this);
		case 'get':
			return await executeTelephonyGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "telephony"`);
}
