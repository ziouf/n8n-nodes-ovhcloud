import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Delete CDN SSL operation
 *
 * Removes the SSL certificate from a CDN Dedicated service.
 *
 * HTTP method: DELETE
 * Endpoint: /cdn/dedicated/{serviceName}/ssl
 */
export function descriptionSslDelete(displayOptions: IDisplayOptions): INodeProperties[] {
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
 * Executes the Delete CDN SSL operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function executeSslDelete(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpDelete(`/cdn/dedicated/${serviceName}/ssl`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
