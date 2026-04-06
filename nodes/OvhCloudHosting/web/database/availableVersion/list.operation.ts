import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief List available database version following a type operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/databaseAvailableVersion` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of the database',
			displayOptions,
		},
	];
}

/**
 * Executes the List available database version following a type operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/databaseAvailableVersion
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/databaseAvailableVersion`, { qs: { type } })) as IDataObject;
	return [{ json: data }];
}
