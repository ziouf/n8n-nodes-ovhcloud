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
			displayName: 'NSX-T Edge ID',
			name: 'nsxtEdgeId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the NSX-T Edge',
			displayOptions,
		},
	];
}

/**
 * Executes the Stop NSX-T Edge Resilience Test operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/disable
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const nsxtEdgeId = this.getNodeParameter('nsxtEdgeId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/nsxtEdge/${nsxtEdgeId}/resilience/disable`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
