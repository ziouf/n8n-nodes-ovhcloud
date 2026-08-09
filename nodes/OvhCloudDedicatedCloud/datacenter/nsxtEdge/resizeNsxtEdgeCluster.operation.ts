import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Size',
			name: 'size',
			type: 'options',
			options: [
				{ name: 'Large', value: 'LARGE' },
				{ name: 'Medium', value: 'MEDIUM' },
				{ name: 'Extra Large', value: 'XLARGE' },
			],
			default: 'MEDIUM',
			required: true,
			description: 'Size of the NSX-T edge',
			displayOptions,
		},
	];
}

/**
 * Executes the Resize NSX-T edges on specified datacenter operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/resizeNsxtEdgeCluster
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.size = this.getNodeParameter('size', _itemIndex) as string;
	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/resizeNsxtEdgeCluster`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
