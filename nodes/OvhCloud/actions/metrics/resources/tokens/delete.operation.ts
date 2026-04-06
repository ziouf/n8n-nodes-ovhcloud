import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a token for a metrics service.
 *
 * HTTP method: DELETE
 * Endpoint: /metrics/{serviceName}/token/{tokenId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the metrics service',
			displayOptions,
		},
		{
			displayName: 'Token ID',
			name: 'tokenId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The ID of the token to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Token operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const tokenId = this.getNodeParameter('tokenId', 0) as string;
	await client.httpDelete(`/metrics/${serviceName}/token/${tokenId}`);
	return [{ json: { success: true, serviceName, tokenId } }];
}
