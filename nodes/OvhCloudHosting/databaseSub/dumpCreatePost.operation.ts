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
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
		},
	];
}

/**
 * Create a database dump
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/dump
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex ?? 0) as string;
	const data = await client.httpPost(`/hosting/web/database/${serviceName}/${databaseName}/dump`);
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
