import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a domain user to add your desktop in your Active Directory.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'Domain Trust ID',
			name: 'domainTrustId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the domain trust',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain name',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain username',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Domain user password',
			displayOptions,
		},
	];
}

/**
 * Executes the Add Domain User On Composer operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', 0) as string;
	const body: IDataObject = {
		domain: this.getNodeParameter('domain', 0) as string,
		username: this.getNodeParameter('username', 0) as string,
		password: this.getNodeParameter('password', 0) as string,
	};
	const data = (await client.httpPost(
		`/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainUserOnComposer`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
