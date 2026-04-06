import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get SMS Batch operation
 *
 * Retrieves details of a specific SMS batch.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/batches/{batchId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SMS service',
			displayOptions,
		},
		{
			displayName: 'Batch ID',
			name: 'batchId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the SMS batch',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const batchId = this.getNodeParameter('batchId', 0) as string;
	const data = (await client.httpGet(`/sms/${serviceName}/batches/${batchId}`)) as IDataObject;
	return [{ json: data }];
}
