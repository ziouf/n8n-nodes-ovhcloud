import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

 
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

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex) as string;
	const username = this.getNodeParameter('username', _itemIndex) as string;
	const password = this.getNodeParameter('password', _itemIndex) as string;

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
