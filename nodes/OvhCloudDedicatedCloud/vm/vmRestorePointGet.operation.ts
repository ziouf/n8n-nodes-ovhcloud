import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
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
			displayName: 'Virtual Machine ID',
			name: 'vmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the virtual machine',
			displayOptions,
		},
		{
			displayName: 'Restore Point ID',
			name: 'restorePointId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the restore point',
			displayOptions,
		},
	];
}

/**
 * Executes the Get restore point operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', _itemIndex) as string;
	const restorePointId = this.getNodeParameter('restorePointId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/restorePoints/${restorePointId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
