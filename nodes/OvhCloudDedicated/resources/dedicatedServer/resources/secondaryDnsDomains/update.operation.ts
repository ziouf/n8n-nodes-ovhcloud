import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Update Secondary DNS Domain operation for Dedicated Server
 *
 * Updates the IP for a secondary DNS domain.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the dedicated server. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: { mode: 'str', value: '' },
			modes: [
				{ displayName: 'By Name', name: 'str', type: 'string' },
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a dedicated server...',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
			],
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain to update',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'New IP address for the domain',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const ip = this.getNodeParameter('ip', 0, '') as string;

	const body: IDataObject = {};
	if (ip) body.ip = ip;

	const response = (await client.httpPut(`/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}`, body)) as IDataObject;
	return [{ json: response }];
}
