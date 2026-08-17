import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Add an IP access rule to the VPS backup FTP (access control). */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'IP Block (CIDR)',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block authorized to access the VPS backup FTP (e.g. 10.245.36.0/28)',
			placeholder: '10.245.36.0/28',
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
	const ipBlock = this.getNodeParameter('ipBlock', itemIndex ?? 0) as string;

	const data = (await client.httpPost(
		`/vps/${serviceName}/backupftp/access/${encodeURIComponent(ipBlock)}`,
		{},
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
