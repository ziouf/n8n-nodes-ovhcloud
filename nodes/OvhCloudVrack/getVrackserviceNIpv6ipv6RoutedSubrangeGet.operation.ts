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
	];
}

/**
 * subrange routed into your vrack
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/ipv6/{ipv6}/routedSubrange
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ipv6 = this.getNodeParameter('ipv6', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipv6' + '/' + encodeURIComponent(ipv6) + '/' + 'routedSubrange')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

