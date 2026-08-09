import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'Subnet',
			name: 'subnet',
			type: 'string',
			default: '',
			description: 'The subnet parameter',
			displayOptions,
		},
		{
			displayName: 'Vlan',
			name: 'vlan',
			type: 'string',
			default: '',
			description: 'The vlan parameter',
			displayOptions,
		},
	];
}

/**
 * Descriptions of private networks in the vRack attached to this Load Balancer
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const subnet = this.getNodeParameter('subnet', _itemIndex) as string;
	const vlan = this.getNodeParameter('vlan', _itemIndex) as string;


const qs: IDataObject = {
    subnet: subnet,
    vlan: vlan
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'vrack' + '/' + 'network', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

