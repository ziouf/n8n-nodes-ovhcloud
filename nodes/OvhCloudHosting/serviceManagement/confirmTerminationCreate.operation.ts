import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
 * Confirm hosting termination
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const data = await client.httpPost(`/hosting/web/${serviceName}/confirmTermination`);
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
