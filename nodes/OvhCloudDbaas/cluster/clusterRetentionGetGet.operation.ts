import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
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
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The clusterId identifier',
			displayOptions,
		},
		{
			displayName: 'Retention ID',
			name: 'retentionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The retentionId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the GET clusterRetentionGetGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/cluster/{clusterId}/retention/{retentionId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const clusterId = this.getNodeParameter('clusterId', itemIndex) as string;
	const retentionId = this.getNodeParameter('retentionId', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/cluster/${encodeURIComponent(clusterId)}/retention/${encodeURIComponent(retentionId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
