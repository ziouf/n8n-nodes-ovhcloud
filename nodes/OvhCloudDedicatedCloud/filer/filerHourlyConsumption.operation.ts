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
			displayName: 'Filer ID',
			name: 'filerId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get datastore hourly consumption operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const filerId = this.getNodeParameter('filerId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/hourlyConsumption`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
