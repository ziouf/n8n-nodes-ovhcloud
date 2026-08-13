import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the cluster',
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
	];
}

/**
 * Executes the Get Cluster operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/cluster/${clusterId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
