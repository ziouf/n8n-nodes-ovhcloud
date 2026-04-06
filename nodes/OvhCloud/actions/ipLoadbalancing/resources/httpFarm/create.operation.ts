import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a new HTTP Farm on an IP Load Balancer.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/http/farm
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
				{ name: 'URI', value: 'uri' },
				{ name: 'URI Path', value: 'uri_path' },
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
			default: 80,
			description: 'Farm port',
			displayOptions,
		},
		{
			displayName: 'Probe Type',
			name: 'probeType',
			type: 'string',
			default: '',
			description: 'Health check probe type',
			displayOptions,
		},
	];
}

/**
 * Executes the Create HTTP Farm operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	body.balance = this.getNodeParameter('balance', 0) as string;
	const farmName = this.getNodeParameter('farmName', 0, '') as string;
	if (farmName) body.farmName = farmName;
	const port = this.getNodeParameter('port', 0, 80) as number;
	body.port = port;
	const probeType = this.getNodeParameter('probeType', 0, '') as string;
	if (probeType) body.probeType = probeType;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/http/farm`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
