import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get License Directadmin Service operation for LicenseDirectadmin resource
 *
 * Retrieves detailed information for a specific Directadmin License service:
 * - HTTP GET request to `/license/directadmin/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns service details
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
						searchListMethod: 'getLicenseDirectadminServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get License Directadmin Service operation.
 *
 * Retrieves detailed information for a specific Directadmin License service.
 *
 * HTTP method: GET
 * Endpoint: /license/directadmin/{serviceName.value}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const data = (await client.httpGet(`/license/directadmin/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
