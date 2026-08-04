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
 * Executes the Delete /sms/{serviceName}/virtualNumbers/{number}/chatAccess operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/virtualNumbers/{number}/chatAccess
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await new ApiClient(this).httpDelete(`/sms/${encodeURIComponent(serviceName)}/virtualNumbers/${encodeURIComponent(number)}/chatAccess`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
