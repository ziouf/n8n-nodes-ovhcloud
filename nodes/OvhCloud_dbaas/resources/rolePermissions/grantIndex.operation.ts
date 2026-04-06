import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Grant index permission to a role.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}/permission/index
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
			displayName: 'Role ID',
			name: 'roleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the role',
			displayOptions,
		},
		{
			displayName: 'Index ID',
			name: 'indexId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the index to grant permission for',
			displayOptions,
		},
	];
}

/**
 * Executes the Grant Role Index Permission operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const roleId = this.getNodeParameter('roleId', 0) as string;
	const body: IDataObject = { indexId: this.getNodeParameter('indexId', 0) as string };
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/role/${roleId}/permission/index`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
