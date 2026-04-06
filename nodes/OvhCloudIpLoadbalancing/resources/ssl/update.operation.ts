import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update an SSL certificate's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/ssl/{id}
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
			displayName: 'SSL ID',
			name: 'sslId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the SSL certificate',
			displayOptions,
		},
		{
			displayName: 'Certificate',
			name: 'certificate',
			type: 'string',
			default: '',
			description: 'SSL certificate content (PEM format)',
			displayOptions,
			typeOptions: {
				rows: 5,
			},
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			description: 'SSL private key content (PEM format)',
			displayOptions,
			typeOptions: {
				rows: 5,
			},
		},
	];
}

/**
 * Executes the Update SSL Certificate operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const sslId = this.getNodeParameter('sslId', 0) as number;
	const body: IDataObject = {};
	const certificate = this.getNodeParameter('certificate', 0, '') as string;
	if (certificate) body.certificate = certificate;
	const key = this.getNodeParameter('key', 0, '') as string;
	if (key) body.key = key;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/ssl/${sslId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
