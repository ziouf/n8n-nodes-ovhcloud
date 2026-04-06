import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a child domain for this domain.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain
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
			displayName: 'Active Directory IP',
			name: 'activeDirectoryIP',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory IP address',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Child domain name',
			displayOptions,
		},
		{
			displayName: 'Passphrase',
			name: 'passphrase',
			type: 'string',
			default: '',
			required: true,
			description: 'Passphrase for the trust relationship',
			displayOptions,
		},
		{
			displayName: 'Service Account Password',
			name: 'serviceAccountPassword',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Add Child Domain operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', 0) as string;
	const body: IDataObject = {
		activeDirectoryIP: this.getNodeParameter('activeDirectoryIP', 0) as string,
		domain: this.getNodeParameter('domain', 0) as string,
		passphrase: this.getNodeParameter('passphrase', 0) as string,
		serviceAccountPassword: this.getNodeParameter('serviceAccountPassword', 0) as string,
	};
	const data = (await client.httpPost(
		`/horizonView/${serviceName}/domainTrust/${domainTrustId}/addChildDomain`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
