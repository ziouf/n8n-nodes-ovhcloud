import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Deploy a Nutanix node.
 *
 * HTTP method: PUT
 * Endpoint: /nutanix/{serviceName}/nodes/{server}/deploy
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
			displayName: 'Deploy Details (JSON)',
			name: 'deployDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Deploy configuration as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Deploy Node operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const server = this.getNodeParameter('server', 0) as string;
	const rawBody = this.getNodeParameter('deployDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(`/nutanix/${serviceName}/nodes/${server}/deploy`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
