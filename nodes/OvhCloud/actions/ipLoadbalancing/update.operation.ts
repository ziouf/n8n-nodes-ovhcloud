import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Update an IP Load Balancer's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}
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
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Custom display name for the IP Load Balancer',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'Zone where the IP Load Balancer is located',
			displayOptions,
		},
		{
			displayName: 'SSL Configuration',
			name: 'sslConfiguration',
			type: 'string',
			default: '',
			description: 'SSL configuration string',
			displayOptions,
		},
		{
			displayName: 'SSL DH',
			name: 'sslDh',
			type: 'string',
			default: '',
			description: 'SSL Diffie-Hellman parameters',
			displayOptions,
		},
	];
}

/**
 * Executes the Update IP Load Balancer operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	const displayName = this.getNodeParameter('displayName', 0, '') as string;
	if (displayName) body.displayName = displayName;
	const zone = this.getNodeParameter('zone', 0, '') as string;
	if (zone) body.zone = zone;
	const sslConfiguration = this.getNodeParameter('sslConfiguration', 0, '') as string;
	if (sslConfiguration) body.sslConfiguration = sslConfiguration;
	const sslDh = this.getNodeParameter('sslDh', 0, '') as string;
	if (sslDh) body.sslDh = sslDh;
	const data = (await client.httpPut(`/ipLoadbalancing/${serviceName}`, { body })) as IDataObject;
	return [{ json: data }];
}
