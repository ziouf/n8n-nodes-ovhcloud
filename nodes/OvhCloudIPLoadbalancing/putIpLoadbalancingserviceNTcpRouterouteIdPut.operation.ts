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
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const routeId = this.getNodeParameter('routeId', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPut('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'route' + '/' + encodeURIComponent(routeId), {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

