import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a rule for a Graylog stream.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
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
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			required: true,
			description: 'Field to match against',
			displayOptions,
		},
		{
			displayName: 'Inverted',
			name: 'inverted',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to invert the match',
			displayOptions,
		},
		{
			displayName: 'Rule Type',
			name: 'ruleType',
			type: 'options',
			options: [
				{ name: 'ALWAYS_MATCH', value: 'ALWAYS_MATCH' },
				{ name: 'CONTAINS', value: 'CONTAINS' },
				{ name: 'ENDS_WITH', value: 'ENDS_WITH' },
				{ name: 'EXACT', value: 'EXACT' },
				{ name: 'GREATER', value: 'GREATER' },
				{ name: 'LESS', value: 'LESS' },
				{ name: 'MATCH_INPUT', value: 'MATCH_INPUT' },
				{ name: 'REGEX', value: 'REGEX' },
				{ name: 'SMALLER', value: 'SMALLER' },
				{ name: 'STARTS_WITH', value: 'STARTS_WITH' },
			],
			default: 'CONTAINS',
			required: true,
			description: 'Type of rule',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			required: true,
			description: 'Value to match',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Rule description',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Stream Rule operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;
	const body: IDataObject = {
		field: this.getNodeParameter('field', 0) as string,
		inverted: this.getNodeParameter('inverted', 0) as boolean,
		ruleType: this.getNodeParameter('ruleType', 0) as string,
		value: this.getNodeParameter('value', 0) as string,
	};
	const description = this.getNodeParameter('description', 0, '') as string;
	if (description) body.description = description;
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/rule`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
