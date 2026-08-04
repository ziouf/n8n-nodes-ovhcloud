import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			description: 'The domain to get the configuration rule for',
			displayOptions,
		},
	];
}

/**
 * Executes the Get configuration rule applied for a domain in a given action operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/configurationRule
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
		const action = this.getNodeParameter('action', itemIndex, '') as string;
		if (action !== '' && action !== undefined) qs['action'] = action;
		const domain = this.getNodeParameter('domain', itemIndex, '') as string;
		if (domain !== '' && domain !== undefined) qs['domain'] = domain;

	const data = (await client.httpGet(`/domain/configurationRule`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
