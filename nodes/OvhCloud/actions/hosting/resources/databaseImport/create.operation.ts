/**
 * @brief Create Database Import operation for private database
 *
 * HTTP POST request to `/hosting/privateDatabase/{serviceName}/database/{databaseName}/import` endpoint.
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
			displayName: 'Database Name (Import)',
			name: 'importDatabaseName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the database to import',
			displayOptions,
		},
		{
			displayName: 'File Name',
			name: 'fileName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the file to import',
			displayOptions,
		},
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			description: 'The service name',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const importDatabaseName = this.getNodeParameter('importDatabaseName', 0) as string;
	const fileName = this.getNodeParameter('fileName', 0) as string;
	const service = this.getNodeParameter('service', 0, '') as string;

	const body: IDataObject = { databaseName: importDatabaseName, fileName };
	if (service) body.service = service;

	const data = (await client.httpPost(
		`/hosting/privateDatabase/${serviceName}/database/${databaseName}/import`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
