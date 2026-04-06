import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Order a free certificate for an IP Load Balancer.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/freeCertificate
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name of the IP Load Balancer',
			displayOptions,
		},
		{
			displayName: 'Domains',
			name: 'domains',
			type: 'string',
			default: '',
			required: true,
			description: 'Comma-separated list of domain names for the certificate',
			displayOptions,
		},
	];
}

/**
 * Executes the Free Certificate operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainsStr = this.getNodeParameter('domains', 0) as string;
	const domains = domainsStr.split(',').map((d) => d.trim());
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/freeCertificate`,
		{ body: domains },
	)) as IDataObject;
	return [{ json: data }];
}
