/**
 * @brief Create Cron operation for web hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/cron` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the web hosting service',
			displayOptions,
		},
		{
			displayName: 'Command',
			name: 'command',
			type: 'string',
			default: '',
			required: true,
			description: 'The command to execute',
			displayOptions,
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			required: true,
			description: 'The language of the cron job',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the cron job',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email for cron job output',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const command = this.getNodeParameter('command', 0) as string;
	const language = this.getNodeParameter('language', 0) as string;
	const description = this.getNodeParameter('description', 0, '') as string;
	const email = this.getNodeParameter('email', 0, '') as string;

	const body: IDataObject = { command, language };
	if (description) body.description = description;
	if (email) body.email = email;

	const data = (await client.httpPost(
		`/hosting/web/${serviceName}/cron`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
