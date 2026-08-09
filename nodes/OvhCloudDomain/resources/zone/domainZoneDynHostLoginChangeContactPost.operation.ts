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
			description: 'The login identifier',
			displayOptions,
		},
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'New password of the DynHost login',
			displayOptions,
		},
	];
}

/**
 * Executes the Change password of the DynHost login operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/dynHost/login/{login}/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const login = this.getNodeParameter('login', _itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const password = this.getNodeParameter('password', _itemIndex, '') as string;
		body['password'] = password;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/dynHost/login/${encodeURIComponent(login)}/changePassword`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
