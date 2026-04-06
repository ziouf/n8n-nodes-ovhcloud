import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Get IP Service operation.
 *
 * Retrieves properties of a specific IP service.
 *
 * HTTP method: GET
 * Endpoint: /ip/service/{serviceName}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP service name',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IP Service operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing IP service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/ip/service/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
