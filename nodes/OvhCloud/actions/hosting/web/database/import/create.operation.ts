import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Import a dump from an specific file uploaded with /me/documents operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/database/{name}/import` endpoint.
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
			displayName: 'Document ID',
			name: 'documentId',
			type: 'string',
			default: '',
			required: true,
			description: 'Documents ID of the dump from /me/documents',
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
		{
			displayName: 'Send Email',
			name: 'sendEmail',
			type: 'boolean',
			default: false,
			description: 'Send an email when the import will be done? Default: false',
			displayOptions,
		},
	];
}

/**
 * Executes the Import a dump from an specific file uploaded with /me/documents operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/database/{name}/import
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const documentId = this.getNodeParameter('documentId', 0) as string;
	const flushDatabase = this.getNodeParameter('flushDatabase', 0) as boolean;
	const sendEmail = this.getNodeParameter('sendEmail', 0) as boolean;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/database/${name}/import`, { body: { documentId: documentId, flushDatabase: flushDatabase, sendEmail: sendEmail } })) as IDataObject;
	return [{ json: data }];
}
