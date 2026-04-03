import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get Hosting Whitelist operation
 *
 * Retrieves detailed information for a specific whitelisted IP within a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Hosting Whitelist operation
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
			description: 'The whitelisted IP address',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Hosting Whitelist operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/whitelist/{ip}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing whitelist entry details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/whitelist/${ip}`,
	)) as IDataObject;
	return [{ json: data }];
}
