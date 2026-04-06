import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List subscriptions for a Graylog stream.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/subscription
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
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the stream',
			displayOptions,
		},
		{
			displayName: 'Resource Name',
			name: 'resourceName',
			type: 'string',
			default: '',
			description: 'Filter by resource name',
			displayOptions,
		},
		{
			displayName: 'Resource Type',
			name: 'resourceType',
			type: 'string',
			default: '',
			description: 'Filter by resource type',
			displayOptions,
		},
	];
}

/**
 * Executes the List Stream Subscriptions operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;
	const qs: IDataObject = {};
	const resourceName = this.getNodeParameter('resourceName', 0, '') as string;
	const resourceType = this.getNodeParameter('resourceType', 0, '') as string;
	if (resourceName) qs.resourceName = resourceName;
	if (resourceType) qs.resourceType = resourceType;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/subscription`,
		qs,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
