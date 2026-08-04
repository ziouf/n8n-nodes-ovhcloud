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
			required: true,
			description: 'Ip to set on your private gateway in your network',
			displayOptions,
		},
		{
			displayName: 'Netmask',
			name: 'netmask',
			type: 'string',
			default: '',
			required: true,
			description: 'Your netmask to set on the private gateway',
			displayOptions,
		},
		{
			displayName: 'Portgroup',
			name: 'portgroup',
			type: 'string',
			default: '',
			required: true,
			description: 'Portgroup in your VMware on OVHcloud used to deploy the private gateway',
			displayOptions,
		},
	];
}

/**
 * Executes the Deploy Private Management Gateway operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	body.ip = this.getNodeParameter('ip', itemIndex) as string;
	body.netmask = this.getNodeParameter('netmask', itemIndex) as string;
	body.portgroup = this.getNodeParameter('portgroup', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway/enable`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
