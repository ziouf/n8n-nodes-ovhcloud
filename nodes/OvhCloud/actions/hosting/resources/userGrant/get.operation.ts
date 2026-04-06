/**
 * @brief Get User Grant operation for private database
 *
 * HTTP GET request to `/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

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
			description: 'The name of the database',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const userName = this.getNodeParameter('userName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}`,
	)) as IDataObject;
	return [{ json: data }];
}
