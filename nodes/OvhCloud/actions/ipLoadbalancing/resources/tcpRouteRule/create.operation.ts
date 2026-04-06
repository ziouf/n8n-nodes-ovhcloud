import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a new rule to a TCP route.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
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
			description: 'The ID of the TCP route',
			displayOptions,
		},
		{
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			required: true,
			description: 'Rule field to match',
			displayOptions,
		},
		{
			displayName: 'Match',
			name: 'match',
			type: 'string',
			default: '',
			required: true,
			description: 'Match type',
			displayOptions,
		},
		{
			displayName: 'Pattern',
			name: 'pattern',
			type: 'string',
			default: '',
			required: true,
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
 * Executes the Create TCP Route Rule operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const routeId = this.getNodeParameter('routeId', 0) as number;
	const body: IDataObject = {};
	body.field = this.getNodeParameter('field', 0) as string;
	body.match = this.getNodeParameter('match', 0) as string;
	body.pattern = this.getNodeParameter('pattern', 0) as string;
	body.negation = this.getNodeParameter('negation', 0, false) as boolean;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
