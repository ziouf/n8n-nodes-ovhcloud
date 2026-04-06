import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Reinstall a Nutanix node.
 *
 * HTTP method: PUT
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
		{
			displayName: 'Reinstall Details (JSON)',
			name: 'reinstallDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Reinstall configuration as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Reinstall Node operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const server = this.getNodeParameter('server', 0) as string;
	const rawBody = this.getNodeParameter('reinstallDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(`/nutanix/${serviceName}/nodes/${server}`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
