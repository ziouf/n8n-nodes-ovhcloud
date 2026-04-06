import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List URLs for an OpenSearch dashboard.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}/url
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
			description: 'The ID of the dashboard',
			displayOptions,
		},
	];
}

/**
 * Executes the List OpenSearch Dashboard URLs operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const osdId = this.getNodeParameter('osdId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/output/opensearch/osd/${osdId}/url`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
