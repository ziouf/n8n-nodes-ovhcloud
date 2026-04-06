import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update an HTTP route rule's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name of the IP Load Balancer',
			displayOptions,
		},
		{
			displayName: 'Route ID',
			name: 'routeId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the HTTP route',
			displayOptions,
		},
		{
			displayName: 'Rule ID',
			name: 'ruleId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the rule',
			displayOptions,
		},
		{
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			description: 'Rule field to match',
			displayOptions,
		},
		{
			displayName: 'Match',
			name: 'match',
			type: 'string',
			default: '',
			description: 'Match type',
			displayOptions,
		},
		{
			displayName: 'Pattern',
			name: 'pattern',
			type: 'string',
			default: '',
			description: 'Pattern to match against',
			displayOptions,
		},
		{
			displayName: 'Negation',
			name: 'negation',
			type: 'boolean',
			default: false,
			description: 'Whether to negate the match',
			displayOptions,
		},
	];
}

/**
 * Executes the Update HTTP Route Rule operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const routeId = this.getNodeParameter('routeId', 0) as number;
	const ruleId = this.getNodeParameter('ruleId', 0) as number;
	const body: IDataObject = {};
	const field = this.getNodeParameter('field', 0, '') as string;
	if (field) body.field = field;
	const match = this.getNodeParameter('match', 0, '') as string;
	if (match) body.match = match;
	const pattern = this.getNodeParameter('pattern', 0, '') as string;
	if (pattern) body.pattern = pattern;
	body.negation = this.getNodeParameter('negation', 0, false) as boolean;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
