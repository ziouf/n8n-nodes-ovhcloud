import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'AllDom Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your AllDom service (e.g. alldom1234567)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getAllDomServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'alldom1234567',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Domain Filter',
			name: 'domain',
			type: 'string',
			default: '',
			description: 'Filter the value of domain property (like)',
			displayOptions,
		},
	];
}

/**
 * List all domains attached to this AllDom service.
 *
 * HTTP method: GET
 * Endpoint: /allDom/{serviceName}/domain
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const qs: IDataObject = {};

	const domain = this.getNodeParameter('domain', _itemIndex ?? 0, '') as string;
	if (domain !== '' && domain !== undefined) qs['domain'] = domain;

	const data = (await client.httpGet(
		`/allDom/${encodeURIComponent(serviceName)}/domain`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { domain: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
