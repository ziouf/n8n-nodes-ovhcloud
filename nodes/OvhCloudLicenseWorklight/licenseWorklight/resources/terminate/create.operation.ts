import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Terminate a Worklight license service.
 *
 * HTTP method: POST
 * Endpoint: /license/worklight/{serviceName}/terminate
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Worklight license service',
			displayOptions,
		},
	];
}

/**
 * Executes the Terminate operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(
		`/license/worklight/${serviceName}/terminate`,
	)) as IDataObject;
	return [{ json: data }];
}
