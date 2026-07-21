import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns123456.ip-123-45-678.eu',
				},
			],
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;

	if (!this.getNodeParameter('ipBlockFilter', itemIndex)) {
		const data = (await client.httpGet(
			`/dedicated/server/${serviceName}/features/backupFTP/access`,
		)) as IDataObject;
		return this.helpers.returnJsonArray([data]);
	}

	const ipBlockFilter = this.getNodeParameter('ipBlockFilter', itemIndex) as string;
	const qs: IDataObject = { ipBlock: ipBlockFilter };
	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/features/backupFTP/access`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
