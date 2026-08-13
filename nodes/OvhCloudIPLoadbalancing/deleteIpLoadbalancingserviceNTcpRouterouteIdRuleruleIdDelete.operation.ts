import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'RouteId',
			name: 'routeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The route ID',
			displayOptions,
		},
		{
			displayName: 'RuleId',
			name: 'ruleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The rule ID',
			displayOptions,
		},
	];
}

/**
 * Delete this rule from the route
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const routeId = this.getNodeParameter('routeId', _itemIndex) as string;
	const ruleId = this.getNodeParameter('ruleId', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'route' + '/' + encodeURIComponent(routeId) + '/' + 'rule' + '/' + encodeURIComponent(ruleId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

