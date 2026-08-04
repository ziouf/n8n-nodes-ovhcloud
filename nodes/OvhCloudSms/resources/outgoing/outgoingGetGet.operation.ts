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
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/outgoing/{id} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/outgoing/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as number;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/outgoing/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
