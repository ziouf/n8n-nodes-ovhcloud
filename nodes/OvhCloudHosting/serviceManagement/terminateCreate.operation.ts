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
 * Terminate hosting service
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/terminate
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const data = await client.httpPost(`/hosting/web/${serviceName}/terminate`);
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
