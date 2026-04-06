import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get Hosting Database operation
 *
 * Retrieves detailed information for a specific database within a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Hosting Database operation
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
			description: 'The name of the database',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Hosting Database operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/database/{databaseName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing database details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/database/${databaseName}`,
	)) as IDataObject;
	return [{ json: data }];
}
