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
			displayName: 'Automatic Recredit Amount',
			name: 'automaticRecreditAmount',
			type: 'string',
			default: '',
			description: 'Property of sms.Account (allowed values: 100, 200, 250, 500, 1000, 5000, 10000)',
			displayOptions,
		},
		{
			displayName: 'Call Back',
			name: 'callBack',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Property of sms.Account (allowed values: disable, enable)',
			displayOptions,
		},
		{
			displayName: 'Stop Call Back',
			name: 'stopCallBack',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		}
	];
}

/**
 * Executes the Put /sms/{serviceName} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	const automaticRecreditAmount = this.getNodeParameter('automaticRecreditAmount', 0) as string;
	if (automaticRecreditAmount) body['automaticRecreditAmount'] = automaticRecreditAmount;
	const callBack = this.getNodeParameter('callBack', 0) as string;
	if (callBack) body['callBack'] = callBack;
	const description = this.getNodeParameter('description', 0) as string;
	if (description) body['description'] = description;
	const name = this.getNodeParameter('name', 0) as string;
	if (name) body['name'] = name;
	const status = this.getNodeParameter('status', 0) as string;
	if (status) body['status'] = status;
	const stopCallBack = this.getNodeParameter('stopCallBack', 0) as string;
	if (stopCallBack) body['stopCallBack'] = stopCallBack;
	const data = (await new ApiClient(this).httpPut(`/sms/${encodeURIComponent(serviceName)}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
