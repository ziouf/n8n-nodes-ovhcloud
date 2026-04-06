import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Delete Hosting User operation
 *
 * Deletes a user from a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Delete Hosting User operation
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
			description: 'The name of the user to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Hosting User operation.
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/privateDatabase/{serviceName}/user/{userName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const userName = this.getNodeParameter('userName', 0) as string;
	const data = (await client.httpDelete(
		`/hosting/privateDatabase/${serviceName}/user/${userName}`,
	)) as IDataObject;
	return [{ json: data }];
}
