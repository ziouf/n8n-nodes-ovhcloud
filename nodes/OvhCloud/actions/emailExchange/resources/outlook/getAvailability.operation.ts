import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get Outlook availability for an Email Exchange service.
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability
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
			displayName: 'Outlook Language',
			name: 'outlookLanguage',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Outlook Version',
			name: 'outlookVersion',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Outlook Availability operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const outlookLanguage = this.getNodeParameter('outlookLanguage', 0, '') as string;
	const outlookVersion = this.getNodeParameter('outlookVersion', 0, '') as string;

	const qs: IDataObject = {};
	if (outlookLanguage) qs.outlookLanguage = outlookLanguage;
	if (outlookVersion) qs.outlookVersion = outlookVersion;

	const data = (await client.httpGet(
		`/email/exchange/${organizationName}/service/${exchangeService}/outlookAvailability`,
		qs,
	)) as IDataObject;
	return [{ json: data }];
}
