import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Action',
			name: 'action',
			type: 'options',
			default: 'create',
			options: [
				{ name: 'Create', value: 'create' },
				{ name: 'Trade', value: 'trade' },
				{ name: 'Transfer', value: 'transfer' },
				{ name: 'Update', value: 'update' },
			],
			required: true,
			description: 'Depending on the action, the applied rule will change (transfer vs create)',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain to check the rule data for',
			displayOptions,
		},
		{
			displayName: 'Admin Account',
			name: 'adminAccount',
			type: 'json',
			default: '',
			description: 'The admin contact data',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'json',
			default: '',
			description: 'The domain data',
			displayOptions,
		},
		{
			displayName: 'Extras',
			name: 'extras',
			type: 'json',
			default: '',
			description: 'The extra data of the rule',
			displayOptions,
		},
		{
			displayName: 'Owner',
			name: 'owner',
			type: 'json',
			default: '',
			description: 'The owner contact data',
			displayOptions,
		},
		{
			displayName: 'Tech Account',
			name: 'techAccount',
			type: 'json',
			default: '',
			description: 'The tech contact data',
			displayOptions,
		},
	];
}

/**
 * Executes the Validate a rule data for a specified domain operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/configurationRule/check
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const qs: IDataObject = {};
	const action = this.getNodeParameter('action', _itemIndex, '') as string;
	if (action !== '' && action !== undefined) qs['action'] = action;
	const domain = this.getNodeParameter('domain', _itemIndex, '') as string;
	if (domain !== '' && domain !== undefined) qs['domain'] = domain;

	const body: IDataObject = {};
	const adminAccount = this.getNodeParameter('adminAccount', _itemIndex, '') as string;
	if (adminAccount !== '') body['adminAccount'] = JSON.parse(adminAccount);
	const domainData = this.getNodeParameter('domain', _itemIndex, '') as string;
	if (domainData !== '') body['domain'] = JSON.parse(domainData);
	const extras = this.getNodeParameter('extras', _itemIndex, '') as string;
	if (extras !== '') body['extras'] = JSON.parse(extras);
	const owner = this.getNodeParameter('owner', _itemIndex, '') as string;
	if (owner !== '') body['owner'] = JSON.parse(owner);
	const techAccount = this.getNodeParameter('techAccount', _itemIndex, '') as string;
	if (techAccount !== '') body['techAccount'] = JSON.parse(techAccount);

	const data = (await client.httpPost(`/domain/configurationRule/check`, body, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
