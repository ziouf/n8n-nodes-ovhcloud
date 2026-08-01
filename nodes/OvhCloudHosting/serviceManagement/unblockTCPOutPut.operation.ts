import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
		},
	];
}

/**
 * Unblock TCP outgoing connections
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/unblockTCPOut
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = await client.httpPut(`/hosting/web/${serviceName}/unblockTCPOut`, {});
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
