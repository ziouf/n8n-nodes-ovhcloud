import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Confirm termination of a Nutanix cluster.
 *
 * HTTP method: POST
 * Endpoint: /nutanix/{serviceName}/confirmTermination
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
			displayName: 'Termination Details (JSON)',
			name: 'terminationDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Termination details as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const rawBody = this.getNodeParameter('terminationDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost(`/nutanix/${serviceName}/confirmTermination`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
