import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Change contact for a Nutanix cluster.
 *
 * HTTP method: POST
 * Endpoint: /nutanix/{serviceName}/changeContact
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
			displayName: 'Contact Details (JSON)',
			name: 'contactDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Contact change details as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const rawBody = this.getNodeParameter('contactDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost(`/nutanix/${serviceName}/changeContact`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
