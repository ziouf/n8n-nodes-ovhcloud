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
			displayName: 'Outlook Language',
			name: 'outlookLanguage',
			type: 'string',
			default: '',
			description: 'Language version of outlook',
		},
		{
			displayName: 'Outlook Version',
			name: 'outlookVersion',
			type: 'string',
			default: '',
			description: 'OS version of outlook',
		},
	];
}

/**
 * Show available outlooks
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const outlookLanguage = this.getNodeParameter('outlookLanguage', 0) as any;
	const outlookVersion = this.getNodeParameter('outlookVersion', 0) as any;

	const qs: IDataObject = {
    outlookLanguage: outlookLanguage,
    outlookVersion: outlookVersion
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/outlookAvailability", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
