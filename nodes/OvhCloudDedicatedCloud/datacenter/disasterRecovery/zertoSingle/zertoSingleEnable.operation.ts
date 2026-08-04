import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

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
			displayName: 'Local VRA Network',
			name: 'localVraNetwork',
			type: 'string',
			default: '',
			required: true,
			description: 'Internal zerto subnet for your OVH VMware on OVHcloud (ip/cidr)',
			displayOptions,
		},
		{
			displayName: 'OVH Endpoint IP',
			name: 'ovhEndpointIp',
			type: 'string',
			default: '',
			required: true,
			description: 'Your OVH VMware on OVHcloud public IP for the secured replication data tunnel endpoint',
			displayOptions,
		},
		{
			displayName: 'Remote VRA Network',
			name: 'remoteVraNetwork',
			type: 'string',
			default: '',
			description: 'Deprecated - Internal zerto subnet of your onsite infrastructure (ip/cidr)',
			displayOptions,
		},
	];
}

/**
 * Executes the Enable Zerto Single Disaster Recovery operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	body.localVraNetwork = this.getNodeParameter('localVraNetwork', itemIndex) as string;
	body.ovhEndpointIp = this.getNodeParameter('ovhEndpointIp', itemIndex) as string;
	const remoteVraNetwork = this.getNodeParameter('remoteVraNetwork', itemIndex, '') as string; if (remoteVraNetwork !== '') { body.remoteVraNetwork = remoteVraNetwork; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/enable`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
