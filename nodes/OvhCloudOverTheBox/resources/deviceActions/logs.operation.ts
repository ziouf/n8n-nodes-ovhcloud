import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Generate a temporary URL to retrieve device logs.
 *
 * HTTP method: POST
 * Endpoint: /overTheBox/{serviceName}/device/logs
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the OverTheBox service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Device Logs URL operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(`/overTheBox/${serviceName}/device/logs`)) as IDataObject;
	return [{ json: data }];
}
