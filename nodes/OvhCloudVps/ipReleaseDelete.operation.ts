import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/**
 * Release (detach) an additional IP attached to the VPS.
 *
 * HTTP method: DELETE
 * Endpoint: /vps/{serviceName}/ips/{ipAddress}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'IP Address',
			name: 'ipAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address to release (e.g. 198.51.100.1)',
			placeholder: '198.51.100.1',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const ipAddress = this.getNodeParameter('ipAddress', itemIndex ?? 0) as string;

	const data = (await client.httpDelete(
		`/vps/${serviceName}/ips/${encodeURIComponent(ipAddress)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
