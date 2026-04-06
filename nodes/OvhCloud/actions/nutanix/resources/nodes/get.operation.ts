import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details for a specific Nutanix node.
 *
 * HTTP method: GET
 * Endpoint: /nutanix/{serviceName}/nodes/{server}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Nutanix service',
			displayOptions,
		},
		{
			displayName: 'Server Name',
			name: 'server',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the server/node',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Node Details operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const server = this.getNodeParameter('server', 0) as string;
	const data = (await client.httpGet(`/nutanix/${serviceName}/nodes/${server}`)) as IDataObject;
	return [{ json: data }];
}
