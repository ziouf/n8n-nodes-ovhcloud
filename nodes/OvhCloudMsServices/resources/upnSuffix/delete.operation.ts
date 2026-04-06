import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a UPN suffix for an MS service.
 * HTTP method: DELETE
 * Endpoint: /msServices/{serviceName}/upnSuffix/{suffix}
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
		{
			displayName: 'Suffix',
			name: 'suffix',
			type: 'string',
			default: '',
			required: true,
			description: 'The UPN suffix to delete',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const suffix = this.getNodeParameter('suffix', 0) as string;
	await client.httpDelete(`/msServices/${serviceName}/upnSuffix/${suffix}`);
	return [{ json: { success: true, serviceName, suffix } }];
}
