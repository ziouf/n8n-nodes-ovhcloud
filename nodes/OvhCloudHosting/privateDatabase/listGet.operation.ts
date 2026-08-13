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
 * List private databases for hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/privateDatabases
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/privateDatabases`)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
