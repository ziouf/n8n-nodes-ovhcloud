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
			displayName: 'Ipv6',
			name: 'ipv6',
			type: 'string',
			default: '',
			required: true,
			description: 'The IPv6 address',
			displayOptions,
		},
		{
			displayName: 'RoutedSubrange',
			name: 'routedSubrange',
			type: 'string',
			default: '',
			required: true,
			description: 'The routed sub-range',
			displayOptions,
		},
	];
}

/**
 * unroute subrange from your vrack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/ipv6/{ipv6}/routedSubrange/{routedSubrange}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ipv6 = this.getNodeParameter('ipv6', _itemIndex) as string;
	const routedSubrange = this.getNodeParameter('routedSubrange', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipv6' + '/' + encodeURIComponent(ipv6) + '/' + 'routedSubrange' + '/' + encodeURIComponent(routedSubrange))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

