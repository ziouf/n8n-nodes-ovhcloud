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
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Default email for this mailbox',
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			required: true,
			description: 'Language of outlook',
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'Version of outlook',
		},
	];
}

/**
 * Generate outlook url
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const language = this.getNodeParameter('language', 0) as any;
	const version = this.getNodeParameter('version', 0) as any;

	const body: IDataObject = {
    language: language,
    version: version
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/account/" + encodeURIComponent(primaryEmailAddress) + "/outlookURL", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
