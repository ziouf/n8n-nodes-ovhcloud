import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * Refresh a Hycu license.
 *
 * HTTP method: POST
 * Endpoint: /license/hycu/{serviceName}/refresh
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Hycu license service',
			displayOptions,
		},
	];
}

/**
 * Executes the Refresh operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(
		`/license/hycu/${serviceName}/refresh`,
	)) as IDataObject;
	return [{ json: data }];
}
