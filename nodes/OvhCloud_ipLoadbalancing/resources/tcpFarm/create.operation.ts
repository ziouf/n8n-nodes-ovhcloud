import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Add a new TCP Farm on an IP Load Balancer.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/farm
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
 * Executes the Create TCP Farm operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	body.balance = this.getNodeParameter('balance', 0) as string;
	const farmName = this.getNodeParameter('farmName', 0, '') as string;
	if (farmName) body.farmName = farmName;
	const port = this.getNodeParameter('port', 0, 0) as number;
	if (port) body.port = port;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/tcp/farm`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
