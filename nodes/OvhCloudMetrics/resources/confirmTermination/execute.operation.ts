import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Confirm termination of a metrics service.
 *
 * HTTP method: POST
 * Endpoint: /metrics/{serviceName}/confirmTermination
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the metrics service',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Termination confirmation token',
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
	const body: IDataObject = {
		token: this.getNodeParameter('token', 0) as string,
	};
	const data = (await client.httpPost(`/metrics/${serviceName}/confirmTermination`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
