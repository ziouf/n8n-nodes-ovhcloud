import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a rule for a Graylog stream.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
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
			displayName: 'Rule ID',
			name: 'ruleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the rule to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Stream Rule operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;
	const ruleId = this.getNodeParameter('ruleId', 0) as string;
	const data = (await client.httpDelete(
		`/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/rule/${ruleId}`,
	)) as IDataObject;
	return [{ json: data }];
}
