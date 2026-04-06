import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Start an input for a DBaaS log service.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/input/{inputId}/start
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
			description: 'The ID of the input to start',
			displayOptions,
		},
	];
}

/**
 * Executes the Start Input operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const inputId = this.getNodeParameter('inputId', 0) as string;
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/input/${inputId}/start`,
	)) as IDataObject;
	return [{ json: data }];
}
