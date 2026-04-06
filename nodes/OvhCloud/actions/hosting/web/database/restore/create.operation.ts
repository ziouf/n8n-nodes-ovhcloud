import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Request the restore from your database backup operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/database/{name}/restore` endpoint.
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
			displayName: 'Date',
			name: 'date',
			type: 'string',
			default: '',
			required: true,
			description: 'The date you want to dump',
			displayOptions,
		},
		{
			displayName: 'Send Email',
			name: 'sendEmail',
			type: 'boolean',
			default: false,
			description: 'Send an email when the restore will be done? Default: false',
			displayOptions,
		},
	];
}

/**
 * Executes the Request the restore from your database backup operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/database/{name}/restore
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const date = this.getNodeParameter('date', 0) as string;
	const sendEmail = this.getNodeParameter('sendEmail', 0) as boolean;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/database/${name}/restore`, { body: { date: date, sendEmail: sendEmail } })) as IDataObject;
	return [{ json: data }];
}
