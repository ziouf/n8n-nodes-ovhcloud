import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get SaaS Service operation for SaaS resource
 *
 * Retrieves detailed information for a specific SaaS service:
 * - HTTP GET request to `/saas/csp2/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get SaaS Service operation
 *
 * @example
 * // Input configuration:
 * // serviceName = 'saas-123'
 * // Output: Service details
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getSaasServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get SaaS Service operation.
 *
 * Retrieves detailed information for a specific SaaS service.
 *
 * HTTP method: GET
 * Endpoint: /saas/csp2/{serviceName.value}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 *
 * @example
 * // Input configuration:
 * // serviceName = 'saas-123'
 * // Output: Service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as {
		value: string;
	};
	const data = (await client.httpGet(`/saas/csp2/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
