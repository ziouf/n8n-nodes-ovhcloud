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
			description: 'The SMS service name',
			displayOptions,
		},
	];
}

/**
 * Executes the List SMS Recipients operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/recipient
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${serviceName}/recipient`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
