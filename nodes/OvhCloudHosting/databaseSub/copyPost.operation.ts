import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Target Database',
			name: 'targetDatabase',
			type: 'string',
			default: '',
			required: true,
			description: 'The target database name to copy to',
			displayOptions,
		},
	];
}

/**
 * Copy database to another database
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/copy
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex ?? 0) as string;
	const targetDatabase = this.getNodeParameter('targetDatabase', _itemIndex ?? 0) as string;
	const data = await client.httpPost(`/hosting/web/database/${serviceName}/${databaseName}/copy`, {
		database: targetDatabase,
	});
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
