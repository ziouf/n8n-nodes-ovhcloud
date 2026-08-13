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
		{
			displayName: 'Node',
			name: 'node',
			type: 'options',
			options: [
				{ name: 'Master', value: 'master' },
				{ name: 'Slave', value: 'slave' },
			],
			default: 'master',
			description: 'Filer cluster node used to get location (default value: master)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get datastore location operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/location
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const filerId = this.getNodeParameter('filerId', _itemIndex) as string;
	const node = this.getNodeParameter('node', _itemIndex, '') as string;
	const qs: IDataObject = {};
	if (node !== '') { qs.node = node; }
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/location`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
