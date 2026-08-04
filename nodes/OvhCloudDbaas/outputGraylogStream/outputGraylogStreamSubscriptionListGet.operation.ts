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
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'The streamId identifier',
			displayOptions,
		},
		{
			displayName: 'Resource Name',
			name: 'resourceName',
			type: 'string',
			default: '',
			description: 'Filter by resource name (like)',
			displayOptions,
		},
		{
			displayName: 'Resource Type',
			name: 'resourceType',
			type: 'string',
			default: '',
			description: 'Filter by resource type (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the GET outputGraylogStreamSubscriptionListGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/subscription
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const streamId = this.getNodeParameter('streamId', itemIndex) as string;
	const qs: IDataObject = {};
	const resourceName = (this.getNodeParameter('resourceName', itemIndex, '') as string) || '';
	if (resourceName) {
		qs.resourceName = resourceName;
	}
	const resourceType = (this.getNodeParameter('resourceType', itemIndex, '') as string) || '';
	if (resourceType) {
		qs.resourceType = resourceType;
	}
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/graylog/stream/${encodeURIComponent(streamId)}/subscription`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
