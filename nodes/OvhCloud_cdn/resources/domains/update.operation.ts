import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update CDN Domain operation
 *
 * Updates properties of a domain attached to a CDN Dedicated service.
 *
 * HTTP method: PUT
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}
 */
export function descriptionDomainsUpdate(displayOptions: IDisplayOptions): INodeProperties[] {
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
			description: 'The domain name to update',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			description: 'The domain status',
			type: 'options',
			options: [
				{ name: 'Error', value: 'error' },
				{ name: 'Off', value: 'off' },
				{ name: 'On', value: 'on' },
				{ name: 'Removing', value: 'removing' },
			],
			default: 'on',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			description: 'The domain type',
			type: 'options',
			options: [
				{ name: 'Plain', value: 'plain' },
				{ name: 'SSL', value: 'ssl' },
			],
			default: 'plain',
			displayOptions,
		},
	];
}

/**
 * Executes the Update CDN Domain operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the updated domain details
 */
export async function executeDomainsUpdate(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const status = this.getNodeParameter('status', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;

	const response = (await client.httpPut(`/cdn/dedicated/${serviceName}/domains/${domain}`, {
		status,
		type,
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
