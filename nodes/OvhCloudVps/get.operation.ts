import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Get VPS Details operation.
 *
 * Defines the VPS service ID input with support for both manual entry
 * and dynamic selection from available VPS instances.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get VPS operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to retrieve. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a VPS service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get VPS Details operation.
 *
 * Retrieves the details of a specific VPS instance by its service name.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the VPS details
 * @throws NodeApiError if the VPS is not found or credentials are invalid
 *
 * @example
 * ```typescript
 * // Input: serviceName = "vps1234567"
 * // Output: VPS details with state, plan, IP addresses, etc.
 * ```
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpGet(`/vps/${serviceName}`)) as IDataObject;
	return this.helpers.returnJsonArray(response);
}
