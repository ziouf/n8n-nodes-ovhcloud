import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'New Password',
			name: 'newPassword',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The new password for the database user',
			displayOptions,
		},
	];
}

/**
 * Change database password
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex ?? 0) as string;
	const newPassword = this.getNodeParameter('newPassword', _itemIndex ?? 0) as string;
	const data = await client.httpPut(
		`/hosting/web/database/${serviceName}/${databaseName}/changePassword`,
		{ password: newPassword },
	);
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
