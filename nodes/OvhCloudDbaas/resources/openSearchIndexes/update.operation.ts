import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update an OpenSearch index for a DBaaS log service.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/index/{indexId}
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
			displayName: 'Index ID',
			name: 'indexId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the index to update',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Index fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update OpenSearch Index operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const indexId = this.getNodeParameter('indexId', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/dbaas/logs/${serviceName}/output/opensearch/index/${indexId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
