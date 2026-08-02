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
			placeholder: 'child.example.com',
			description: 'The child domain to add to the domain trust',
			displayOptions,
		},
		{
			displayName: 'Active Directory IP',
			name: 'activeDirectoryIP',
			type: 'string',
			default: '',
			required: true,
			placeholder: '192.0.2.20',
			description: 'The IP address of the child Active Directory',
			displayOptions,
		},
		{
			displayName: 'Passphrase',
			name: 'passphrase',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The shared passphrase to create the Active Directory trust',
			displayOptions,
		},
		{
			displayName: 'Service Account Password',
			name: 'serviceAccountPassword',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The password of the horizonUI service account',
			displayOptions,
		},
	];
}

/**
 * Add a child domain to a domain trust.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', 0) as number;

	const body: IDataObject = {
		domain: this.getNodeParameter('domain', 0) as string,
		activeDirectoryIP: this.getNodeParameter('activeDirectoryIP', 0) as string,
		passphrase: this.getNodeParameter('passphrase', 0) as string,
		serviceAccountPassword: this.getNodeParameter('serviceAccountPassword', 0) as string,
	};

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/domainTrust/${domainTrustId}/addChildDomain`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
