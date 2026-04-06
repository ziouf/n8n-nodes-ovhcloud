/**
 * @brief Create Database Copy operation for private database
 *
 * HTTP POST request to `/hosting/privateDatabase/{serviceName}/database/{databaseName}/copy` endpoint.
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
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			required: true,
			description: 'Target database for the copy',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const to = this.getNodeParameter('to', 0) as string;
	const data = (await client.httpPost(
		`/hosting/privateDatabase/${serviceName}/database/${databaseName}/copy`,
		{ body: { to } },
	)) as IDataObject;
	return [{ json: data }];
}
