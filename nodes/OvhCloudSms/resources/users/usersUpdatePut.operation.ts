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
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms user login',
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
			displayName: 'Call Back',
			name: 'callBack',
			type: 'string',
			default: '',
			description: 'Property of sms.User',
			displayOptions,
		},
		{
			displayName: 'Ip Restrictions',
			name: 'ipRestrictions',
			type: 'string',
			default: '',
			description: 'Property of sms.User (comma-separated list)',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			description: 'Property of sms.User',
			typeOptions: { password: true },
			displayOptions,
		},
		{
			displayName: 'Stop Call Back',
			name: 'stopCallBack',
			type: 'string',
			default: '',
			description: 'Property of sms.User',
			displayOptions,
		}
	];
}

/**
 * Executes the Put /sms/{serviceName}/users/{login} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/users/{login}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	const callBack = this.getNodeParameter('callBack', 0) as string;
	if (callBack) body['callBack'] = callBack;
	const ipRestrictions = this.getNodeParameter('ipRestrictions', 0) as string;
	if (ipRestrictions) body['ipRestrictions'] = (ipRestrictions as string).split(',').map((r: string) => r.trim());
	const password = this.getNodeParameter('password', 0) as string;
	if (password) body['password'] = password;
	const stopCallBack = this.getNodeParameter('stopCallBack', 0) as string;
	if (stopCallBack) body['stopCallBack'] = stopCallBack;
	const data = (await new ApiClient(this).httpPut(`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
