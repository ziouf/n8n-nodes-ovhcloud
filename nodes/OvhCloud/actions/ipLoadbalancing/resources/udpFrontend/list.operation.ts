import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List UDP frontends for an IP Load Balancer.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/frontend
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
			displayName: 'Default Farm ID',
			name: 'defaultFarmId',
			type: 'number',
			default: 0,
			description: 'Filter by default farm ID',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 0,
			description: 'Filter by port',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'Filter by zone',
			displayOptions,
		},
	];
}

/**
 * Executes the List UDP Frontends operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const defaultFarmId = this.getNodeParameter('defaultFarmId', 0, 0) as number;
	const port = this.getNodeParameter('port', 0, 0) as number;
	const zone = this.getNodeParameter('zone', 0, '') as string;
	const qs: Record<string, string> = {};
	if (defaultFarmId) qs.defaultFarmId = String(defaultFarmId);
	if (port) qs.port = String(port);
	if (zone) qs.zone = zone;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/udp/frontend`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
