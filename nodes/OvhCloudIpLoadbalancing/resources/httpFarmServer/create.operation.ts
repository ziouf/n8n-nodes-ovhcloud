import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Add a server to an HTTP Farm.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
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
			default: 80,
			description: 'Server port',
			displayOptions,
		},
		{
			displayName: 'Probe Port',
			name: 'probePort',
			type: 'number',
			default: 0,
			description: 'Port used for health checks (0 = same as server port)',
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
 * Executes the Create HTTP Farm Server operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const body: IDataObject = {};
	body.address = this.getNodeParameter('address', 0) as string;
	const port = this.getNodeParameter('port', 0, 80) as number;
	body.port = port;
	const probePort = this.getNodeParameter('probePort', 0, 0) as number;
	if (probePort) body.probePort = probePort;
	const status = this.getNodeParameter('status', 0, 'active') as string;
	body.status = status;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
