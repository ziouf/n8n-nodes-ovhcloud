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
				description: 'Domain of the service',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Object Type',
			name: 'objectType',
			type: 'options',
			options: [
				{ name: 'Cluster', value: 'cluster' },
				{ name: 'Datacenter', value: 'datacenter' },
				{ name: 'Filer', value: 'filer' },
				{ name: 'Host', value: 'host' },
				{ name: 'VM', value: 'vm' },
			],
			default: 'cluster',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Vendor ID',
			name: 'vendorId',
			type: 'string',
			default: '',
			required: true,
			description: 'Object type ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OVHcloud ID for Vendor Object operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/vendor/ovhId
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.objectType = this.getNodeParameter('objectType', _itemIndex) as string;
	body.vendorId = this.getNodeParameter('vendorId', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/vendor/ovhId`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
