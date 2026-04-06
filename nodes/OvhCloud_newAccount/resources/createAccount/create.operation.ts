import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a new OVH account.
 *
 * HTTP method: POST
 * Endpoint: /newAccount
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Details (JSON)',
			name: 'accountDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Account creation details as a JSON object (e.g., name, email, address, etc.)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const rawBody = this.getNodeParameter('accountDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost('/newAccount', { body })) as IDataObject;
	return [{ json: data }];
}
