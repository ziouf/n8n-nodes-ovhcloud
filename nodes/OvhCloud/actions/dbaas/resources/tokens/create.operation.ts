import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a token for a DBaaS log service.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/token
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Token name',
			displayOptions,
		},
		{
			displayName: 'Role',
			name: 'role',
			type: 'string',
			default: '',
			required: true,
			description: 'Role to assign to the token',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Token operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		name: this.getNodeParameter('name', 0) as string,
		role: this.getNodeParameter('role', 0) as string,
	};
	const data = (await client.httpPost(`/dbaas/logs/${serviceName}/token`, { body })) as IDataObject;
	return [{ json: data }];
}
