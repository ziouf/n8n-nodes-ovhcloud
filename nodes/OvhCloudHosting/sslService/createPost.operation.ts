import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
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
 * Create a default SSL certificate
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/ssl
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/ssl`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
