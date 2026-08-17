import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

/** Updates the password for backup FTP access on a dedicated server. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'getDedicatedServerServices',
						displayName: 'Dedicated Server Service Name',
						description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
						placeholder: 'ns123456.ip-123-45-678.eu',
					}),
					displayOptions,
				},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The new password for backup FTP access on the dedicated server',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const password = (this.getNodeParameter('password', _itemIndex ?? 0) as string) || '';

	await client.httpPost(`/dedicated/server/${serviceName}/features/backupFTP/password`, {
		password,
	});

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
