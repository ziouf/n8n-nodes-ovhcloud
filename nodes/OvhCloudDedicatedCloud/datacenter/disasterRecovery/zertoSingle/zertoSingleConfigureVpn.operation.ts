import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'Domain of the service',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
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
			displayName: 'Pre Shared Key',
			name: 'preSharedKey',
			type: 'string',
			default: '',
			required: true,
			description: 'Pre-Shared Key to secure data transfer between both sites',
			displayOptions,
		},
		{
			displayName: 'Remote Endpoint Internal IP',
			name: 'remoteEndpointInternalIp',
			type: 'string',
			default: '',
			required: true,
			description: 'Your onsite endpoint internal IP for the secured replication data tunnel',
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
 * Executes the Configure Zerto Single VPN operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.preSharedKey = this.getNodeParameter('preSharedKey', _itemIndex) as string;
	body.remoteEndpointInternalIp = this.getNodeParameter('remoteEndpointInternalIp', _itemIndex) as string;
	body.remoteEndpointPublicIp = this.getNodeParameter('remoteEndpointPublicIp', _itemIndex) as string;
	const remoteVraNetwork = this.getNodeParameter('remoteVraNetwork', _itemIndex, '') as string; if (remoteVraNetwork !== '') { body.remoteVraNetwork = remoteVraNetwork; }
	body.remoteZvmInternalIp = this.getNodeParameter('remoteZvmInternalIp', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/configureVpn`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
