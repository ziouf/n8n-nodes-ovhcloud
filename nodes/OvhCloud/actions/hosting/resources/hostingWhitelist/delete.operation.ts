import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Delete Hosting Whitelist operation
 *
 * Deletes an IP whitelist entry from a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Delete Hosting Whitelist operation
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
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The whitelisted IP address to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Hosting Whitelist operation.
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/privateDatabase/{serviceName}/whitelist/{ip}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const data = (await client.httpDelete(
		`/hosting/privateDatabase/${serviceName}/whitelist/${ip}`,
	)) as IDataObject;
	return [{ json: data }];
}
