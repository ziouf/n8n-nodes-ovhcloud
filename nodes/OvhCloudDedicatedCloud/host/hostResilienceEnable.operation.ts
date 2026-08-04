import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
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
			displayName: 'Host ID',
			name: 'hostId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the host',
			displayOptions,
		},
		{
			displayName: 'Duration (Minutes)',
			name: 'duration',
			type: 'number',
			default: 0,
			description: 'Duration test in minutes. Host will be reconnected after this period (min:10min, max:24h, default:1h).',
			displayOptions,
		},
	];
}

/**
 * Executes the Start resilience test operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const hostId = this.getNodeParameter('hostId', itemIndex) as string;
	const body: IDataObject = {};
	const duration = this.getNodeParameter('duration', itemIndex) as number;
	if (duration) { body.duration = duration; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/resilience/enable`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
