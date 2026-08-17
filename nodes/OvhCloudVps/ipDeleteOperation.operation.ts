import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Release (delete) a failover IP attached to the VPS. The IP is permanently lost after this operation. */
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
			description: 'The IP address to release from the VPS (permanently lost)',
			placeholder: '123.456.789.0',
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

	await client.httpDelete(`/vps/${serviceName}/ips/${encodeURIComponent(ipAddress)}`);
	return this.helpers.returnJsonArray([{}]);
}
