import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'RouteId',
			name: 'routeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The routeid identifier',
			displayOptions,
		},
		{
			displayName: 'DisplayName',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'The displayname value',
			displayOptions,
		},
		{
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			description: 'The field value',
			displayOptions,
		},
		{
			displayName: 'Match',
			name: 'match',
			type: 'string',
			default: '',
			description: 'The match value',
			displayOptions,
		},
		{
			displayName: 'Negate',
			name: 'negate',
			type: 'string',
			default: '',
			description: 'The negate value',
			displayOptions,
		},
		{
			displayName: 'Pattern',
			name: 'pattern',
			type: 'string',
			default: '',
			description: 'The pattern value',
			displayOptions,
		},
		{
			displayName: 'SubField',
			name: 'subField',
			type: 'string',
			default: '',
			description: 'The subfield value',
			displayOptions,
		},
	];
}

/**
 * Add a new rule to your route
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const routeId = this.getNodeParameter('routeId', _itemIndex) as string;



	const displayName = this.getNodeParameter('displayName', _itemIndex) as string;
	const field = this.getNodeParameter('field', _itemIndex) as string;
	const match = this.getNodeParameter('match', _itemIndex) as string;
	const negate = this.getNodeParameter('negate', _itemIndex) as string;
	const pattern = this.getNodeParameter('pattern', _itemIndex) as string;
	const subField = this.getNodeParameter('subField', _itemIndex) as string;


const body: IDataObject = {
    displayName: displayName,
    field: field,
    match: match,
    negate: negate,
    pattern: pattern,
    subField: subField
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'route' + '/' + encodeURIComponent(routeId) + '/' + 'rule', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

