import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get consumption data for a metrics service.
 *
 * HTTP method: GET
 * Endpoint: /metrics/{serviceName}/consumption
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the metrics service',
			displayOptions,
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Start date (ISO 8601)',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			description: 'End date (ISO 8601)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Consumption operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const qs: IDataObject = {};
	const from = this.getNodeParameter('from', 0, '') as string;
	const to = this.getNodeParameter('to', 0, '') as string;
	if (from) qs.from = from;
	if (to) qs.to = to;
	const data = (await client.httpGet(`/metrics/${serviceName}/consumption`, qs)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
