import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Change DynHost Login Password operation
 *
 * Changes the password for a DynHost login.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/dynHost/login/{login}/changePassword
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The DynHost login name',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The new password',
			displayOptions,
		},
	];
}

/**
 * Executes the Change DynHost Login Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const body: IDataObject = { password };
	const data = (await client.httpPost(`/domain/zone/${zoneName}/dynHost/login/${login}/changePassword`, body)) as IDataObject;
	return [{ json: data }];
}
