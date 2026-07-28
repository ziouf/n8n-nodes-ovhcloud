import {
	type IDisplayOptions,
	type INodeExecutionData,
	type INodeProperties,
	IExecuteFunctions
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Adds an IP ACL rule to the dedicated server's FTP backup access control. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{ displayName: 'From List', name: 'list', type: 'list', typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true } },
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'ns123456.ip-123-45-678.eu' },
			],
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The authorized IP block (e.g. 192.168.1.0/24)',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const ipBlock = this.getNodeParameter('ipBlock', 0, '') as string;

	await client.httpPost(`/dedicated/server/${serviceName}/features/backupFTP/access`, {});
	return this.helpers.returnJsonArray([{ serviceName, ipBlock }]);
}
