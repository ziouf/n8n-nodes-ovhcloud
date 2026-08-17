import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Add a failover IP to the VPS. */
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
			description: 'The failover IP address to add (e.g. 123.456.789.0)',
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

	const data = (await client.httpPost(`/vps/${serviceName}/ips`, { ip: ipAddress })) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
