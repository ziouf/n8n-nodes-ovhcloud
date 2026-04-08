import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get CDN SSL operation
 *
 * Retrieves SSL configuration for a CDN Dedicated service.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/ssl
 */
export function descriptionSslGet(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the CDN Dedicated service. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a CDN service...',
					typeOptions: {
						searchListMethod: 'getCdnServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get CDN SSL operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SSL configuration
 */
export async function executeSslGet(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpGet(`/cdn/dedicated/${serviceName}/ssl`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
