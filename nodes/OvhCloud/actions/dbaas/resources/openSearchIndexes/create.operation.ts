import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an OpenSearch index for a DBaaS log service.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/index
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
		{
			displayName: 'Title',
			name: 'title',
			type: 'string',
			default: '',
			required: true,
			description: 'Title for the index',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description for the index',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Full index configuration as JSON. Overrides individual fields if provided.',
			displayOptions,
		},
	];
}

/**
 * Executes the Create OpenSearch Index operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body: IDataObject = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;

	if (Object.keys(body).length === 0) {
		body.title = this.getNodeParameter('title', 0) as string;
		const description = this.getNodeParameter('description', 0, '') as string;
		if (description) body.description = description;
	}

	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/output/opensearch/index`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
