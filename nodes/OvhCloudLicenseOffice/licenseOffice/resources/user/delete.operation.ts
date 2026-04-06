import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Delete a user from an Office license.
 *
 * HTTP method: DELETE
 * Endpoint: /license/office/{serviceName}/user/{activationEmail}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Office license service',
			displayOptions,
		},
		{
			displayName: 'Activation Email',
			name: 'activationEmail',
			type: 'string',
			default: '',
			required: true,
			description: 'The activation email of the user to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete User operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const activationEmail = this.getNodeParameter('activationEmail', 0) as string;
	const data = (await client.httpDelete(
		`/license/office/${serviceName}/user/${activationEmail}`,
	)) as IDataObject;
	return [{ json: data }];
}
