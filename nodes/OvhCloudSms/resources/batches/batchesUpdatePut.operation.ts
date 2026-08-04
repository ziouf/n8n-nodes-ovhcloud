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
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Property of sms.BatchUpdateParams',
			displayOptions,
		}
	];
}

/**
 * Executes the Put /sms/{serviceName}/batches/{id} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/batches/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const body: IDataObject = {};
	const name = this.getNodeParameter('name', 0) as string;
	body['name'] = name;
	const data = (await new ApiClient(this).httpPut(`/sms/${encodeURIComponent(serviceName)}/batches/${encodeURIComponent(id)}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
