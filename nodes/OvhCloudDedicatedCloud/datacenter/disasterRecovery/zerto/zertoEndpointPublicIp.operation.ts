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
			displayName: 'New Endpoint Public IP',
			name: 'newEndpointPublicIp',
			type: 'string',
			default: '',
			required: true,
			description: 'Your new public IP for the secured replication data tunnel endpoint',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Zerto Endpoint Public IP operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endpointPublicIp
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	body.newEndpointPublicIp = this.getNodeParameter('newEndpointPublicIp', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/endpointPublicIp`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
