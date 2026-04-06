import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update a cluster for a DBaaS log service.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/cluster/{clusterId}
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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Cluster description',
			displayOptions,
		},
		{
			displayName: 'Title',
			name: 'title',
			type: 'string',
			default: '',
			description: 'Cluster title',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cluster operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', 0, '') as string;
	const title = this.getNodeParameter('title', 0, '') as string;
	if (description) body.description = description;
	if (title) body.title = title;
	const data = (await client.httpPut(`/dbaas/logs/${serviceName}/cluster/${clusterId}`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
