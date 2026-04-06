import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change Horizon View Customer user password.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'The username of the customer user',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'New password for the customer user',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Dedicated Horizon Customer User Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const username = this.getNodeParameter('username', 0) as string;
	const body: IDataObject = {};
	const password = this.getNodeParameter('password', 0, '') as string;
	if (password) body.password = password;

	const data = (await client.httpPost(
		`/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}/changePassword`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
