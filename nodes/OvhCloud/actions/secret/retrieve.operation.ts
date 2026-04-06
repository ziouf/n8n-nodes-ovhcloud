import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Retrieve Secret operation for Secret resource
 *
 * Retrieves a secret sent by email:
 * - HTTP POST request to `/secret/retrieve` endpoint
 * - Requires email and secretId parameters
 * - No authentication required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Retrieve Secret operation
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
			description: 'Email address that received the secret',
			displayOptions,
		},
		{
			displayName: 'Secret ID',
			name: 'secretId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The ID of the secret to retrieve',
			displayOptions,
		},
	];
}

/**
 * Executes the Retrieve Secret operation.
 *
 * Retrieves a secret sent by email.
 *
 * HTTP method: POST
 * Endpoint: /secret/retrieve
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the retrieved secret
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const email = this.getNodeParameter('email', 0) as string;
	const secretId = this.getNodeParameter('secretId', 0) as string;
	const data = (await client.httpPost('/secret/retrieve', {
		body: { email, secretId },
	})) as IDataObject;
	return [{ json: data }];
}
