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
 * Get available hosting configurations
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/availableConfigurations
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = await client.httpGet(`/hosting/web/${serviceName}/availableConfigurations`);
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
