import type { IDataObject,  IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
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
 * Executes the Get MX Plan operation.
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await new ApiClient(this).httpGet(`/email/mxplan/${serviceName}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
