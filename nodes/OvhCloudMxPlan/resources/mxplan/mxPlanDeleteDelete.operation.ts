import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The email service name',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete MX Plan operation.
 *
 * HTTP method: DELETE
 * Endpoint: /email/mxplan/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	await new ApiClient(this).httpDelete(`/email/mxplan/${serviceName}`);
	return this.helpers.returnJsonArray([{ serviceName, deleted: true }]);
}
