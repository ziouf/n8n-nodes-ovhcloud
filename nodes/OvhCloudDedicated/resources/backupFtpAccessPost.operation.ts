import {
	type IDisplayOptions,
	type INodeExecutionData,
	type INodeProperties,
	IExecuteFunctions
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

/** Adds an IP ACL rule to the dedicated server's FTP backup access control. */
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

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0, '') as string;

	await client.httpPost(`/dedicated/server/${serviceName}/features/backupFTP/access`, {});
	return this.helpers.returnJsonArray([{ serviceName, ipBlock }]);
}
