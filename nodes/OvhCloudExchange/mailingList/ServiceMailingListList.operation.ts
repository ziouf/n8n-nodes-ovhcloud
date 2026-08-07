import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Filter the value of company property (like)',
		},
		{
			displayName: 'Mailing List Address',
			name: 'mailingListAddress',
			type: 'string',
			default: '',
			description: 'Filter the value of mailingListAddress property (like)',
		},
	];
}

/**
 * Mailing list for this service
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const company = this.getNodeParameter('company', 0) as any;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', 0) as any;

	const qs: IDataObject = {
    company: company,
    mailingListAddress: mailingListAddress
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/mailingList", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
