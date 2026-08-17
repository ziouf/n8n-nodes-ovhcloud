import { SERVICE_NAME } from '../serviceName';
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
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Count',
			name: 'count',
			type: 'number',
			default: 0,
			description: 'Number of edges wanted',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'options',
			options: [
				{ name: 'LARGE', value: 'LARGE' },
				{ name: 'MEDIUM', value: 'MEDIUM' },
				{ name: 'XLARGE', value: 'XLARGE' },
			],
			default: 'LARGE',
			description: 'Size of NSX-T edge (default to MEDIUM)',
			displayOptions,
		},
	];
}

/**
 * Executes the Check NSX-T Edge Deployment on Global Datastores operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/canDeployNsxtEdgesOnGlobalDatastores
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	const count = this.getNodeParameter('count', _itemIndex) as number; if (count) { qs.count = count; }
	const size = this.getNodeParameter('size', _itemIndex, '') as string; if (size !== '') { qs.size = size; }
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/canDeployNsxtEdgesOnGlobalDatastores`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
