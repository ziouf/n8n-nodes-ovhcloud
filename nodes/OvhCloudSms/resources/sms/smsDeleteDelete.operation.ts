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
			description: 'The SMS service name',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete SMS operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	await new ApiClient(this).httpDelete(`/sms/${serviceName}`);
	return this.helpers.returnJsonArray([{ serviceName, deleted: true }]);
}
