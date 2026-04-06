/**
 * @brief Get Database Copy operation for private database
 *
 * HTTP GET request to `/hosting/privateDatabase/{serviceName}/database/{databaseName}/copy/{id}` endpoint.
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
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the database',
			displayOptions,
		},
		{
			displayName: 'Copy ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the copy',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/database/${databaseName}/copy/${id}`,
	)) as IDataObject;
	return [{ json: data }];
}
