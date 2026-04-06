import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific helper for an input engine.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/input/engine/{engineId}/helper/{helperId}
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
			displayName: 'Engine ID',
			name: 'engineId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the engine',
			displayOptions,
		},
		{
			displayName: 'Helper ID',
			name: 'helperId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the helper',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Input Engine Helper operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const engineId = this.getNodeParameter('engineId', 0) as string;
	const helperId = this.getNodeParameter('helperId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/input/engine/${engineId}/helper/${helperId}`,
	)) as IDataObject;
	return [{ json: data }];
}
