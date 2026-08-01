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
 * Get database capabilities
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/capabilities
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const data = await client.httpGet(
		`/hosting/web/database/${serviceName}/${databaseName}/capabilities`,
	);
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
