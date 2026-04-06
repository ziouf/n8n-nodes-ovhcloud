import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List retentions for a cluster.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/cluster/{clusterId}/retention
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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the cluster',
			displayOptions,
		},
	];
}

/**
 * Executes the List Cluster Retentions operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/cluster/${clusterId}/retention`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
