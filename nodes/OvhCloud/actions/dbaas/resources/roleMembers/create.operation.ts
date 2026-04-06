import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a member for a role.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}/member
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
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Username for the member',
			displayOptions,
		},
		{
			displayName: 'Metadata',
			name: 'metadata',
			type: 'json',
			default: '{}',
			description: 'Member metadata as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Role Member operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const roleId = this.getNodeParameter('roleId', 0) as string;
	const metadataRaw = this.getNodeParameter('metadata', 0, '{}') as string;
	const metadata = typeof metadataRaw === 'string' ? JSON.parse(metadataRaw) : metadataRaw;
	const body: IDataObject = {
		username: this.getNodeParameter('username', 0) as string,
	};
	if (Object.keys(metadata).length > 0) body.metadata = metadata;
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/role/${roleId}/member`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
