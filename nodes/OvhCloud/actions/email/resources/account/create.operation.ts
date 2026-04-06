import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an email account.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the email account to create',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
			description: 'Password for the email account',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description for the email account',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'number',
			default: 0,
			description: 'Storage size in MB',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const body: IDataObject = { accountName, password };
	const description = this.getNodeParameter('description', 0, '') as string;
	const size = this.getNodeParameter('size', 0, 0) as number;
	if (description) body.description = description;
	if (size) body.size = size;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/account`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
