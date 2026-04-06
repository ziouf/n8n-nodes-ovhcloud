import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update a TCP Farm's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
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
			displayName: 'Balance',
			name: 'balance',
			type: 'options',
			options: [
				{ name: 'Round Robin', value: 'roundrobin' },
				{ name: 'Least Connections', value: 'leastconn' },
				{ name: 'First', value: 'first' },
				{ name: 'Source IP Hash', value: 'source' },
			],
			default: 'roundrobin',
			description: 'Load balancing algorithm',
			displayOptions,
		},
		{
			displayName: 'Farm Name',
			name: 'farmName',
			type: 'string',
			default: '',
			description: 'Display name for the farm',
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
	];
}

/**
 * Executes the Update TCP Farm operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const body: IDataObject = {};
	const balance = this.getNodeParameter('balance', 0, '') as string;
	if (balance) body.balance = balance;
	const farmName = this.getNodeParameter('farmName', 0, '') as string;
	if (farmName) body.farmName = farmName;
	const port = this.getNodeParameter('port', 0, 0) as number;
	if (port) body.port = port;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
