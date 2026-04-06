/**
 * @brief Delete Own Logs User operation for web hosting
 *
 * HTTP DELETE request to `/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the web hosting service',
			displayOptions,
		},
		{
			displayName: 'Own Logs ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the own logs',
			displayOptions,
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The user login to delete',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const data = (await client.httpDelete(
		`/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}`,
	)) as IDataObject;
	return [{ json: data }];
}
