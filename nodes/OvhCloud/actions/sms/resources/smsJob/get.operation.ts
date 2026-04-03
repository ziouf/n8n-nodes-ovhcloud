import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get SMS Job operation
 *
 * Retrieves details of a specific SMS job.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/jobs/{jobId}
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
			displayName: 'Job ID',
			name: 'jobId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the SMS job',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const jobId = this.getNodeParameter('jobId', 0) as string;
	const data = (await client.httpGet(`/sms/${serviceName}/jobs/${jobId}`)) as IDataObject;
	return [{ json: data }];
}
