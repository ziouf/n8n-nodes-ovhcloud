import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', _itemIndex) as string;
	const body: IDataObject = {};
	body.macAddress = this.getNodeParameter('macAddress', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/enableCarp`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
