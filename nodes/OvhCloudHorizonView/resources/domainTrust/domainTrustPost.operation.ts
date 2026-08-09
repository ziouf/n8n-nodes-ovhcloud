import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Horizon View Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Horizon View service (e.g. service1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHorizonViewServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'service1',
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
			placeholder: 'example.com',
			description: 'The domain name to add as a domain trust',
			displayOptions,
		},
		{
			displayName: 'Active Directory IP',
			name: 'activeDirectoryIP',
			type: 'string',
			default: '',
			required: true,
			placeholder: '192.0.2.10',
			description: 'The IP address of the Active Directory',
			displayOptions,
		},
		{
			displayName: 'DNS 1',
			name: 'dns1',
			type: 'string',
			default: '',
			description: 'The primary DNS server of the domain',
			displayOptions,
		},
		{
			displayName: 'DNS 2',
			name: 'dns2',
			type: 'string',
			default: '',
			description: 'The secondary DNS server of the domain',
			displayOptions,
		},
	];
}

/**
 * Add a domain trust to a Horizon View service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {
		domain: this.getNodeParameter('domain', _itemIndex ?? 0) as string,
		activeDirectoryIP: this.getNodeParameter('activeDirectoryIP', _itemIndex ?? 0) as string,
	};

	const dns1 = (this.getNodeParameter('dns1', _itemIndex ?? 0, '') as string) || '';
	if (dns1) body.dns1 = dns1;

	const dns2 = (this.getNodeParameter('dns2', _itemIndex ?? 0, '') as string) || '';
	if (dns2) body.dns2 = dns2;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/domainTrust`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
