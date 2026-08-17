import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Datacenter',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Ip to set on your private gateway in your network',
			displayOptions,
		},
		{
			displayName: 'Netmask',
			name: 'netmask',
			type: 'string',
			default: '',
			description: 'Your netmask to set on the private gateway',
			displayOptions,
		},
		{
			displayName: 'New Datacenter ID',
			name: 'newDatacenterId',
			type: 'number',
			default: 0,
			description: 'Datacenter ID where your private gateway will be moved',
			displayOptions,
		},
		{
			displayName: 'Portgroup',
			name: 'portgroup',
			type: 'string',
			default: '',
			description: 'Portgroup in your VMware on OVHcloud used to deploy the private gateway',
			displayOptions,
		},
	];
}

/**
 * Executes the Reconfigure Private Management Gateway operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/reconfigure
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const ip = this.getNodeParameter('ip', _itemIndex, '') as string; if (ip !== '') { body.ip = ip; }
	const netmask = this.getNodeParameter('netmask', _itemIndex, '') as string; if (netmask !== '') { body.netmask = netmask; }
	const newDatacenterId = this.getNodeParameter('newDatacenterId', _itemIndex) as number; if (newDatacenterId) { body.newDatacenterId = newDatacenterId; }
	const portgroup = this.getNodeParameter('portgroup', _itemIndex, '') as string; if (portgroup !== '') { body.portgroup = portgroup; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway/reconfigure`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
