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
			displayName: 'Resource Email Address',
			name: 'resourceEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter the value of resourceEmailAddress property (like)',
		},
	];
}

/**
 * Resource account associated to this service
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const company = this.getNodeParameter('company', _itemIndex ?? 0) as string;
	const resourceEmailAddress = this.getNodeParameter('resourceEmailAddress', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
    company: company,
    resourceEmailAddress: resourceEmailAddress
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/resourceAccount", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
