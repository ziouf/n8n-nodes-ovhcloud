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
			displayName: 'Metrics Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Metrics service name (e.g. metrics-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getMetricsServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'metrics-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'number',
			default: 0,
			description: 'Number of minutes to fetch consumption for. Default is 60 minutes.',
			displayOptions,
		},
	];
}

/**
 * Get consumption for a Metrics service.
 *
 * HTTP method: GET
 * Endpoint: /metrics/{serviceName}/consumption
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const duration = this.getNodeParameter('duration', 0, undefined) as number | undefined;

	const qs: IDataObject = {};
	if (duration !== undefined && !Number.isNaN(duration)) {
		qs.duration = duration;
	}
	const data = (await client.httpGet(
		`/metrics/${encodeURIComponent(serviceName)}/consumption`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
