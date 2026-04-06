import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a Domain Controller for this domain.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController
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
			displayName: 'Domain Controller IP',
			name: 'domainControllerIp',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain Controller IP address',
			displayOptions,
		},
	];
}

/**
 * Executes the Add Domain Controller operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', 0) as string;
	const body: IDataObject = {
		domain: this.getNodeParameter('domain', 0) as string,
		domainControllerIp: this.getNodeParameter('domainControllerIp', 0) as string,
	};
	const data = (await client.httpPost(
		`/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainController`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
