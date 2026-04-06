import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List UDP Farms for an IP Load Balancer.
 *
 * HTTP method: GET
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
			displayName: 'Vrack Network ID',
			name: 'vrackNetworkId',
			type: 'number',
			default: 0,
			description: 'Filter by vRack network ID',
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
 * Executes the List UDP Farms operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', 0, 0) as number;
	const zone = this.getNodeParameter('zone', 0, '') as string;
	const qs: Record<string, string> = {};
	if (vrackNetworkId) qs.vrackNetworkId = String(vrackNetworkId);
	if (zone) qs.zone = zone;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/udp/farm`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
