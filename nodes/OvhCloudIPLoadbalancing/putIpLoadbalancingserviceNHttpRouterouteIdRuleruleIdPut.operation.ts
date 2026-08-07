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
			displayName: 'RuleId',
			name: 'ruleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ruleid identifier',
			displayOptions,
		},
	];
}

/**
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const routeId = this.getNodeParameter('routeId', itemIndex) as string;
	const ruleId = this.getNodeParameter('ruleId', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPut('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'http' + '/' + 'route' + '/' + encodeURIComponent(routeId) + '/' + 'rule' + '/' + encodeURIComponent(ruleId), {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

