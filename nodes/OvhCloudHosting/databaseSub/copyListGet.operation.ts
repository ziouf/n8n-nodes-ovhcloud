import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			description: 'Database name (like mydb.mysql.db or mydb.postgres.db)',
			displayOptions,
		},
	];
}

/**
 * List copies available for your database
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/copy
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/database/${encodeURIComponent(serviceName)}/${encodeURIComponent(databaseName)}/copy`,
	)) as unknown;
	return this.helpers.returnJsonArray(
		Array.isArray(data) ? (data as IDataObject[]) : [data as IDataObject],
	);
}
