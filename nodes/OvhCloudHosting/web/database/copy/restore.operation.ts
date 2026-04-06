import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Request the copy restore in this database operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/database/{name}/copyRestore` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Database name (like mydb.mysql.db or mydb.postgres.db)',
			displayOptions,
		},
		{
			displayName: 'Copy ID',
			name: 'copyId',
			type: 'string',
			default: '',
			required: true,
			description: 'UUID of the copy to restore',
			displayOptions,
		},
		{
			displayName: 'Flush Database',
			name: 'flushDatabase',
			type: 'boolean',
			default: false,
			description: 'If database will be flushed before importing the dump. Default: false.',
			displayOptions,
		},
	];
}

/**
 * Executes the Request the copy restore in this database operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/database/{name}/copyRestore
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const copyId = this.getNodeParameter('copyId', 0) as string;
	const flushDatabase = this.getNodeParameter('flushDatabase', 0) as boolean;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/database/${name}/copyRestore`, { body: { copyId: copyId, flushDatabase: flushDatabase } })) as IDataObject;
	return [{ json: data }];
}
