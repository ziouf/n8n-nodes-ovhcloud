import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create an archive for an Email Exchange account.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
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
			displayName: 'Quota',
			name: 'quota',
			type: 'number',
			default: undefined,
			description: 'Archive quota',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account Archive operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const quota = this.getNodeParameter('quota', 0, undefined) as number | undefined;

	const body: IDataObject = {};
	if (quota !== undefined) body.quota = quota;

	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
