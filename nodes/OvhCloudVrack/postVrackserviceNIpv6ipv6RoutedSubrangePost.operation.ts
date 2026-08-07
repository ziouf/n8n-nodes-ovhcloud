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
			displayName: 'Ipv6',
			name: 'ipv6',
			type: 'string',
			default: '',
			required: true,
			description: 'The ipv6 identifier',
			displayOptions,
		},
		{
			displayName: 'Nexthop',
			name: 'nexthop',
			type: 'string',
			default: '',
			description: 'The nexthop value',
			displayOptions,
		},
		{
			displayName: 'RoutedSubrange',
			name: 'routedSubrange',
			type: 'string',
			default: '',
			description: 'The routedsubrange value',
			displayOptions,
		},
	];
}

/**
 * route a subrange of your IP v6 block into your vrack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/ipv6/{ipv6}/routedSubrange
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const ipv6 = this.getNodeParameter('ipv6', itemIndex) as string;



	const nexthop = this.getNodeParameter('nexthop', itemIndex) as string;
	const routedSubrange = this.getNodeParameter('routedSubrange', itemIndex) as string;


const body: IDataObject = {
    nexthop: nexthop,
    routedSubrange: routedSubrange
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipv6' + '/' + encodeURIComponent(ipv6) + '/' + 'routedSubrange', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

