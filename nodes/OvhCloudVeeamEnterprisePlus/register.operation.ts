import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the Veeam Enterprise Plus service',
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'Your Veeam Backup and Replication Server IP',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Your Veeam Backup and Replication username',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Veeam Backup and Replication associated password',
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const ip = this.getNodeParameter('ip', itemIndex) as string;
	const username = this.getNodeParameter('username', itemIndex) as string;
	const password = this.getNodeParameter('password', itemIndex) as string;

	const body = {
		ip,
		username,
		password,
	};

	const data = (await client.httpPost(
		`/veeam/veeamEnterprise/${serviceName}/register`,
		body,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
