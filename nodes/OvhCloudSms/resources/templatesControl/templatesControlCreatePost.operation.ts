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
			type: 'options',
			default: 'alerting',
			options: [
				{ name: 'Alerting', value: 'alerting' },
				{ name: 'Authentification', value: 'authentification' },
				{ name: 'Transactional', value: 'transactional' },
			],
			required: true,
			description: 'Specify the kind of template',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Template description',
			displayOptions,
		},
		{
			displayName: 'Message',
			name: 'message',
			type: 'string',
			default: '',
			required: true,
			description: 'Message pattern to be moderated. Use "#VALUE#" format for dynamic text area.',
			displayOptions,
		},
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
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Message seen by the moderator',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/templatesControl operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/templatesControl
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const activity = this.getNodeParameter('activity', 0) as string;
	const description = this.getNodeParameter('description', 0) as string;
	const message = this.getNodeParameter('message', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const reason = this.getNodeParameter('reason', 0) as string;
	const body: IDataObject = {};
	body['activity'] = activity;
	if (description) body['description'] = description;
	body['message'] = message;
	body['name'] = name;
	if (reason) body['reason'] = reason;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/templatesControl`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
