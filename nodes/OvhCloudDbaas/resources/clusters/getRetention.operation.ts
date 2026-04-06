import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific retention for a cluster.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/cluster/{clusterId}/retention/{retentionId}
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
		{
			displayName: 'Retention ID',
			name: 'retentionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the retention',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cluster Retention operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const retentionId = this.getNodeParameter('retentionId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/cluster/${clusterId}/retention/${retentionId}`,
	)) as IDataObject;
	return [{ json: data }];
}
