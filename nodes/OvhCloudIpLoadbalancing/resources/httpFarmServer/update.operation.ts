import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update an HTTP Farm server's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
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
			description: 'The ID of the HTTP Farm',
			displayOptions,
		},
		{
			displayName: 'Server ID',
			name: 'serverId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the server',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
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
 * Executes the Update HTTP Farm Server operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const serverId = this.getNodeParameter('serverId', 0) as number;
	const body: IDataObject = {};
	const address = this.getNodeParameter('address', 0, '') as string;
	if (address) body.address = address;
	const port = this.getNodeParameter('port', 0, 0) as number;
	if (port) body.port = port;
	const status = this.getNodeParameter('status', 0, 'active') as string;
	body.status = status;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
