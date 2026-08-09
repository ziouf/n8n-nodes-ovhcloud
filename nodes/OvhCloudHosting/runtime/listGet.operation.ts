import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
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
 * List runtimes for hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/runtime
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/runtime`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
