import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific IAM authorization.
 *
 * HTTP method: GET
 * Endpoint: /v2/iam/authorization/{authorizationId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Authorization ID',
			name: 'authorizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the authorization',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IAM Authorization operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const authorizationId = this.getNodeParameter('authorizationId', 0) as string;
	const data = (await client.httpGet(`/v2/iam/authorization/${authorizationId}`)) as IDataObject;
	return [{ json: data }];
}
