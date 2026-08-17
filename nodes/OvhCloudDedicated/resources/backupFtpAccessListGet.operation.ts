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
			displayName: 'IP Block Filter',
			name: 'ipBlockFilter',
			type: 'string',
			default: '',
			description: 'Filter ACLs by IP block (e.g. 123.45.678.0/24)',
			placeholder: 'e.g. 123.45.678.0/24',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;

	if (!this.getNodeParameter('ipBlockFilter', _itemIndex)) {
		const data = (await client.httpGet(
			`/dedicated/server/${serviceName}/features/backupFTP/access`,
		)) as IDataObject;
		return this.helpers.returnJsonArray([data]);
	}

	const ipBlockFilter = this.getNodeParameter('ipBlockFilter', _itemIndex) as string;
	const qs: IDataObject = { ipBlock: ipBlockFilter };
	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/features/backupFTP/access`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
