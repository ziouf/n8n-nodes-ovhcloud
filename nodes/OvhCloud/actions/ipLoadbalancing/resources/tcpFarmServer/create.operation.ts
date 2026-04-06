import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a server to a TCP Farm.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
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
			displayName: 'Farm ID',
			name: 'farmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the TCP Farm',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			required: true,
			description: 'Server IP address',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 0,
			description: 'Server port',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{ name: 'Active', value: 'active' },
				{ name: 'Inactive', value: 'inactive' },
			],
			default: 'active',
			description: 'Server status',
			displayOptions,
		},
	];
}

/**
 * Executes the Create TCP Farm Server operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const body: IDataObject = {};
	body.address = this.getNodeParameter('address', 0) as string;
	const port = this.getNodeParameter('port', 0, 0) as number;
	if (port) body.port = port;
	body.status = this.getNodeParameter('status', 0, 'active') as string;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
