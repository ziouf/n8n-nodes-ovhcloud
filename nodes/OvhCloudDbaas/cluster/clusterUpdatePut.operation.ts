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
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '',
			description: 'Request body (dbaas.logs.ClusterUpdate)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT clusterUpdatePut operation.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/cluster/{clusterId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const clusterId = this.getNodeParameter('clusterId', itemIndex) as string;
	const bodyJson = (this.getNodeParameter('body', itemIndex, '') as string) || '';
	const body: IDataObject = {};
	if (bodyJson) {
		Object.assign(body, JSON.parse(bodyJson));
	}
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/dbaas/logs/${encodeURIComponent(serviceName)}/cluster/${encodeURIComponent(clusterId)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
