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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the template',
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
		},
		{
			displayName: 'Activity',
			name: 'activity',
			type: 'string',
			default: '',
			description: 'Property of sms.TemplateControl (allowed values: alerting, authentification, transactional)',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Property of sms.TemplateControl',
			displayOptions,
		},
		{
			displayName: 'Message',
			name: 'message',
			type: 'string',
			default: '',
			description: 'Property of sms.TemplateControl',
			displayOptions,
		}
	];
}

/**
 * Executes the Put /sms/{serviceName}/templatesControl/{name} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/templatesControl/{name}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	const activity = this.getNodeParameter('activity', 0) as string;
	if (activity) body['activity'] = activity;
	const description = this.getNodeParameter('description', 0) as string;
	if (description) body['description'] = description;
	const message = this.getNodeParameter('message', 0) as string;
	if (message) body['message'] = message;
	const data = (await new ApiClient(this).httpPut(`/sms/${encodeURIComponent(serviceName)}/templatesControl/${encodeURIComponent(name)}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
