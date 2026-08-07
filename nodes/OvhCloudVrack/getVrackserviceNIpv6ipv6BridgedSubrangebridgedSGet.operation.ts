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
			displayName: 'BridgedSubrange',
			name: 'bridgedSubrange',
			type: 'string',
			default: '',
			required: true,
			description: 'The bridgedsubrange identifier',
			displayOptions,
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const ipv6 = this.getNodeParameter('ipv6', itemIndex) as string;
	const bridgedSubrange = this.getNodeParameter('bridgedSubrange', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipv6' + '/' + encodeURIComponent(ipv6) + '/' + 'bridgedSubrange' + '/' + encodeURIComponent(bridgedSubrange))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

