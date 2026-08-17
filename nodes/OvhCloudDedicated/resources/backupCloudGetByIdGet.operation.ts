import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
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
			displayName: 'Backup Cloud ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The cloud backup instance identifier (e.g. 1234567)',
			placeholder: '1234567',
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

	let backupId: string | undefined;
	try {
		backupId = (this.getNodeParameter('backupId', itemIndex ?? 0) ?? '') as string;
	} catch {
		throw new Error('"Backup Cloud ID" is required');
	}

	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/features/backupCloud/get/${encodeURIComponent(String(backupId))}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
