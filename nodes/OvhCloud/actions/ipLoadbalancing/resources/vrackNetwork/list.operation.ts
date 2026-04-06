import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List private networks in the vRack attached to an IP Load Balancer.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network
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
			displayName: 'Subnet',
			name: 'subnet',
			type: 'string',
			default: '',
			description: 'Filter by subnet',
			displayOptions,
		},
		{
			displayName: 'VLAN',
			name: 'vlan',
			type: 'number',
			default: 0,
			description: 'Filter by VLAN ID',
			displayOptions,
		},
	];
}

/**
 * Executes the List vRack Networks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const subnet = this.getNodeParameter('subnet', 0, '') as string;
	const vlan = this.getNodeParameter('vlan', 0, 0) as number;
	const qs: Record<string, string> = {};
	if (subnet) qs.subnet = subnet;
	if (vlan) qs.vlan = String(vlan);
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/vrack/network`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
