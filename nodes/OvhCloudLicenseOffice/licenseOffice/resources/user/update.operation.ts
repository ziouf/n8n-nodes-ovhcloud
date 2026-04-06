import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Update a user for an Office license.
 *
 * HTTP method: PUT
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
			description: 'The activation email of the user',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'User fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update User operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const activationEmail = this.getNodeParameter('activationEmail', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/license/office/${serviceName}/user/${activationEmail}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
