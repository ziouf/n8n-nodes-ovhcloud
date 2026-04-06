import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get account creation rules by providing account details.
 *
 * HTTP method: POST
 * Endpoint: /newAccount/rules
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Details (JSON)',
			name: 'accountDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Account details as a JSON object (same fields as create account)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Rules operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const rawBody = this.getNodeParameter('accountDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost('/newAccount/rules', { body })) as IDataObject;
	return [{ json: data }];
}
