import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List SSL certificates for an IP Load Balancer.
 *
 * HTTP method: GET
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
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Filter by certificate type',
			displayOptions,
		},
	];
}

/**
 * Executes the List SSL Certificates operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const type = this.getNodeParameter('type', 0, '') as string;
	const qs: Record<string, string> = {};
	if (type) qs.type = type;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/ssl`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
