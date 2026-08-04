import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	const ip = this.getNodeParameter('ip', itemIndex, '') as string; if (ip !== '') { body.ip = ip; }
	const netmask = this.getNodeParameter('netmask', itemIndex, '') as string; if (netmask !== '') { body.netmask = netmask; }
	const newDatacenterId = this.getNodeParameter('newDatacenterId', itemIndex) as number; if (newDatacenterId) { body.newDatacenterId = newDatacenterId; }
	const portgroup = this.getNodeParameter('portgroup', itemIndex, '') as string; if (portgroup !== '') { body.portgroup = portgroup; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway/reconfigure`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
