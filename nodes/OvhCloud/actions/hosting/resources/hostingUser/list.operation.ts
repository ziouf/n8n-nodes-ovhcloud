import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List Hosting Users operation
 *
 * Retrieves all users for a specific private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List Hosting Users operation
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
	];
}

/**
 * Executes the List Hosting Users operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/user
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing user names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/user`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
