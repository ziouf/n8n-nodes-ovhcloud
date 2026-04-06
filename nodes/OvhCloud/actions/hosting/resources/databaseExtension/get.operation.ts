/**
 * @brief Get Database Extension operation for private database
 *
 * HTTP GET request to `/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}` endpoint.
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
			displayName: 'Extension Name',
			name: 'extensionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the extension',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const extensionName = this.getNodeParameter('extensionName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}`,
	)) as IDataObject;
	return [{ json: data }];
}
