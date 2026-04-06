import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a token for a metrics service.
 *
 * HTTP method: POST
 * Endpoint: /metrics/{serviceName}/token
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Token name',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Token description',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Token operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		name: this.getNodeParameter('name', 0) as string,
	};
	const description = this.getNodeParameter('description', 0, '') as string;
	if (description) body.description = description;
	const data = (await client.httpPost(`/metrics/${serviceName}/token`, { body })) as IDataObject;
	return [{ json: data }];
}
