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
	];
}

/**
 * HTTP routes for this iplb
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const routeId = this.getNodeParameter('routeId', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'route' + '/' + encodeURIComponent(routeId) + '/' + 'rule')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

