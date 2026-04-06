/**
 * @brief Create User Grant operation for private database
 *
 * HTTP POST request to `/hosting/privateDatabase/{serviceName}/user/{userName}/grant` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'User Name',
			name: 'userName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the user',
			displayOptions,
		},
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the database to grant access to',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const userName = this.getNodeParameter('userName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const data = (await client.httpPost(
		`/hosting/privateDatabase/${serviceName}/user/${userName}/grant`,
		{ body: { databaseName } },
	)) as IDataObject;
	return [{ json: data }];
}
