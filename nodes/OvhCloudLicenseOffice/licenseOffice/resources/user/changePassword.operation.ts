import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Change password for an Office license user.
 *
 * HTTP method: POST
 * Endpoint: /license/office/{serviceName}/user/{activationEmail}/changePassword
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
			description: 'The activation email of the user',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const activationEmail = this.getNodeParameter('activationEmail', 0) as string;
	const data = (await client.httpPost(
		`/license/office/${serviceName}/user/${activationEmail}/changePassword`,
	)) as IDataObject;
	return [{ json: data }];
}
