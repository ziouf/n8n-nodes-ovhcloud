import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Add a new custom SSL certificate on an IP Load Balancer.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/ssl
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
			displayName: 'Certificate',
			name: 'certificate',
			type: 'string',
			default: '',
			required: true,
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
			required: true,
			description: 'SSL private key content (PEM format)',
			displayOptions,
			typeOptions: {
				rows: 5,
			},
		},
	];
}

/**
 * Executes the Create SSL Certificate operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	body.certificate = this.getNodeParameter('certificate', 0) as string;
	body.key = this.getNodeParameter('key', 0) as string;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/ssl`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
