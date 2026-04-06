import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Lookup a token for a metrics service.
 *
 * HTTP method: POST
 * Endpoint: /metrics/{serviceName}/lookup/token
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
			description: 'Token to lookup',
			displayOptions,
		},
	];
}

/**
 * Executes the Lookup Token operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		token: this.getNodeParameter('token', 0) as string,
	};
	const data = (await client.httpPost(`/metrics/${serviceName}/lookup/token`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
