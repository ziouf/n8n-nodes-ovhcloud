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
		{
			displayName: 'Runtime Name',
			name: 'runtimeName',
			type: 'string',
			default: '',
			required: true,
		},
	];
}

/**
 * Get runtime details
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/runtime/{runtimeName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const runtimeName = this.getNodeParameter('runtimeName', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/hosting/web/${serviceName}/runtime/${runtimeName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
