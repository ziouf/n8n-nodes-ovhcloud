import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

const DOMAIN_ACTIONS: { name: string; value: string }[] = [
	{ name: 'Create', value: 'create' },
	{ name: 'Trade', value: 'trade' },
	{ name: 'Transfer', value: 'transfer' },
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Pack Xdsl Service Name',
			name: 'packName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your pack',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPackXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'packabcd-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'options',
			default: 'create',
			options: DOMAIN_ACTIONS,
			required: true,
			description: 'Domain action',
			displayOptions,
		},
		{
			displayName: 'Auth Info',
			name: 'authInfo',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Needed for transfer from another registrar',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain name',
			displayOptions,
		},
		{
			displayName: 'TLD',
			name: 'tld',
			type: 'string',
			default: '',
			required: true,
			description: 'TLD of the domain',
			displayOptions,
		},
	];
}

/**
 * Activate a domain service.
 *
 * HTTP method: POST
 * Endpoint: /pack/xdsl/{packName}/domain/services
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const packName = this.getNodeParameter('packName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const action = this.getNodeParameter('action', _itemIndex ?? 0) as string;
	const authInfo = (this.getNodeParameter('authInfo', _itemIndex ?? 0, '') as string) || '';
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const tld = this.getNodeParameter('tld', _itemIndex ?? 0) as string;

	const body: IDataObject = { action, domain, tld };
	if (authInfo) body.authInfo = authInfo;

	const data = (await client.httpPost(
		`/pack/xdsl/${encodeURIComponent(packName)}/domain/services`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
