/**
 * @brief Restore Database Dump operation for private database
 *
 * HTTP POST request to `/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore` endpoint.
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
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the database',
			displayOptions,
		},
		{
			displayName: 'Dump ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the dump to restore',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpPost(
		`/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}/restore`,
	)) as IDataObject;
	return [{ json: data }];
}
