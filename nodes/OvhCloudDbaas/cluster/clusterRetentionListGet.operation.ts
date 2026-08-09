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
	];
}

/**
 * Executes the GET clusterRetentionListGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/cluster/{clusterId}/retention
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/cluster/${encodeURIComponent(clusterId)}/retention`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
