import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Link your Active Directory to your CDI Active Directory.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust
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
			description: 'Domain name',
			displayOptions,
		},
		{
			displayName: 'DNS 1',
			name: 'dns1',
			type: 'string',
			default: '',
			description: 'Primary DNS server',
			displayOptions,
		},
		{
			displayName: 'DNS 2',
			name: 'dns2',
			type: 'string',
			default: '',
			description: 'Secondary DNS server',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Domain Trust operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		activeDirectoryIP: this.getNodeParameter('activeDirectoryIP', 0) as string,
		domain: this.getNodeParameter('domain', 0) as string,
	};
	const dns1 = this.getNodeParameter('dns1', 0, '') as string;
	if (dns1) body.dns1 = dns1;
	const dns2 = this.getNodeParameter('dns2', 0, '') as string;
	if (dns2) body.dns2 = dns2;

	const data = (await client.httpPost(
		`/horizonView/${serviceName}/domainTrust`,
		{ body },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
