import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List mailing lists for an Email Exchange service.
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList
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
			displayName: 'Mailing List Address',
			name: 'mailingListAddress',
			type: 'string',
			default: '',
			description: 'Filter by mailing list address',
			displayOptions,
		},
	];
}

/**
 * Executes the List Mailing Lists operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const company = this.getNodeParameter('company', 0, '') as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', 0, '') as string;

	const qs: IDataObject = {};
	if (company) qs.company = company;
	if (mailingListAddress) qs.mailingListAddress = mailingListAddress;

	const data = (await client.httpGet(
		`/email/exchange/${organizationName}/service/${exchangeService}/mailingList`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
