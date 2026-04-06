import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create Outlook URL for an Email Exchange account.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
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
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The primary email address of the account',
			displayOptions,
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			required: true,
			description: 'The language for the Outlook URL',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'The version for the Outlook URL',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account Outlook URL operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const language = this.getNodeParameter('language', 0) as string;
	const version = this.getNodeParameter('version', 0) as string;

	const body: IDataObject = { language, version };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/outlookURL`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
