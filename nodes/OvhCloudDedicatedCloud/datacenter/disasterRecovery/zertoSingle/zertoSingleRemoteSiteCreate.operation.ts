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
			displayName: 'Label',
			name: 'label',
			type: 'string',
			default: '',
			required: true,
			description: 'The name for this connection',
			displayOptions,
		},
		{
			displayName: 'Pre Shared Key',
			name: 'preSharedKey',
			type: 'string',
			default: '',
			required: true,
			description: 'Pre-Shared Key to secure data transfer between both sites',
			displayOptions,
		},
		{
			displayName: 'Remote Endpoint Public IP',
			name: 'remoteEndpointPublicIp',
			type: 'string',
			default: '',
			required: true,
			description: 'Your onsite endpoint public IP for the secured replication data tunnel',
			displayOptions,
		},
		{
			displayName: 'Remote VRA Network',
			name: 'remoteVraNetwork',
			type: 'string',
			default: '',
			required: true,
			description: 'Internal zerto subnet of your onsite infrastructure (ip/cidr)',
			displayOptions,
		},
		{
			displayName: 'Remote Zvm Internal IP',
			name: 'remoteZvmInternalIp',
			type: 'string',
			default: '',
			required: true,
			description: 'Internal ZVM ip of your onsite infrastructure',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Zerto Single Remote Site operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/remoteSites
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.label = this.getNodeParameter('label', _itemIndex) as string;
	body.preSharedKey = this.getNodeParameter('preSharedKey', _itemIndex) as string;
	body.remoteEndpointPublicIp = this.getNodeParameter('remoteEndpointPublicIp', _itemIndex) as string;
	body.remoteVraNetwork = this.getNodeParameter('remoteVraNetwork', _itemIndex) as string;
	body.remoteZvmInternalIp = this.getNodeParameter('remoteZvmInternalIp', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/remoteSites`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
