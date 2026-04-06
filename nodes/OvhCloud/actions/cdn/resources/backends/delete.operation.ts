import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Delete CDN Backend operation
 *
 * Removes a backend from a domain on a CDN Dedicated service.
 *
 * HTTP method: DELETE
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}
 */
export function descriptionBackendsDelete(displayOptions: IDisplayOptions): INodeProperties[] {
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
		{
			displayName: 'Domain',
			name: 'domain',
			description: 'The domain name',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			description: 'The backend IP address to remove',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete CDN Backend operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function executeBackendsDelete(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;

	const response = (await client.httpDelete(
		`/cdn/dedicated/${serviceName}/domains/${domain}/backends/${ip}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
