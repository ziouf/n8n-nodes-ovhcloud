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
			description: 'Name of the domain (e.g. domain.local)',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the user who is going to add the desktop in your Active Directory',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Password of the user',
			displayOptions,
		},
	];
}

/**
 * Add a domain user on the composer for a domain trust.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', 0) as number;

	const body: IDataObject = {
		domain: this.getNodeParameter('domain', 0) as string,
		username: this.getNodeParameter('username', 0) as string,
		password: this.getNodeParameter('password', 0) as string,
	};

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/domainTrust/${domainTrustId}/addDomainUserOnComposer`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
