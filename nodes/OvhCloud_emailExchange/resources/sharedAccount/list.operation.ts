import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List shared accounts for an Email Exchange service.
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
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
			description: 'Filter by shared email address',
			displayOptions,
		},
	];
}

/**
 * Executes the List Shared Accounts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const sharedEmailAddress = this.getNodeParameter('sharedEmailAddress', 0, '') as string;

	const qs: IDataObject = {};
	if (sharedEmailAddress) qs.sharedEmailAddress = sharedEmailAddress;

	const data = (await client.httpGet(
		`/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
