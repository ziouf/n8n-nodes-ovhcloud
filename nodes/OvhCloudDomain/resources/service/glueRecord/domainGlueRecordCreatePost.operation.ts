import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			required: true,
			description: 'Host of the glue record',
			displayOptions,
		},
		{
			displayName: 'Ips',
			name: 'ips',
			type: 'json',
			default: '',
			required: true,
			description: 'IP addresses of the glue record',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a glue record operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/glueRecord
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const host = this.getNodeParameter('host', _itemIndex, '') as string;
		body['host'] = host;
		const ips = this.getNodeParameter('ips', _itemIndex, '') as string;
		if (ips !== '') body['ips'] = JSON.parse(ips);

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/glueRecord`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
