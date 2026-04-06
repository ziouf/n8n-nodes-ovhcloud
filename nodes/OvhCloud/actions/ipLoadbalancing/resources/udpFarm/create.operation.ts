import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a new UDP Farm on an IP Load Balancer.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/farm
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
 * Executes the Create UDP Farm operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	const farmName = this.getNodeParameter('farmName', 0, '') as string;
	if (farmName) body.farmName = farmName;
	const port = this.getNodeParameter('port', 0, 0) as number;
	if (port) body.port = port;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/udp/farm`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
