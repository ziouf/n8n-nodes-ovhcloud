import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete an API credential.
 *
 * HTTP method: DELETE
 * Endpoint: /me/api/credential/{credentialId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Credential ID',
			name: 'credentialId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the API credential to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete API Credential operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const credentialId = this.getNodeParameter('credentialId', 0) as string;
	await client.httpDelete(`/me/api/credential/${credentialId}`);
	return [{ json: { success: true, credentialId } }];
}
