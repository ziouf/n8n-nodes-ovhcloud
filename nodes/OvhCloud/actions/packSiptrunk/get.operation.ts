import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Pack SIP Trunk Service operation for Pack SIP Trunk resource
 *
 * Retrieves detailed information for a specific Pack SIP Trunk service:
 * - HTTP GET request to `/pack/siptrunk/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Pack SIP Trunk Service operation
 *
 * @example
 * // Input configuration:
 * // serviceName = 'pack-siptrunk-123'
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
						searchListMethod: 'getPackSiptrunkServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get Pack SIP Trunk Service operation.
 *
 * Retrieves detailed information for a specific Pack SIP Trunk service.
 *
 * HTTP method: GET
 * Endpoint: /pack/siptrunk/{serviceName.value}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 *
 * @example
 * // Input configuration:
 * // serviceName = 'pack-siptrunk-123'
 * // Output: Service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as {
		value: string;
	};
	const data = (await client.httpGet(`/pack/siptrunk/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
