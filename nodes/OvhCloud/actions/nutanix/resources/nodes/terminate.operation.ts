import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Terminate a Nutanix node.
 *
 * HTTP method: POST
 * Endpoint: /nutanix/{serviceName}/nodes/{server}/terminate
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
			displayName: 'Terminate Details (JSON)',
			name: 'terminateDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Termination details as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Terminate Node operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const server = this.getNodeParameter('server', 0) as string;
	const rawBody = this.getNodeParameter('terminateDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost(`/nutanix/${serviceName}/nodes/${server}/terminate`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
