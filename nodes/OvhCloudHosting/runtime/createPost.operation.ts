import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(
	displayOptions: IDisplayOptions,
): import('n8n-workflow').INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Runtime Name',
			name: 'runtimeName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Create a runtime
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/runtime
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const runtimeName = this.getNodeParameter('runtimeName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/runtime`, {
		name: runtimeName,
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
