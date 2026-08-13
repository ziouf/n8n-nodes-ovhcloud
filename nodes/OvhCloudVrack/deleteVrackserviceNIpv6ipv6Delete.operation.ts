import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This action is destructive and cannot be undone.', displayOptions),
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
	];
}

/**
 * remove this IP v6 block from this vrack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/ipv6/{ipv6}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ipv6 = this.getNodeParameter('ipv6', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipv6' + '/' + encodeURIComponent(ipv6))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

