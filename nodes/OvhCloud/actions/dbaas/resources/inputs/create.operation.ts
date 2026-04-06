import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an input for a DBaaS log service.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/input
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
			displayName: 'Title',
			name: 'title',
			type: 'string',
			default: '',
			required: true,
			description: 'Title for the input',
			displayOptions,
		},
		{
			displayName: 'Engine ID',
			name: 'engineId',
			type: 'string',
			default: '',
			required: true,
			description: 'The engine ID to use for this input',
			displayOptions,
		},
		{
			displayName: 'Configuration',
			name: 'configuration',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Input configuration as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Input operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const title = this.getNodeParameter('title', 0) as string;
	const engineId = this.getNodeParameter('engineId', 0) as string;
	const configurationRaw = this.getNodeParameter('configuration', 0, '{}') as string;
	const configuration = typeof configurationRaw === 'string' ? JSON.parse(configurationRaw) : configurationRaw;
	const body: IDataObject = { title, engineId, configuration };
	const data = (await client.httpPost(`/dbaas/logs/${serviceName}/input`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
