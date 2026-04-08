import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update an OpenSearch dashboard for a DBaaS log service.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}
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
			displayName: 'OSD ID',
			name: 'osdId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the dashboard to update',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Dashboard fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update OpenSearch Dashboard operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const osdId = this.getNodeParameter('osdId', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/dbaas/logs/${serviceName}/output/opensearch/osd/${osdId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
