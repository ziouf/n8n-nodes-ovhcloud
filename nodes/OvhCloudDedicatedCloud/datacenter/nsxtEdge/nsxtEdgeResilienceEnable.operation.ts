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
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'number',
			default: 0,
			description: 'Duration test in minutes. NSX-T Edge will be reconnected after this period (min:10min, max:24h, default:1h).',
			displayOptions,
		},
	];
}

/**
 * Executes the Start NSX-T Edge Resilience Test operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/enable
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const nsxtEdgeId = this.getNodeParameter('nsxtEdgeId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const duration = this.getNodeParameter('duration', _itemIndex) as number; if (duration) { body.duration = duration; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/nsxtEdge/${nsxtEdgeId}/resilience/enable`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
