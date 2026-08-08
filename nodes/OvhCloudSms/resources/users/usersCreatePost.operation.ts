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
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms login',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms password',
			typeOptions: { password: true },
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/users operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/users
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const body: IDataObject = {};
	body['login'] = login;
	body['password'] = password;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/users`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
