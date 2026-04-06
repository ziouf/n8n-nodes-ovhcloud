import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List resource accounts.
 *
 * HTTP method: GET
 * Endpoint: resourceAccount
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
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Filter by company',
			displayOptions,
		},
		{
			displayName: 'Resource Email Address',
			name: 'resourceEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter by resource email address',
			displayOptions,
		},
	];
}

/**
 * Executes the List Resource Accounts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const company = this.getNodeParameter('company', 0, '') as string;
	const resourceEmailAddress = this.getNodeParameter('resourceEmailAddress', 0, '') as string;

	const qs: IDataObject = {};
	if (company) qs.company = company;
	if (resourceEmailAddress) qs.resourceEmailAddress = resourceEmailAddress;

	const data = (await client.httpGet(
		`/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
