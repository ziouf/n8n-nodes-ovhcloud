import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Ip Address',
			name: 'ipAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The Ip Address parameter',
			displayOptions,
		},
	];
}

/**
 * Update an IP address attached to a VPS
 *
 * HTTP method: PUT
 * Endpoint: /vps/{serviceName}/ips/{ipAddress}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const ipAddress = this.getNodeParameter('ipAddress', itemIndex ?? 0) as string;

	const data = (await client.httpPut(`/vps/${serviceName}/ips/${ipAddress}`, {})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
