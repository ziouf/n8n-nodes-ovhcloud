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
		{
			displayName: 'Copy ID',
			name: 'copyId',
			type: 'string',
			default: '',
			required: true,
			description: 'UUID of the copy to restore',
			displayOptions,
		},
		{
			displayName: 'Flush Database',
			name: 'flushDatabase',
			type: 'boolean',
			default: false,
			description: 'Whether the database will be flushed before importing the dump. Default: false.',
			displayOptions,
		},
	];
}

/**
 * Request the copy restore in this database
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/copyRestore
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex as number) as string;
	const copyId = this.getNodeParameter('copyId', itemIndex as number) as string;
	const flushDatabase = this.getNodeParameter(
		'flushDatabase',
		itemIndex as number,
		false,
	) as boolean;
	const data = (await client.httpPost(
		`/hosting/web/database/${encodeURIComponent(serviceName)}/${encodeURIComponent(databaseName)}/copyRestore`,
		{ copyId, flushDatabase } as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
