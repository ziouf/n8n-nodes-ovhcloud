import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create an alias for a shared account.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/alias
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Shared Email Address',
			name: 'sharedEmailAddress',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Alias',
			name: 'alias',
			type: 'string',
			default: '',
			required: true,
			description: 'The alias email address to create',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Shared Account Alias operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const sharedEmailAddress = this.getNodeParameter('sharedEmailAddress', 0) as string;
	const alias = this.getNodeParameter('alias', 0) as string;

	const body: IDataObject = { alias };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/alias`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
