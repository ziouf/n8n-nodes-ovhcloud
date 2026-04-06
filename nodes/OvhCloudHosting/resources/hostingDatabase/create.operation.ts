import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Create Hosting Database operation
 *
 * Creates a new database in a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Hosting Database operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the hosting service',
			displayOptions,
		},
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the database to create',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Hosting Database operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/database
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created database info
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const data = (await client.httpPost(`/hosting/privateDatabase/${serviceName}/database`, {
		body: { databaseName },
	})) as IDataObject;
	return [{ json: data }];
}
