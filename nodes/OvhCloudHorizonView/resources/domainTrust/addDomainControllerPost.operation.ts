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
			displayName: 'Domain Trust ID',
			name: 'domainTrustId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'example.com',
			description: 'The domain to add the domain controller to',
			displayOptions,
		},
		{
			displayName: 'Domain Controller IP',
			name: 'domainControllerIp',
			type: 'string',
			default: '',
			required: true,
			placeholder: '192.0.2.30',
			description: 'The IP address of the domain controller to add',
			displayOptions,
		},
	];
}

/**
 * Add a domain controller to a domain trust.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', _itemIndex ?? 0) as number;

	const body: IDataObject = {
		domain: this.getNodeParameter('domain', _itemIndex ?? 0) as string,
		domainControllerIp: this.getNodeParameter('domainControllerIp', _itemIndex ?? 0) as string,
	};

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/domainTrust/${domainTrustId}/addDomainController`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
