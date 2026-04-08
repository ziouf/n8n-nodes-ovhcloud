import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete an API application.
 *
 * HTTP method: DELETE
 * Endpoint: /me/api/application/{applicationId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Application ID',
			name: 'applicationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the API application to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete API Application operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const applicationId = this.getNodeParameter('applicationId', 0) as string;
	await client.httpDelete(`/me/api/application/${applicationId}`);
	return [{ json: { success: true, applicationId } }];
}
