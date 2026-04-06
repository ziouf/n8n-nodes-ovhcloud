import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create Hosting User operation
 *
 * Creates a new user on a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Hosting User operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the hosting service',
			displayOptions,
		},
		{
			displayName: 'User Name',
			name: 'userName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the user to create',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The password for the new user',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Hosting User operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/user
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created user info
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const userName = this.getNodeParameter('userName', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const data = (await client.httpPost(`/hosting/privateDatabase/${serviceName}/user`, {
		body: { userName, password },
	})) as IDataObject;
	return [{ json: data }];
}
