import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OverTheBox Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your OverTheBox offer (e.g. overthebox-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOverTheBoxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'overthebox-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			description: 'Filter on a specific kind (e.g. audit)',
			displayOptions,
		},
	];
}

/**
 * List subscription IDs for a cluster.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/{serviceName}/log/subscription
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const kind = (this.getNodeParameter('kind', 0, '') as string) || '';

	const qs: IDataObject = {};
	if (kind) qs.kind = kind;
	const data = (await client.httpGet(
		`/overTheBox/${encodeURIComponent(serviceName)}/log/subscription`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { subscriptionId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
