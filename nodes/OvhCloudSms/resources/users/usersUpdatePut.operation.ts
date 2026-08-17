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
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms user login',
			displayOptions,
		},
		{
			...SERVICE_NAME,
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
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/users/{login} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/users/{login}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const callBack = this.getNodeParameter('callBack', _itemIndex ?? 0) as string;
	if (callBack) body['callBack'] = callBack;
	const ipRestrictions = this.getNodeParameter('ipRestrictions', _itemIndex ?? 0) as string;
	if (ipRestrictions)
		body['ipRestrictions'] = (ipRestrictions as string).split(',').map((r: string) => r.trim());
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;
	if (password) body['password'] = password;
	const stopCallBack = this.getNodeParameter('stopCallBack', _itemIndex ?? 0) as string;
	if (stopCallBack) body['stopCallBack'] = stopCallBack;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
