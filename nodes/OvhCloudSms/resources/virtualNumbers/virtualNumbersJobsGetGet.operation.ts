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
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the object',
			displayOptions,
		},
		{
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'The virtual number',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
			displayOptions,
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/virtualNumbers/{number}/jobs/{id} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', 0) as number;
	const number = this.getNodeParameter('number', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/virtualNumbers/${encodeURIComponent(number)}/jobs/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
