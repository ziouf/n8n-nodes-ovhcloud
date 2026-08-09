import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

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
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Activity',
			name: 'activity',
			type: 'string',
			default: '',
			description:
				'Property of sms.TemplateControl (allowed values: alerting, authentification, transactional)',
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
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/templatesControl/{name} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/templatesControl/{name}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const activity = this.getNodeParameter('activity', _itemIndex ?? 0) as string;
	if (activity) body['activity'] = activity;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	if (description) body['description'] = description;
	const message = this.getNodeParameter('message', _itemIndex ?? 0) as string;
	if (message) body['message'] = message;
	const data = (await new ApiClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/templatesControl/${encodeURIComponent(name)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
