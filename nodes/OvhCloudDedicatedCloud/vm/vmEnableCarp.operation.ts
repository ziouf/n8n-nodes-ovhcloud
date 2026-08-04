import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
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
			displayName: 'Virtual Machine ID',
			name: 'vmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the virtual machine',
			displayOptions,
		},
		{
			displayName: 'MAC Address',
			name: 'macAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Mac address of the port to enable Carp',
			displayOptions,
		},
	];
}

/**
 * Executes the Enable CARP on virtual machine on VM Network portgroup operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableCarp
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', itemIndex) as string;
	const body: IDataObject = {};
	body.macAddress = this.getNodeParameter('macAddress', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/enableCarp`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
