import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

/** Deletes an IP ACL rule from backup FTP access control on a dedicated server. */
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
			description: 'The IP block to delete from backup FTP ACL (e.g. 123.45.678.0/24)',
			placeholder: 'e.g. 123.45.678.0/24',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const ipBlock = (this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string) || '';

	await client.httpDelete(
		`/dedicated/server/${serviceName}/features/backupFTP/access/delete?ipBlock=${encodeURIComponent(ipBlock)}`,
	);

	return this.helpers.returnJsonArray([{ serviceName, ipBlock, success: true }]);
}
