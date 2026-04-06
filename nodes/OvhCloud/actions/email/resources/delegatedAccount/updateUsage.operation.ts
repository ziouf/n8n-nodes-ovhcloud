import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update usage for a delegated account.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/delegatedAccount/{email}/updateUsage
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'The full email address of the delegated account',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Delegated Account Usage operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const email = this.getNodeParameter('email', 0) as string;
	const data = (await client.httpPost(
		`/email/domain/delegatedAccount/${email}/updateUsage`,
	)) as IDataObject;
	return [{ json: data }];
}
