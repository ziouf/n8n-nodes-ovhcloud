import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an alert for a Graylog stream.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
			description: 'Alert description',
			displayOptions,
		},
		{
			displayName: 'Expression',
			name: 'expression',
			type: 'string',
			default: '',
			required: true,
			description: 'Alert expression',
			displayOptions,
		},
		{
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			required: true,
			description: 'Field to evaluate',
			displayOptions,
		},
		{
			displayName: 'Grace',
			name: 'grace',
			type: 'number',
			default: 0,
			required: true,
			description: 'Grace period in seconds',
			displayOptions,
		},
		{
			displayName: 'Repeat Notifications',
			name: 'repeatNotifications',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to repeat notifications',
			displayOptions,
		},
		{
			displayName: 'Threshold Type',
			name: 'thresholdType',
			type: 'options',
			options: [
				{ name: 'MEAN', value: 'MEAN' },
				{ name: 'MIN', value: 'MIN' },
				{ name: 'MAX', value: 'MAX' },
				{ name: 'TOTAL', value: 'TOTAL' },
			],
			default: 'MEAN',
			required: true,
			description: 'Type of threshold',
			displayOptions,
		},
		{
			displayName: 'Threshold',
			name: 'threshold',
			type: 'number',
			default: 0,
			required: true,
			description: 'Threshold value',
			displayOptions,
		},
		{
			displayName: 'Time Range',
			name: 'timeRange',
			type: 'number',
			default: 0,
			required: true,
			description: 'Time range in seconds',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'MESSAGE_COUNT', value: 'MESSAGE_COUNT' },
				{ name: 'FIELD_CONTENT', value: 'FIELD_CONTENT' },
				{ name: 'FIELD_VALUE', value: 'FIELD_VALUE' },
			],
			default: 'MESSAGE_COUNT',
			required: true,
			description: 'Alert type',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Full alert configuration as JSON. Overrides individual fields if provided.',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Stream Alert operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body: IDataObject = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;

	if (Object.keys(body).length === 0) {
		body.description = this.getNodeParameter('description', 0) as string;
		body.expression = this.getNodeParameter('expression', 0) as string;
		body.field = this.getNodeParameter('field', 0) as string;
		body.grace = this.getNodeParameter('grace', 0) as number;
		body.repeatNotifications = this.getNodeParameter('repeatNotifications', 0) as boolean;
		body.thresholdType = this.getNodeParameter('thresholdType', 0) as string;
		body.threshold = this.getNodeParameter('threshold', 0) as number;
		body.timeRange = this.getNodeParameter('timeRange', 0) as number;
		body.type = this.getNodeParameter('type', 0) as string;
	}

	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/alert`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
