import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update an HTTP Farm's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/http/farm/{farmId}
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
			displayName: 'Balance',
			name: 'balance',
			type: 'options',
			options: [
				{ name: 'First', value: 'first' },
				{ name: 'Least Connections', value: 'leastconn' },
				{ name: 'Round Robin', value: 'roundrobin' },
				{ name: 'Source IP Hash', value: 'source' },
				{ name: 'URI', value: 'uri' },
				{ name: 'URI Path', value: 'uri_path' },
			],
			default: 'roundrobin',
			description: 'Load balancing algorithm',
			displayOptions,
		},
		{
			displayName: 'Cookie Name',
			name: 'cookieName',
			type: 'string',
			default: '',
			description: 'Cookie name for stickiness',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 0,
			description: 'Farm port',
			displayOptions,
		},
		{
			displayName: 'Probe',
			name: 'probe',
			type: 'string',
			default: '',
			description: 'Health check probe type',
			displayOptions,
		},
		{
			displayName: 'Protocol',
			name: 'protocol',
			type: 'string',
			default: '',
			description: 'Farm protocol',
			displayOptions,
		},
		{
			displayName: 'Stickiness',
			name: 'stickiness',
			type: 'string',
			default: '',
			description: 'Stickiness type',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'Zone where the farm is located',
			displayOptions,
		},
	];
}

/**
 * Executes the Update HTTP Farm operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const body: IDataObject = {};
	const balance = this.getNodeParameter('balance', 0, '') as string;
	if (balance) body.balance = balance;
	const cookieName = this.getNodeParameter('cookieName', 0, '') as string;
	if (cookieName) body.cookieName = cookieName;
	const port = this.getNodeParameter('port', 0, 0) as number;
	if (port) body.port = port;
	const probe = this.getNodeParameter('probe', 0, '') as string;
	if (probe) body.probe = probe;
	const protocol = this.getNodeParameter('protocol', 0, '') as string;
	if (protocol) body.protocol = protocol;
	const stickiness = this.getNodeParameter('stickiness', 0, '') as string;
	if (stickiness) body.stickiness = stickiness;
	const zone = this.getNodeParameter('zone', 0, '') as string;
	if (zone) body.zone = zone;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/http/farm/${farmId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
