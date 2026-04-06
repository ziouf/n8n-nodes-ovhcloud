import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete Sync configuration for an MS service.
 * HTTP method: DELETE
 * Endpoint: /msServices/{serviceName}/sync
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the MS service',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	await client.httpDelete(`/msServices/${serviceName}/sync`);
	return [{ json: { success: true, serviceName } }];
}
