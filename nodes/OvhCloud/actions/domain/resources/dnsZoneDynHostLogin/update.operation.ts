import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update DynHost Login operation
 *
 * Updates a DynHost login for a DNS zone.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/dynHost/login/{login}
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
			description: 'The DynHost login name to update',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The new password for the DynHost login',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DynHost Login operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;

	const body: IDataObject = {};
	const password = this.getNodeParameter('password', 0, '') as string;
	if (password) body.password = password;

	const data = (await client.httpPut(`/domain/zone/${zoneName}/dynHost/login/${login}`, body)) as IDataObject;
	return [{ json: data }];
}
