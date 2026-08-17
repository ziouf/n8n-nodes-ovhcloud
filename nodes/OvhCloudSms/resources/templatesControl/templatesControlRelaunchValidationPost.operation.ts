import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			...SERVICE_NAME,
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
	const data = (await getClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/templatesControl/${encodeURIComponent(name)}/relaunchValidation`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
