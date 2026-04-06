import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an account delegation.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/delegation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the email account',
			displayOptions,
		},
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The account ID to delegate',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account Delegation operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const accountId = this.getNodeParameter('accountId', 0) as number;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/account/${accountName}/delegation`,
		{ accountId },
	)) as IDataObject;
	return [{ json: data }];
}
