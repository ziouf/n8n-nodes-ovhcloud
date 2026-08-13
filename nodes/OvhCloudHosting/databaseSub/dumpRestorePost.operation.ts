import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
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
			description: 'Database name (like mydb.mysql.db or mydb.postgres.db)',
			displayOptions,
		},
		{
			displayName: 'Dump ID',
			name: 'dumpId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Request the restore from this dump
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/dump/{id}/restore
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex as number) as string;
	const dumpId = this.getNodeParameter('dumpId', _itemIndex as number) as number;
	const data = (await client.httpPost(
		`/hosting/web/database/${encodeURIComponent(serviceName)}/${encodeURIComponent(databaseName)}/dump/${encodeURIComponent(String(dumpId))}/restore`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
