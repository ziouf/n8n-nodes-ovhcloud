import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Generate logs URL for an input.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/input/{inputId}/logs/url
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
		{
			displayName: 'Input ID',
			name: 'inputId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the input',
			displayOptions,
		},
	];
}

/**
 * Executes the Generate Input Logs URL operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const inputId = this.getNodeParameter('inputId', 0) as string;
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/input/${inputId}/logs/url`,
	)) as IDataObject;
	return [{ json: data }];
}
