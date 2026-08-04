import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		}
	];
}

/**
 * Executes the Delete /sms/{serviceName}/batches/{id} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/batches/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await new ApiClient(this).httpDelete(`/sms/${encodeURIComponent(serviceName)}/batches/${encodeURIComponent(id)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
