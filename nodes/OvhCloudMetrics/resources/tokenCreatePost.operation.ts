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
			displayName: 'Permission',
			name: 'permission',
			type: 'options',
			default: 'read',
			required: true,
			options: [
				{ name: 'Read', value: 'read' },
				{ name: 'Write', value: 'write' },
			],
			description: 'Type of the new token. Read or Write.',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description for the new token',
			displayOptions,
		},
		{
			displayName: 'Labels',
			name: 'labels',
			type: 'json',
			default: '[]',
			description:
				'Labels for the new token, as a JSON array of objects with key and value (e.g. [{"key": "env", "value": "prod"}])',
			displayOptions,
		},
	];
}

/**
 * Create a new token for a Metrics service.
 *
 * HTTP method: POST
 * Endpoint: /metrics/{serviceName}/token
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const permission = this.getNodeParameter('permission', 0) as string;
	const description = (this.getNodeParameter('description', 0, '') as string) || '';
	const labels = this.getNodeParameter('labels', 0, '[]') as string;

	const body: IDataObject = { permission };
	if (description) body.description = description;
	if (labels && labels !== '[]') {
		body.labels = JSON.parse(labels);
	}

	const data = (await client.httpPost(
		`/metrics/${encodeURIComponent(serviceName)}/token`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
