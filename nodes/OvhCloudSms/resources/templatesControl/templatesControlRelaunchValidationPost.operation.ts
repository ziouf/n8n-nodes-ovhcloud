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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
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
	];
}

/**
 * Executes the Post /sms/{serviceName}/templatesControl/{name}/relaunchValidation operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/templatesControl/{name}/relaunchValidation
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	const message = this.getNodeParameter('message', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	body['description'] = description;
	body['message'] = message;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/templatesControl/${encodeURIComponent(name)}/relaunchValidation`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
